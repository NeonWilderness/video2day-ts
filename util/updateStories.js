/**
 * uploadStories: updates the relevant stories (html) on twoday
 * ============================================================
 * /stories/videoload2 (from ./dist/videoload-version2.html.html)
 * /stories/providerdocumentation (from ./dist/videoload-provider.html)
 * /stories/videotool2 (from ./dist/videotool-version2.html)
 */
const fs = require('fs');
const path = require('path');
const Twoday = require('@neonwilderness/twoday');
require('dotenv-safe').config();

const uploadFiles = [
  { name: 'videoload2', src: 'videoload-version2.html' },
  { name: 'providerdocumentation', src: 'videoload-provider.html' },
  { name: 'videotool2', src: 'videotool-version2.html' }
];

(async () => {
  try {
    const td = new Twoday.Twoday('dev', { delay: 300 });
    await td.login();
    for (const file of uploadFiles) {
      await td.updateStory('neonwilderness', {
        niceurl: file.name,
        body: fs.readFileSync(path.resolve(process.cwd(), 'dist', file.src), 'utf8')
      });
      console.log(`Update completed for story: ${file.name} (${file.src}).`);
    }
    await td.logout();
  } catch (err) {
    console.log(`>>> Error updating stories: ${err}.`);
  }
})();
