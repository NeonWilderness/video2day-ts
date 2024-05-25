'use strict';

import { embedCodes } from './provider-embed-codes';
declare const video2day: any;

// target container for iframes
const div = document.getElementById('testDIV');

// generate html5video DIVs from embedCodes
let html = '';
embedCodes.forEach(embed => {
  html += `<p>${embed.id}</p><div id="${embed.expect.vid}" class="${embed.expect.param}"></div>`;
});
html += `<p>Two tenor gifs in a flex div</p>
<div style="display:flex; justify-content:space-around">
  <div class="html5video tenor" id="13733885" width="45%"></div>
  <div class="html5video tenor width-232" id="15140161" width="45%"></div>
</div>
`;
html +=
  '<p>Other/Autoplay/Poster</p>' +
  '<div style="width:320px;height:427px;margin:0 auto">' +
  '  <div class="html5video other poster autoplay" id="https://neonwilderness.de/public/images/zEeJS7a.mp4"></div>' +
  '</div>';
div.innerHTML = html;

// run videoload
video2day.run({
  debug: true,
  lazyLoad: true
});
