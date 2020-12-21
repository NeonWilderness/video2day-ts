'use strict';

import * as ClassListPolyfillSpecs from './classlistpolyfill-spec';
import * as ProviderSpecs from './provider-spec';

import { IEmbedCode, embedCodes } from './provider-embed-codes';
declare const video2day: any;


describe('All classlist polyfill test cases', () => {

  ClassListPolyfillSpecs.testCases();

});

describe('All provider embed test cases', () => {

  ProviderSpecs.testCases();

});

// get buttons container
const btns = document.getElementById('iframeBtns');
let html = '';
// generate all iframe caller buttons with href as index on embedCodes array
for (let i = 0; i < embedCodes.length; i++) {
  html += `<a class="btn" href="${i}">${embedCodes[i].id}</a>`;
}
btns.innerHTML = html;

// target container for iframe
const div = document.getElementById('testDIV');
// add click listener to all caller buttons
const classes = document.getElementsByClassName('btn');
Array.from(classes).forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    // re-parse index
    const i = parseInt(this.attributes['href'].nodeValue);
    // generate appropriate videoload command
    const embed: IEmbedCode = embedCodes[i];
    div.innerHTML = `<div class="${embed.expect.param}" id="${embed.expect.vid}"></div>`
    // run videoload
    video2day.run({
      debug: true
    });
  });
});