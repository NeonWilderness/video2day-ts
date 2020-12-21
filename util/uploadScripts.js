/**
 * upload2cdn: uploads following files to the twoday CDN
 * =====================================================
 * videoload2-min-js      (from ./dist/videoload2.js)
 * videoload2-tool-min-js (from ./dist/videoload2-tool.js)
 * videoload2-story       (from ./dist/videoload2-story.js)
 */

const fs = require('fs');
const { req, acceptTerms } = require('./_acceptTerms');
const { getSecretKey, getSecretKeyAndUri, loginTwoday } = require('./_login');

const fileCreateUrl = 'https://cdn.twoday.net/files/create';

/**
 * Script files to be uploaded
 * name: script name utilized in Twoday /files
 * src:  the appropriate dist-scriptfile to be uploaded
 * desc: short description to be inserted
 */
const uploadFiles = [
  { name: 'videoload2-min-js', src: 'videoload2.js', desc: 'Videoload Version 2: ermöglicht in Twoday die Einbindung von iframe-Elementen von verschiedensten Plattformen.' },
  { name: 'videoload2-tool-min-js', src: 'videoload2-tool.js', desc: 'Story-Script für den Beitrag stories/videotool2' },
  { name: 'videoload2-story-min-js', src: 'videoload2-story.js', desc: 'Story-Script für den Beitrag stories/videoload2' }
];

/**
 * Request-Promise sequence to update one file (file needs to be deleted and re-inserted)
 */
const updateCDNFile = (cdnFile, fileIndex) => {
  const fileDeleteUrl = `https://cdn.twoday.net/files/${cdnFile.name}/delete`;
  console.log('Preparing to delete file url:', fileDeleteUrl);
  return req.get({
    uri: fileDeleteUrl,
    transform: getSecretKeyAndUri
  })
    .then(incoming => {
      console.log('Deleting file url:', incoming.uri);
      return req.post({
        uri: incoming.uri,
        form: {
          'secretKey': incoming.secretKey,
          'remove': 'Löschen'
        }
      });
    })
    /* Init file upload */
    .then(() => {
      console.log('Delete completed. Prep to recreate.');
      return req.get({
        uri: fileCreateUrl,
        transform: getSecretKey
      });
    })
    /* Conduct file upload */
    .then(secretKey => {
      return req.post({
        uri: fileCreateUrl,
        formData: {
          'secretKey': secretKey,
          'rawfile': {
            value: fs.createReadStream(__dirname + '/../dist/' + cdnFile.src),
            options: {
              filename: cdnFile.src,
              contentType: 'application/javascript'
            }
          },
          'alias': cdnFile.name,
          'description': cdnFile.desc,
          'save': 'Sichern'
        },
      });
    })
    .then(() => {
      console.log(`Update completed for file #${fileIndex + 1}: ${cdnFile.name} (${cdnFile.src}).\n`);
    })
    .catch(err => {
      console.log('Upload ***failed*** for file:', cdnFile.src, 'with Error', err);
    });
};

const updateAllScripts = async () => {
  for (let i = 0; i < uploadFiles.length; i++) {
    await updateCDNFile(uploadFiles[i], i);
  }
};

acceptTerms()
  .then(() => {
    console.log('Terms accepted. Now logging in...');
    return loginTwoday();
  })
  .then(() => {
    return updateAllScripts();
  })
  .catch(err => {
    console.log('Upload failed with error: ', err);
  });
