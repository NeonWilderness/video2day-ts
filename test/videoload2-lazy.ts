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
html += '<p>Other/Autoplay/Poster</p>' +
'<div style="width:320px;height:427px;margin:0 auto">' +
'  <div class="html5video other poster autoplay" id="https://neonwilderness.de/public/images/zEeJS7a.mp4"></div>' +
'</div>';
div.innerHTML = html;

// run videoload
video2day.run({
    debug: true,
    lazyLoad: true
});