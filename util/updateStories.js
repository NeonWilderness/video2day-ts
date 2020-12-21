/**
 * uploadStories: updates the relevant stories (html) on twoday
 * ============================================================
 * /stories/videoload2 (from ./dist/videoload-version2.html.html)
 * /stories/providerdocumentation (from ./dist/videoload-provider.html)
 * /stories/videotool2 (from ./dist/videotool-version2.html)
 */

const cheerio = require('cheerio');
const fs = require('fs');
const { req, acceptTerms } = require('./_acceptTerms');
const { loginTwoday } = require('./_login');

const blogUrl = 'https://neonwilderness.twoday.net/stories/';

/**
 * Returns GET story input field values to be used in a subsequent POST
 */
const getIncomingData = function (body, response, resolveWithFullResponse) {
  const $ = cheerio.load(body);
  return {
    secretKey: $('[name="secretKey"]').val(),
    content_title: $('[name="content_title"]').val(),
    modNiceUrls_urlid: $('[name="modNiceUrls_urlid"]').val(),
    addToFront: $('[name="addToFront"]').val(),
    checkbox_addToFront: $('[name="checkbox_addToFront"]').val(),
    addToTopic: $('[name="addToTopic"]').val(),
    topic: $('[name="topic"]').val(),
    editableby: $('[name="editableby"]').val(),
    discussions: $('[name="discussions"]').val(),
    checkbox_discussions: $('[name="checkbox_discussions"]').val(),
    createtime: $('[name="createtime"]').val(),
    publish: $('[name="publish"]').val()
  };
};

/**
 * Files to be uploaded
 * name: the story's niceurl name
 * src:  the appropriate dist-file to be copied into the story
 */
const uploadFiles = [
  { name: 'videoload2', src: 'videoload-version2.html' },
  { name: 'providerdocumentation', src: 'videoload-provider.html' },
  { name: 'videotool2', src: 'videotool-version2.html' }
];

/**
 * Request-Promise sequence to update one file
 */
const updateStory = (story, fileIndex) => {
  const storyEditUrl = `${blogUrl}${story.name}/edit`;
  console.log('Preparing to edit story:', storyEditUrl);
  return req.get({
    uri: storyEditUrl,
    transform: getIncomingData
  })
    .then(incoming => {
      console.log('Updating story:', storyEditUrl);
      return req.post({
        uri: storyEditUrl,
        form: {
          'secretKey': incoming.secretKey,
          'content_title': incoming.content_title,
          'modNiceUrls_urlid': incoming.modNiceUrls_urlid,
          'content_text': fs.readFileSync(`${__dirname}/../dist/${story.src}`, 'utf8'),
          'addToFront': incoming.addToFront,
          'checkbox_addToFront': incoming.checkbox_addToFront,
          'addToTopic': incoming.addToTopic,
          'topic': incoming.topic,
          'editableby': incoming.editableby,
          'discussions': incoming.discussions,
          'checkbox_discussions': incoming.checkbox_discussions,
          'createtime': incoming.createtime,
          'publish': incoming.publish
        }
      });
    })
    .then(() => {
      console.log(`Update completed for story #${fileIndex + 1}: ${story.name} (${story.src}).\n`);
    })
    .catch(err => {
      console.log('Update ***failed*** for story:', story.src, 'with Error', err);
    });
};

const updateAllStories = async () => {
  for (let i = 0; i < uploadFiles.length; i++) {
    await updateStory(uploadFiles[i], i);
  }
};

acceptTerms()
  .then(() => {
    console.log('Terms accepted. Now logging in...');
    return loginTwoday();
  })
  // process story/file list to be uploaded
  .then(() => {
    return updateAllStories();
  })
  .catch(err => {
    console.log('Update failed with error: ', err);
  });
