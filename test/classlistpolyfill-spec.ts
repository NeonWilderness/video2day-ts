'use strict';

import * as ClassListPolyfill from '../src/classlistpolyfill';
import { assert } from 'chai';

export function testCases(): void {

  describe('ClassListPolyfill', () => {

    describe('#constructor', () => {

      it('should manage a string as constructor input', () => {
        const classlist = new ClassListPolyfill.ClassListPolyfill('one two three');
        assert.equal(classlist.classList.length, 3);
      });

      it('should manage a classList-property as constructor input', () => {
        const div = document.getElementById('testDIV');
        div.innerHTML = '<div class="html5video bandcamp layout-standard artwork-small tracklist bgcol-333333 linkcol-0f91ff"></div>';
        const cl = (<any>div.firstChild).classList;
        assert.equal(cl.length, 7);
        const classlist = new ClassListPolyfill.ClassListPolyfill(cl);
        assert.equal(classlist.classList.length, cl.length);
      });

      it('should trim string classes as constructor input', () => {
        const classlist = new ClassListPolyfill.ClassListPolyfill('  six seven eight nine         ');
        assert.equal(classlist.classList.length, 4);
      });

      it('should lowercase string classes as constructor input', () => {
        const classlist = new ClassListPolyfill.ClassListPolyfill('  TEn ElEvEn');
        assert.equal(classlist.classList.length, 2);
        assert.ok(classlist.contains('ten'));
        assert.ok(classlist.contains('eleven'));
      });

    });

    describe('#property function "contains"', () => {

      it('should confirm an available class', () => {
        const classlist = new ClassListPolyfill.ClassListPolyfill('html5video bandcamp width-444');
        assert.isTrue(classlist.contains('html5video'));
        assert.isTrue(classlist.contains('bandcamp'));
        assert.isTrue(classlist.contains('width-444'));
      });

      it('should not confirm a non-existent class', () => {
        const classlist = new ClassListPolyfill.ClassListPolyfill('html5video bandcamp width-444');
        assert.isFalse(classlist.contains('nonexistentclass'));
      });

    });

  });
}