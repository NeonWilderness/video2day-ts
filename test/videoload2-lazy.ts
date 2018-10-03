'use strict';

import { IEmbedCode, embedCodes } from './provider-embed-codes';
declare var video2day: any;

// target container for iframes
let div = document.getElementById('testDIV');

// generate html5video DIVs from embedCodes
let html = '';
embedCodes.forEach(embed => {
    html += `<p>${embed.id}</p><div id="${embed.expect.vid}" class="${embed.expect.param}"></div>`;
});
div.innerHTML = html;

// run videoload
video2day.run({
    debug: true,
    lazyLoad: true
});