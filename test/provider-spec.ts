import { embedCodes } from './provider-embed-codes';
import { assert } from 'chai';
declare const video2day: any;

export function testCases(): void {
  describe('Provider Embed Codes', () => {
    describe('#verify iframe src generation of all provider embeds', () => {
      const div = document.getElementById('testDIV');
      let generatedSrc = '';
      let expectedSrc = '';
      for (const embed of embedCodes) {
        it(`should generate ${embed.id}`, () => {
          div.innerHTML = `<div class="${embed.expect.param}" id="${embed.expect.vid}"></div>`;
          video2day.run({ debug: true });
          if (embed.id.startsWith('Tenor')) {
            // async promise; must wait 500ms to complete
            setTimeout(() => {
              generatedSrc = (<HTMLImageElement>div.firstChild.firstChild).src;
              assert(generatedSrc.startsWith('https://media.tenor.com/'));
            }, 500);
          } else {
            // synchronous
            generatedSrc = (<any>div.firstChild.firstChild).src;
            expectedSrc = embed.code.match(/src\s*=\s*"([^"]+)"/)[1];
            assert(generatedSrc === expectedSrc, `\n expected: ${expectedSrc}\ngenerated: ${generatedSrc}`);
          }
        });
      }
    });
  });
}
