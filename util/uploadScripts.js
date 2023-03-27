/**
 * upload2cdn: uploads following files to the twoday CDN
 * =====================================================
 * videoload2-min-js      (from ./dist/videoload2.js)
 * videoload2-tool-min-js (from ./dist/videoload2-tool.js)
 * videoload2-story       (from ./dist/videoload2-story.js)
 */
const path = require('path');
const Twoday = require('@neonwilderness/twoday');
require('dotenv-safe').config();

/**
 * Script files to be uploaded
 * name: script name utilized in Twoday /files
 * src:  the appropriate dist-scriptfile to be uploaded
 * desc: short description to be inserted
 */
const uploadFiles = [
  {
    name: 'videoload2-min-js',
    src: 'videoload2.js',
    desc: 'Videoload Version 2: ermöglicht in Twoday die Einbindung von iframe-Elementen von verschiedensten Plattformen.'
  },
  {
    name: 'videoload2-tool-min-js',
    src: 'videoload2-tool.js',
    desc: 'Story-Script für den Beitrag stories/videotool2'
  },
  {
    name: 'videoload2-story-min-js',
    src: 'videoload2-story.js',
    desc: 'Story-Script für den Beitrag stories/videoload2'
  }
];

(async () => {
  try {
    const td = new Twoday.Twoday('dev', { delay: 300 });
    await td.login();
    for (const file of uploadFiles) {
      const fileID = await td.updateFile('neonwilderness', {
        name: file.name,
        path: path.resolve(process.cwd(), 'dist', file.src),
        description: file.desc
      });
      console.log(`Update completed for file "${fileID}": ${file.name} (${file.src}).`);
    }
    await td.logout();
  } catch (err) {
    console.log(`>>> Error updating stories: ${err}.`);
  }
})();
