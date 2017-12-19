import { IEmbedCode, embedCodes } from './provider-embed-codes';
import { assert } from 'chai';
declare var video2day: any;

export function testCases() {

  describe('Provider Embed Codes', () => {

    describe('#verify iframe src generation of all provider embeds', () => {
    
      let div = document.getElementById('testDIV');
      let generatedSrc = '';
      let expectedSrc = '';
      for (let embed of embedCodes) {
        it(`should generate ${embed.id}`, () => {
            div.innerHTML = `<div class="${embed.expect.param}" id="${embed.expect.vid}"></div>`;
            video2day.run({debug: true});
            generatedSrc = (<any>div.firstChild.firstChild).src;
            expectedSrc = embed.code.match(/src\s*=\s*"([^"]+)"/)[1];
            assert(generatedSrc === expectedSrc, `\n expected: ${expectedSrc}\ngenerated: ${generatedSrc}`);
        });
      }

    });

  });
}