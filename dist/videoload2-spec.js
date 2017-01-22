!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(27);describe("All test cases",function(){r.testCases()})},,,,,,,,,,,,,,,,,,,,,,,function(t,e){"use strict";var n=function(){function t(t){this.classList=[],"string"==typeof t?(String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),this.splitClasses(t)):this.copyClasses(t)}return t.prototype.splitClasses=function(t){this.classList=t.trim().toLowerCase().split(/\s+/)},t.prototype.copyClasses=function(t){for(var e=0;e<t.length;e++)this.classList.push(t.item(e))},t.prototype.contains=function(t){return this.classList.indexOf(t)>=0},t}();e.ClassListPolyfill=n},,,,function(t,e,n){"use strict";function r(){describe("ClassListPolyfill",function(){describe("#constructor",function(){it("should manage a string as constructor input",function(){var t=new o.ClassListPolyfill("one two three");i.assert.equal(t.classList.length,3)}),it("should manage a classList-property as constructor input",function(){var t=document.getElementById("1020001840"),e=t.classList;i.assert.equal(e.length,7);var n=new o.ClassListPolyfill(e);i.assert.equal(n.classList.length,e.length)}),it("should trim string classes as constructor input",function(){var t=new o.ClassListPolyfill("  six seven eight nine         ");i.assert.equal(t.classList.length,4)}),it("should lowercase string classes as constructor input",function(){var t=new o.ClassListPolyfill("  TEn ElEvEn");i.assert.equal(t.classList.length,2),i.assert.ok(t.contains("ten")),i.assert.ok(t.contains("eleven"))})}),describe('#property function "contains"',function(){it("should confirm an available class",function(){var t=new o.ClassListPolyfill("html5video bandcamp width-444");i.assert.isTrue(t.contains("html5video")),i.assert.isTrue(t.contains("bandcamp")),i.assert.isTrue(t.contains("width-444"))}),it("should not confirm a non-existent class",function(){var t=new o.ClassListPolyfill("html5video bandcamp width-444");i.assert.isFalse(t.contains("nonexistentclass"))})})})}var o=n(23),i=n(28);e.testCases=r},function(t,e,n){t.exports=n(29)},function(t,e,n){/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var r=[],e=t.exports={};/*!
	 * Chai version
	 */
e.version="3.5.0",/*!
	 * Assertion Error
	 */
e.AssertionError=n(30);/*!
	 * Utils for plugins (not exported)
	 */
var o=n(31);e.use=function(t){return~r.indexOf(t)||(t(this,o),r.push(t)),this},/*!
	 * Utility Functions
	 */
e.util=o;/*!
	 * Configuration
	 */
var i=n(44);e.config=i;/*!
	 * Primary `Assertion` prototype
	 */
var s=n(63);e.use(s);/*!
	 * Core Assertions
	 */
var a=n(64);e.use(a);/*!
	 * Expect interface
	 */
var c=n(65);e.use(c);/*!
	 * Should interface
	 */
var u=n(66);e.use(u);/*!
	 * Assert interface
	 */
var h=n(67);e.use(h)},function(t,e){/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */
/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */
function n(){function t(t,n){Object.keys(n).forEach(function(r){~e.indexOf(r)||(t[r]=n[r])})}var e=[].slice.call(arguments);return function(){for(var e=[].slice.call(arguments),n=0,r={};n<e.length;n++)t(r,e[n]);return r}}function r(t,e,r){var o=n("name","message","stack","constructor","toJSON"),i=o(e||{});this.message=t||"Unspecified AssertionError",this.showDiff=!1;for(var s in i)this[s]=i[s];if(r=r||arguments.callee,r&&Error.captureStackTrace)Error.captureStackTrace(this,r);else try{throw new Error}catch(t){this.stack=t.stack}}/*!
	 * Primary Exports
	 */
t.exports=r,/*!
	 * Inherit from Error.prototype
	 */
r.prototype=Object.create(Error.prototype),/*!
	 * Statically set name
	 */
r.prototype.name="AssertionError",/*!
	 * Ensure correct constructor
	 */
r.prototype.constructor=r,r.prototype.toJSON=function(t){var e=n("constructor","toJSON","stack"),r=e({name:this.name},this);return!1!==t&&this.stack&&(r.stack=this.stack),r}},function(t,e,n){/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Main exports
	 */
var e=t.exports={};/*!
	 * test utility
	 */
e.test=n(32),/*!
	 * type utility
	 */
e.type=n(34),/*!
	 * expectTypes utility
	 */
e.expectTypes=n(36),/*!
	 * message utility
	 */
e.getMessage=n(37),/*!
	 * actual utility
	 */
e.getActual=n(38),/*!
	 * Inspect util
	 */
e.inspect=n(39),/*!
	 * Object Display util
	 */
e.objDisplay=n(43),/*!
	 * Flag utility
	 */
e.flag=n(33),/*!
	 * Flag transferring utility
	 */
e.transferFlags=n(45),/*!
	 * Deep equal utility
	 */
e.eql=n(46),/*!
	 * Deep path value
	 */
e.getPathValue=n(54),/*!
	 * Deep path info
	 */
e.getPathInfo=n(55),/*!
	 * Check if a property exists
	 */
e.hasProperty=n(56),/*!
	 * Function name
	 */
e.getName=n(40),/*!
	 * add Property
	 */
e.addProperty=n(57),/*!
	 * add Method
	 */
e.addMethod=n(58),/*!
	 * overwrite Property
	 */
e.overwriteProperty=n(59),/*!
	 * overwrite Method
	 */
e.overwriteMethod=n(60),/*!
	 * Add a chainable method
	 */
e.addChainableMethod=n(61),/*!
	 * Overwrite chainable method
	 */
e.overwriteChainableMethod=n(62)},function(t,e,n){/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependancies
	 */
var r=n(33);t.exports=function(t,e){var n=r(t,"negate"),o=e[0];return n?!o:o}},function(t,e){/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n){var r=t.__flags||(t.__flags=Object.create(null));return 3!==arguments.length?r[e]:void(r[e]=n)}},function(t,e,n){t.exports=n(35)},function(t,e){function n(t){var e=Object.prototype.toString.call(t).match(o)[1].toLowerCase();return"function"==typeof Promise&&t instanceof Promise?"promise":null===t?"null":void 0===t?"undefined":e}function r(){return this instanceof r?void(this.tests={}):new r}/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Primary Exports
	 */
var e=t.exports=n,o=/^\[object (.*)\]$/;e.Library=r,r.prototype.of=n,r.prototype.define=function(t,e){return 1===arguments.length?this.tests[t]:(this.tests[t]=e,this)},r.prototype.test=function(t,e){if(e===n(t))return!0;var r=this.tests[e];if(r&&"regexp"===n(r))return r.test(t);if(r&&"function"===n(r))return r(t);throw new ReferenceError('Type test "'+e+'" not defined or invalid.')}},function(t,e,n){/*!
	 * Chai - expectTypes utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var r=n(30),o=n(33),i=n(34);t.exports=function(t,e){var t=o(t,"object");e=e.map(function(t){return t.toLowerCase()}),e.sort();var n=e.map(function(t,n){var r=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an":"a",o=e.length>1&&n===e.length-1?"or ":"";return o+r+" "+t}).join(", ");if(!e.some(function(e){return i(t)===e}))throw new r("object tested must be "+n+", but "+i(t)+" given")}},function(t,e,n){/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependancies
	 */
var r=n(33),o=n(38),i=(n(39),n(43));t.exports=function(t,e){var n=r(t,"negate"),s=r(t,"object"),a=e[3],c=o(t,e),u=n?e[2]:e[1],h=r(t,"message");return"function"==typeof u&&(u=u()),u=u||"",u=u.replace(/#\{this\}/g,function(){return i(s)}).replace(/#\{act\}/g,function(){return i(c)}).replace(/#\{exp\}/g,function(){return i(a)}),h?h+": "+u:u}},function(t,e){/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e){return e.length>4?e[4]:t._obj}},function(t,e,n){function r(t,e,n,r){var i={showHidden:e,seen:[],stylize:function(t){return t}};return o(i,t,"undefined"==typeof n?2:n)}function o(t,n,r){if(n&&"function"==typeof n.inspect&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var d=n.inspect(r);return"string"!=typeof d&&(d=o(t,d,r)),d}var v=i(t,n);if(v)return v;if(w(n)){if("outerHTML"in n)return n.outerHTML;try{if(document.xmlVersion){var x=new XMLSerializer;return x.serializeToString(n)}var m="http://www.w3.org/1999/xhtml",E=document.createElementNS(m,"_");return E.appendChild(n.cloneNode(!1)),html=E.innerHTML.replace("><",">"+n.innerHTML+"<"),E.innerHTML="",html}catch(t){}}var j=b(n),A=t.showHidden?y(n):j;if(0===A.length||l(n)&&(1===A.length&&"stack"===A[0]||2===A.length&&"description"===A[0]&&"stack"===A[1])){if("function"==typeof n){var _=g(n),P=_?": "+_:"";return t.stylize("[Function"+P+"]","special")}if(f(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(p(n))return t.stylize(Date.prototype.toUTCString.call(n),"date");if(l(n))return s(n)}var O="",S=!1,T=["{","}"];if(h(n)&&(S=!0,T=["[","]"]),"function"==typeof n){var _=g(n),P=_?": "+_:"";O=" [Function"+P+"]"}if(f(n)&&(O=" "+RegExp.prototype.toString.call(n)),p(n)&&(O=" "+Date.prototype.toUTCString.call(n)),l(n))return s(n);if(0===A.length&&(!S||0==n.length))return T[0]+O+T[1];if(r<0)return f(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");t.seen.push(n);var M;return M=S?a(t,n,r,j,A):A.map(function(e){return c(t,n,r,j,e,S)}),t.seen.pop(),u(M,O,T)}function i(t,e){switch(typeof e){case"undefined":return t.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string");case"number":return 0===e&&1/e===-(1/0)?t.stylize("-0","number"):t.stylize(""+e,"number");case"boolean":return t.stylize(""+e,"boolean")}if(null===e)return t.stylize("null","null")}function s(t){return"["+Error.prototype.toString.call(t)+"]"}function a(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)Object.prototype.hasOwnProperty.call(e,String(s))?i.push(c(t,e,n,r,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(c(t,e,n,r,o,!0))}),i}function c(t,e,n,r,i,s){var a,c;if(e.__lookupGetter__&&(e.__lookupGetter__(i)?c=e.__lookupSetter__(i)?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):e.__lookupSetter__(i)&&(c=t.stylize("[Setter]","special"))),r.indexOf(i)<0&&(a="["+i+"]"),c||(t.seen.indexOf(e[i])<0?(c=null===n?o(t,e[i],null):o(t,e[i],n-1),c.indexOf("\n")>-1&&(c=s?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n"))):c=t.stylize("[Circular]","special")),"undefined"==typeof a){if(s&&i.match(/^\d+$/))return c;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+c}function u(t,e,n){var r=0,o=t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.length+1},0);return o>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function h(t){return Array.isArray(t)||"object"==typeof t&&"[object Array]"===d(t)}function f(t){return"object"==typeof t&&"[object RegExp]"===d(t)}function p(t){return"object"==typeof t&&"[object Date]"===d(t)}function l(t){return"object"==typeof t&&"[object Error]"===d(t)}function d(t){return Object.prototype.toString.call(t)}var g=n(40),y=n(41),b=n(42);t.exports=r;var w=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName}},function(t,e){/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t){if(t.name)return t.name;var e=/^\s?function ([^(]*)\(/.exec(t);return e&&e[1]?e[1]:""}},function(t,e){/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t){function e(t){n.indexOf(t)===-1&&n.push(t)}for(var n=Object.getOwnPropertyNames(t),r=Object.getPrototypeOf(t);null!==r;)Object.getOwnPropertyNames(r).forEach(e),r=Object.getPrototypeOf(r);return n}},function(t,e){/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t){var e=[];for(var n in t)e.push(n);return e}},function(t,e,n){/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependancies
	 */
var r=n(39),o=n(44);t.exports=function(t){var e=r(t),n=Object.prototype.toString.call(t);if(o.truncateThreshold&&e.length>=o.truncateThreshold){if("[object Function]"===n)return t.name&&""!==t.name?"[Function: "+t.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+t.length+") ]";if("[object Object]"===n){var i=Object.keys(t),s=i.length>2?i.splice(0,2).join(", ")+", ...":i.join(", ");return"{ Object ("+s+") }"}return e}return e}},function(t,e){t.exports={includeStack:!1,showDiff:!0,truncateThreshold:40}},function(t,e){/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n){var r=t.__flags||(t.__flags=Object.create(null));e.__flags||(e.__flags=Object.create(null)),n=3!==arguments.length||n;for(var o in r)(n||"object"!==o&&"ssfi"!==o&&"message"!=o)&&(e.__flags[o]=r[o])}},function(t,e,n){t.exports=n(47)},function(t,e,n){function r(t,e,n){return!!o(t,e)||("date"===g(t)?s(t,e):"regexp"===g(t)?a(t,e):d.isBuffer(t)?f(t,e):"arguments"===g(t)?c(t,e,n):!!i(t,e)&&("object"!==g(t)&&"object"!==g(e)&&"array"!==g(t)&&"array"!==g(e)?o(t,e):l(t,e,n)))}/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */
function o(t,e){return t===e?0!==t||1/t===1/e:t!==t&&e!==e}/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
function i(t,e){return g(t)===g(e)}/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */
function s(t,e){return"date"===g(e)&&o(t.getTime(),e.getTime())}/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */
function a(t,e){return"regexp"===g(e)&&o(t.toString(),e.toString())}/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */
function c(t,e,n){return"arguments"===g(e)&&(t=[].slice.call(t),e=[].slice.call(e),r(t,e,n))}/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */
function u(t){var e=[];for(var n in t)e.push(n);return e}/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */
function h(t,e){if(t.length!==e.length)return!1;for(var n=0,r=!0;n<t.length;n++)if(t[n]!==e[n]){r=!1;break}return r}/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
function f(t,e){return!!d.isBuffer(e)&&h(t,e)}/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */
function p(t){return null!==t&&void 0!==t}/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
function l(t,e,n){if(!p(t)||!p(e))return!1;if(t.prototype!==e.prototype)return!1;var o;if(n){for(o=0;o<n.length;o++)if(n[o][0]===t&&n[o][1]===e||n[o][0]===e&&n[o][1]===t)return!0}else n=[];try{var i=u(t),s=u(e)}catch(t){return!1}if(i.sort(),s.sort(),!h(i,s))return!1;n.push([t,e]);var a;for(o=i.length-1;o>=0;o--)if(a=i[o],!r(t[a],e[a],n))return!1;return!0}/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependencies
	 */
var d,g=n(48);try{d=n(50).Buffer}catch(t){d={},d.isBuffer=function(){return!1}}/*!
	 * Primary Export
	 */
t.exports=r},function(t,e,n){t.exports=n(49)},function(t,e){function n(t){var e=Object.prototype.toString.call(t);return o[e]?o[e]:null===t?"null":void 0===t?"undefined":t===Object(t)?"object":typeof t}function r(){this.tests={}}/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Primary Exports
	 */
var e=t.exports=n,o={"[object Array]":"array","[object RegExp]":"regexp","[object Function]":"function","[object Arguments]":"arguments","[object Date]":"date"};e.Library=r,r.prototype.of=n,r.prototype.define=function(t,e){return 1===arguments.length?this.tests[t]:(this.tests[t]=e,this)},r.prototype.test=function(t,e){if(e===n(t))return!0;var r=this.tests[e];if(r&&"regexp"===n(r))return r.test(t);if(r&&"function"===n(r))return r(t);throw new ReferenceError('Type test "'+e+'" not defined or invalid.')}},function(t,e,n){(function(t){/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
"use strict";function r(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function o(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function i(t,e){if(o()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=s.prototype):(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,n){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return a(this,t,e,n)}function a(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?l(t,e,n,r):"string"==typeof e?f(t,e,n):d(t,e)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function u(t,e,n,r){return c(e),e<=0?i(t,e):void 0!==n?"string"==typeof r?i(t,e).fill(n,r):i(t,e).fill(n):i(t,e)}function h(t,e){if(c(e),t=i(t,e<0?0:0|g(e)),!s.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function f(t,e,n){if("string"==typeof n&&""!==n||(n="utf8"),!s.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|b(e,n);t=i(t,r);var o=t.write(e,n);return o!==r&&(t=t.slice(0,o)),t}function p(t,e){var n=e.length<0?0:0|g(e.length);t=i(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function l(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),s.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=s.prototype):t=p(t,e),t}function d(t,e){if(s.isBuffer(e)){var n=0|g(e.length);return t=i(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||Z(e.length)?i(t,0):p(t,e);if("Buffer"===e.type&&W(e.data))return p(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),s.alloc(+t)}function b(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return H(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return G(t).length;default:if(r)return H(t).length;e=(""+e).toLowerCase(),r=!0}}function w(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return k(this,e,n);case"utf8":case"utf-8":return T(this,e,n);case"ascii":return R(this,e,n);case"latin1":case"binary":return B(this,e,n);case"base64":return S(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function v(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function x(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=s.from(e,r)),s.isBuffer(e))return 0===e.length?-1:m(t,e,n,r,o);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):m(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function m(t,e,n,r,o){function i(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,a=t.length,c=e.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,c/=2,n/=2}var u;if(o){var h=-1;for(u=n;u<a;u++)if(i(t,u)===i(e,h===-1?0:u-h)){if(h===-1&&(h=u),u-h+1===c)return h*s}else h!==-1&&(u-=u-h),h=-1}else for(n+c>a&&(n=a-c),u=n;u>=0;u--){for(var f=!0,p=0;p<c;p++)if(i(t,u+p)!==i(e,p)){f=!1;break}if(f)return u}return-1}function E(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r),r>o&&(r=o)):r=o;var i=e.length;if(i%2!==0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function j(t,e,n,r){return X(H(e,t.length-n),t,n,r)}function A(t,e,n,r){return X(V(e),t,n,r)}function _(t,e,n,r){return A(t,e,n,r)}function P(t,e,n,r){return X(G(e),t,n,r)}function O(t,e,n,r){return X(J(e,t.length-n),t,n,r)}function S(t,e,n){return 0===e&&n===t.length?K.fromByteArray(t):K.fromByteArray(t.slice(e,n))}function T(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i=t[o],s=null,a=i>239?4:i>223?3:i>191?2:1;if(o+a<=n){var c,u,h,f;switch(a){case 1:i<128&&(s=i);break;case 2:c=t[o+1],128===(192&c)&&(f=(31&i)<<6|63&c,f>127&&(s=f));break;case 3:c=t[o+1],u=t[o+2],128===(192&c)&&128===(192&u)&&(f=(15&i)<<12|(63&c)<<6|63&u,f>2047&&(f<55296||f>57343)&&(s=f));break;case 4:c=t[o+1],u=t[o+2],h=t[o+3],128===(192&c)&&128===(192&u)&&128===(192&h)&&(f=(15&i)<<18|(63&c)<<12|(63&u)<<6|63&h,f>65535&&f<1114112&&(s=f))}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),o+=a}return M(r)}function M(t){var e=t.length;if(e<=tt)return String.fromCharCode.apply(String,t);for(var n="",r=0;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=tt));return n}function R(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function B(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function k(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=$(t[i]);return o}function C(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function N(t,e,n){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function L(t,e,n,r,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function U(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function D(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function I(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function q(t,e,n,r,o){return o||I(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(t,e,n,r,23,4),n+4}function Y(t,e,n,r,o){return o||I(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(t,e,n,r,52,8),n+8}function z(t){if(t=F(t).replace(et,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function F(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function $(t){return t<16?"0"+t.toString(16):t.toString(16)}function H(t,e){e=e||1/0;for(var n,r=t.length,o=null,i=[],s=0;s<r;++s){if(n=t.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=(o-55296<<10|n-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function V(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function J(t,e){for(var n,r,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function G(t){return K.toByteArray(z(t))}function X(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}function Z(t){return t!==t}var K=n(51),Q=n(52),W=n(53);e.Buffer=s,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:r(),e.kMaxLength=o(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,n){return a(null,t,e,n)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,n){return u(null,t,e,n)},s.allocUnsafe=function(t){return h(null,t)},s.allocUnsafeSlow=function(t){return h(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!W(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=s.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var i=t[n];if(!s.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(r,o),o+=i.length}return r},s.byteLength=b,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)v(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)v(this,e,e+3),v(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)v(this,e,e+7),v(this,e+1,e+6),v(this,e+2,e+5),v(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):w.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,n,r,o){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,o>>>=0,this===t)return 0;for(var i=o-r,a=n-e,c=Math.min(i,a),u=this.slice(r,o),h=t.slice(e,n),f=0;f<c;++f)if(u[f]!==h[f]){i=u[f],a=h[f];break}return i<a?-1:a<i?1:0},s.prototype.includes=function(t,e,n){return this.indexOf(t,e,n)!==-1},s.prototype.indexOf=function(t,e,n){return x(this,t,e,n,!0)},s.prototype.lastIndexOf=function(t,e,n){return x(this,t,e,n,!1)},s.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return E(this,t,e,n);case"utf8":case"utf-8":return j(this,t,e,n);case"ascii":return A(this,t,e,n);case"latin1":case"binary":return _(this,t,e,n);case"base64":return P(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var tt=4096;s.prototype.slice=function(t,e){var n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),e<t&&(e=t);var r;if(s.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=s.prototype;else{var o=e-t;r=new s(o,void 0);for(var i=0;i<o;++i)r[i]=this[i+t]}return r},s.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r},s.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},s.prototype.readUInt8=function(t,e){return e||N(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||N(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||N(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||N(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||N(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*e)),r},s.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||N(t,e,this.length);for(var r=e,o=1,i=this[t+--r];r>0&&(o*=256);)i+=this[t+--r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},s.prototype.readInt8=function(t,e){return e||N(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},s.prototype.readInt16LE=function(t,e){e||N(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt16BE=function(t,e){e||N(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt32LE=function(t,e){return e||N(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||N(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||N(t,4,this.length),Q.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||N(t,4,this.length),Q.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||N(t,8,this.length),Q.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||N(t,8,this.length),Q.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var o=Math.pow(2,8*n)-1;L(this,t,e,n,o,0)}var i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},s.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){var o=Math.pow(2,8*n)-1;L(this,t,e,n,o,0)}var i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},s.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):U(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):U(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):D(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);L(this,t,e,n,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},s.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);L(this,t,e,n,o-1,-o)}var i=n-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):U(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):U(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):D(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||L(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,n){return q(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return q(this,t,e,!1,n)},s.prototype.writeDoubleLE=function(t,e,n){return Y(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return Y(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,i=r-n;if(this===t&&n<e&&e<r)for(o=i-1;o>=0;--o)t[o+e]=this[o+n];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+i),e);return i},s.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0);var i;if("number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{var a=s.isBuffer(t)?t:H(new s(t,r).toString()),c=a.length;for(i=0;i<n-e;++i)this[i+e]=a[i%c]}return this};var et=/[^+\/0-9A-Za-z-_]/g}).call(e,function(){return this}())},function(t,e){"use strict";function n(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function r(t){return 3*t.length/4-n(t)}function o(t){var e,r,o,i,s,a,c=t.length;s=n(t),a=new h(3*c/4-s),o=s>0?c-4:c;var f=0;for(e=0,r=0;e<o;e+=4,r+=3)i=u[t.charCodeAt(e)]<<18|u[t.charCodeAt(e+1)]<<12|u[t.charCodeAt(e+2)]<<6|u[t.charCodeAt(e+3)],a[f++]=i>>16&255,a[f++]=i>>8&255,a[f++]=255&i;return 2===s?(i=u[t.charCodeAt(e)]<<2|u[t.charCodeAt(e+1)]>>4,a[f++]=255&i):1===s&&(i=u[t.charCodeAt(e)]<<10|u[t.charCodeAt(e+1)]<<4|u[t.charCodeAt(e+2)]>>2,a[f++]=i>>8&255,a[f++]=255&i),a}function i(t){return c[t>>18&63]+c[t>>12&63]+c[t>>6&63]+c[63&t]}function s(t,e,n){for(var r,o=[],s=e;s<n;s+=3)r=(t[s]<<16)+(t[s+1]<<8)+t[s+2],o.push(i(r));return o.join("")}function a(t){for(var e,n=t.length,r=n%3,o="",i=[],a=16383,u=0,h=n-r;u<h;u+=a)i.push(s(t,u,u+a>h?h:u+a));return 1===r?(e=t[n-1],o+=c[e>>2],o+=c[e<<4&63],o+="=="):2===r&&(e=(t[n-2]<<8)+t[n-1],o+=c[e>>10],o+=c[e>>4&63],o+=c[e<<2&63],o+="="),i.push(o),i.join("")}e.byteLength=r,e.toByteArray=o,e.fromByteArray=a;for(var c=[],u=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,l=f.length;p<l;++p)c[p]=f[p],u[f.charCodeAt(p)]=p;u["-".charCodeAt(0)]=62,u["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,o){var i,s,a=8*o-r-1,c=(1<<a)-1,u=c>>1,h=-7,f=n?o-1:0,p=n?-1:1,l=t[e+f];for(f+=p,i=l&(1<<-h)-1,l>>=-h,h+=a;h>0;i=256*i+t[e+f],f+=p,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=r;h>0;s=256*s+t[e+f],f+=p,h-=8);if(0===i)i=1-u;else{if(i===c)return s?NaN:(l?-1:1)*(1/0);s+=Math.pow(2,r),i-=u}return(l?-1:1)*s*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var s,a,c,u=8*i-o-1,h=(1<<u)-1,f=h>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=r?0:i-1,d=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),e+=s+f>=1?p/c:p*Math.pow(2,1-f),e*c>=2&&(s++,c/=2),s+f>=h?(a=0,s=h):s+f>=1?(a=(e*c-1)*Math.pow(2,o),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;t[n+l]=255&a,l+=d,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;t[n+l]=255&s,l+=d,s/=256,u-=8);t[n+l-d]|=128*g}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e,n){/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */
var r=n(55);t.exports=function(t,e){var n=r(t,e);return n.value}},function(t,e,n){/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */
function r(t){var e=t.replace(/([^\\])\[/g,"$1.["),n=e.match(/(\\\.|[^.]+?)+/g);return n.map(function(t){var e=/^\[(\d+)\]$/,n=e.exec(t);return n?{i:parseFloat(n[1])}:{p:t.replace(/\\([.\[\]])/g,"$1")}})}/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @param {Number} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */
function o(t,e,n){var r,o=e;n=void 0===n?t.length:n;for(var i=0,s=n;i<s;i++){var a=t[i];o?("undefined"!=typeof a.p?o=o[a.p]:"undefined"!=typeof a.i&&(o=o[a.i]),i==s-1&&(r=o)):r=void 0}return r}/*!
	 * Chai - getPathInfo utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var i=n(56);t.exports=function(t,e){var n=r(t),s=n[n.length-1],a={parent:n.length>1?o(n,e,n.length-1):e,name:s.p||s.i,value:o(n,e)};return a.exists=i(a.name,a.parent),a}},function(t,e,n){/*!
	 * Chai - hasProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var r=n(34),o={number:Number,string:String};t.exports=function(t,e){var n=r(e);return"null"!==n&&"undefined"!==n&&(o[n]&&"object"!=typeof e&&(e=new o[n](e)),t in e)}},function(t,e,n){/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var r=n(44),o=n(33);t.exports=function(t,e,n){Object.defineProperty(t,e,{get:function t(){var e=o(this,"ssfi");e&&r.includeStack===!1&&o(this,"ssfi",t);var i=n.call(this);return void 0===i?this:i},configurable:!0})}},function(t,e,n){/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var r=n(44),o=n(33);t.exports=function(t,e,n){t[e]=function(){var i=o(this,"ssfi");i&&r.includeStack===!1&&o(this,"ssfi",t[e]);var s=n.apply(this,arguments);return void 0===s?this:s}}},function(t,e){/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n){var r=Object.getOwnPropertyDescriptor(t,e),o=function(){};r&&"function"==typeof r.get&&(o=r.get),Object.defineProperty(t,e,{get:function(){var t=n(o).call(this);return void 0===t?this:t},configurable:!0})}},function(t,e){/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n){var r=t[e],o=function(){return this};r&&"function"==typeof r&&(o=r),t[e]=function(){var t=n(o).apply(this,arguments);return void 0===t?this:t}}},function(t,e,n){/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
/*!
	 * Module dependencies
	 */
var r=n(45),o=n(33),i=n(44),s="__proto__"in Object,a=/^(?:length|name|arguments|caller)$/,c=Function.prototype.call,u=Function.prototype.apply;t.exports=function(t,e,n,h){"function"!=typeof h&&(h=function(){});var f={method:n,chainingBehavior:h};t.__methods||(t.__methods={}),t.__methods[e]=f,Object.defineProperty(t,e,{get:function(){f.chainingBehavior.call(this);var e=function t(){var e=o(this,"ssfi");e&&i.includeStack===!1&&o(this,"ssfi",t);var n=f.method.apply(this,arguments);return void 0===n?this:n};if(s){var n=e.__proto__=Object.create(this);n.call=c,n.apply=u}else{var h=Object.getOwnPropertyNames(t);h.forEach(function(n){if(!a.test(n)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r)}})}return r(this,e),e},configurable:!0})}},function(t,e){/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e,n,r){var o=t.__methods[e],i=o.chainingBehavior;o.chainingBehavior=function(){var t=r(i).call(this);return void 0===t?this:t};var s=o.method;o.method=function(){var t=n(s).apply(this,arguments);return void 0===t?this:t}}},function(t,e,n){/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
var r=n(44);t.exports=function(t,e){/*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */
function n(t,e,n){i(this,"ssfi",n||arguments.callee),i(this,"object",t),i(this,"message",e)}/*!
	   * Module dependencies.
	   */
var o=t.AssertionError,i=e.flag;/*!
	   * Module export.
	   */
t.Assertion=n,Object.defineProperty(n,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack},set:function(t){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack=t}}),Object.defineProperty(n,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff},set:function(t){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff=t}}),n.addProperty=function(t,n){e.addProperty(this.prototype,t,n)},n.addMethod=function(t,n){e.addMethod(this.prototype,t,n)},n.addChainableMethod=function(t,n,r){e.addChainableMethod(this.prototype,t,n,r)},n.overwriteProperty=function(t,n){e.overwriteProperty(this.prototype,t,n)},n.overwriteMethod=function(t,n){e.overwriteMethod(this.prototype,t,n)},n.overwriteChainableMethod=function(t,n,r){e.overwriteChainableMethod(this.prototype,t,n,r)},n.prototype.assert=function(t,n,s,a,c,u){var h=e.test(this,arguments);if(!0!==u&&(u=!1),!0!==r.showDiff&&(u=!1),!h){var n=e.getMessage(this,arguments),f=e.getActual(this,arguments);throw new o(n,{actual:f,expected:a,showDiff:u},r.includeStack?this.assert:i(this,"ssfi"))}},/*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */
Object.defineProperty(n.prototype,"_obj",{get:function(){return i(this,"object")},set:function(t){i(this,"object",t)}})}},function(t,e){/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e){function n(t,n){n&&T(this,"message",n),t=t.toLowerCase();var r=T(this,"object"),o=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an ":"a ";this.assert(t===e.type(r),"expected #{this} to be "+o+t,"expected #{this} not to be "+o+t)}function r(){T(this,"contains",!0)}function o(t,n){e.expectTypes(this,["array","object","string"]),n&&T(this,"message",n);var r=T(this,"object"),o=!1;if("array"===e.type(r)&&"object"===e.type(t)){for(var i in r)if(e.eql(r[i],t)){o=!0;break}}else if("object"===e.type(t)){if(!T(this,"negate")){for(var s in t)new S(r).property(s,t[s]);return}var a={};for(var s in t)a[s]=r[s];o=e.eql(a,t)}else o=void 0!=r&&~r.indexOf(t);this.assert(o,"expected #{this} to include "+e.inspect(t),"expected #{this} to not include "+e.inspect(t))}function i(){var t=T(this,"object"),e=Object.prototype.toString.call(t);this.assert("[object Arguments]"===e,"expected #{this} to be arguments but got "+e,"expected #{this} to not be arguments")}function s(t,e){e&&T(this,"message",e);var n=T(this,"object");return T(this,"deep")?this.eql(t):void this.assert(t===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",t,this._obj,!0)}function a(t,n){n&&T(this,"message",n),this.assert(e.eql(t,T(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",t,this._obj,!0)}function c(t,e){e&&T(this,"message",e);var n=T(this,"object");if(T(this,"doLength")){new S(n,e).to.have.property("length");var r=n.length;this.assert(r>t,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",t,r)}else this.assert(n>t,"expected #{this} to be above "+t,"expected #{this} to be at most "+t)}function u(t,e){e&&T(this,"message",e);var n=T(this,"object");if(T(this,"doLength")){new S(n,e).to.have.property("length");var r=n.length;this.assert(r>=t,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",t,r)}else this.assert(n>=t,"expected #{this} to be at least "+t,"expected #{this} to be below "+t)}function h(t,e){e&&T(this,"message",e);var n=T(this,"object");if(T(this,"doLength")){new S(n,e).to.have.property("length");var r=n.length;this.assert(r<t,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",t,r)}else this.assert(n<t,"expected #{this} to be below "+t,"expected #{this} to be at least "+t)}function f(t,e){e&&T(this,"message",e);var n=T(this,"object");if(T(this,"doLength")){new S(n,e).to.have.property("length");var r=n.length;this.assert(r<=t,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",t,r)}else this.assert(n<=t,"expected #{this} to be at most "+t,"expected #{this} to be above "+t)}function p(t,n){n&&T(this,"message",n);var r=e.getName(t);this.assert(T(this,"object")instanceof t,"expected #{this} to be an instance of "+r,"expected #{this} to not be an instance of "+r)}function l(t,n){n&&T(this,"message",n);var r=T(this,"object");this.assert(r.hasOwnProperty(t),"expected #{this} to have own property "+e.inspect(t),"expected #{this} to not have own property "+e.inspect(t))}function d(t,n,r){"string"==typeof n&&(r=n,n=null),r&&T(this,"message",r);var o=T(this,"object"),i=Object.getOwnPropertyDescriptor(Object(o),t);i&&n?this.assert(e.eql(n,i),"expected the own property descriptor for "+e.inspect(t)+" on #{this} to match "+e.inspect(n)+", got "+e.inspect(i),"expected the own property descriptor for "+e.inspect(t)+" on #{this} to not match "+e.inspect(n),n,i,!0):this.assert(i,"expected #{this} to have an own property descriptor for "+e.inspect(t),"expected #{this} to not have an own property descriptor for "+e.inspect(t)),T(this,"object",i)}function g(){T(this,"doLength",!0)}function y(t,e){e&&T(this,"message",e);var n=T(this,"object");new S(n,e).to.have.property("length");var r=n.length;this.assert(r==t,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",t,r)}function b(t,e){e&&T(this,"message",e);var n=T(this,"object");this.assert(t.exec(n),"expected #{this} to match "+t,"expected #{this} not to match "+t)}function w(t){var n,r=T(this,"object"),o=!0,i="keys must be given single argument of Array|Object|String, or multiple String arguments";switch(e.type(t)){case"array":if(arguments.length>1)throw new Error(i);break;case"object":if(arguments.length>1)throw new Error(i);t=Object.keys(t);break;default:t=Array.prototype.slice.call(arguments)}if(!t.length)throw new Error("keys required");var s=Object.keys(r),a=t,c=t.length,u=T(this,"any"),h=T(this,"all");if(u||h||(h=!0),u){var f=a.filter(function(t){return~s.indexOf(t)});o=f.length>0}if(h&&(o=t.every(function(t){return~s.indexOf(t)}),T(this,"negate")||T(this,"contains")||(o=o&&t.length==s.length)),c>1){t=t.map(function(t){return e.inspect(t)});var p=t.pop();h&&(n=t.join(", ")+", and "+p),u&&(n=t.join(", ")+", or "+p)}else n=e.inspect(t[0]);n=(c>1?"keys ":"key ")+n,n=(T(this,"contains")?"contain ":"have ")+n,this.assert(o,"expected #{this} to "+n,"expected #{this} to not "+n,a.slice(0).sort(),s.sort(),!0)}function v(t,n,r){r&&T(this,"message",r);var o=T(this,"object");new S(o,r).is.a("function");var i=!1,s=null,a=null,c=null;0===arguments.length?(n=null,t=null):t&&(t instanceof RegExp||"string"==typeof t)?(n=t,t=null):t&&t instanceof Error?(s=t,t=null,n=null):"function"==typeof t?(a=t.prototype.name,(!a||"Error"===a&&t!==Error)&&(a=t.name||(new t).name)):t=null;try{o()}catch(r){if(s)return this.assert(r===s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}",s instanceof Error?s.toString():s,r instanceof Error?r.toString():r),T(this,"object",r),this;if(t&&(this.assert(r instanceof t,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp} but #{act} was thrown",a,r instanceof Error?r.toString():r),!n))return T(this,"object",r),this;var u="error"===e.type(r)&&"message"in r?r.message:""+r;if(null!=u&&n&&n instanceof RegExp)return this.assert(n.exec(u),"expected #{this} to throw error matching #{exp} but got #{act}","expected #{this} to throw error not matching #{exp}",n,u),T(this,"object",r),this;if(null!=u&&n&&"string"==typeof n)return this.assert(~u.indexOf(n),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",n,u),T(this,"object",r),this;i=!0,c=r}var h="",f=null!==a?a:s?"#{exp}":"an error";i&&(h=" but #{act} was thrown"),this.assert(i===!0,"expected #{this} to throw "+f+h,"expected #{this} to not throw "+f+h,s instanceof Error?s.toString():s,c instanceof Error?c.toString():c),T(this,"object",c)}function x(t,n){n&&T(this,"message",n);var r=T(this,"object"),o=T(this,"itself"),i="function"!==e.type(r)||o?r[t]:r.prototype[t];this.assert("function"==typeof i,"expected #{this} to respond to "+e.inspect(t),"expected #{this} to not respond to "+e.inspect(t))}function m(t,n){n&&T(this,"message",n);var r=T(this,"object"),o=t(r);this.assert(o,"expected #{this} to satisfy "+e.objDisplay(t),"expected #{this} to not satisfy"+e.objDisplay(t),!this.negate,o)}function E(t,n,r){r&&T(this,"message",r);var o=T(this,"object");if(new S(o,r).is.a("number"),"number"!==e.type(t)||"number"!==e.type(n))throw new Error("the arguments to closeTo or approximately must be numbers");this.assert(Math.abs(o-t)<=n,"expected #{this} to be close to "+t+" +/- "+n,"expected #{this} not to be close to "+t+" +/- "+n)}function j(t,e,n){return t.every(function(t){return n?e.some(function(e){return n(t,e)}):e.indexOf(t)!==-1})}function A(t,e){e&&T(this,"message",e);var n=T(this,"object");new S(t).to.be.an("array"),this.assert(t.indexOf(n)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",t,n)}function _(t,e,n){n&&T(this,"message",n);var r=T(this,"object");new S(t,n).to.have.property(e),new S(r).is.a("function");var o=t[e];r(),this.assert(o!==t[e],"expected ."+e+" to change","expected ."+e+" to not change")}function P(t,e,n){n&&T(this,"message",n);var r=T(this,"object");new S(t,n).to.have.property(e),new S(r).is.a("function");var o=t[e];r(),this.assert(t[e]-o>0,"expected ."+e+" to increase","expected ."+e+" to not increase")}function O(t,e,n){n&&T(this,"message",n);var r=T(this,"object");new S(t,n).to.have.property(e),new S(r).is.a("function");var o=t[e];r(),this.assert(t[e]-o<0,"expected ."+e+" to decrease","expected ."+e+" to not decrease")}var S=t.Assertion,T=(Object.prototype.toString,e.flag);["to","be","been","is","and","has","have","with","that","which","at","of","same"].forEach(function(t){S.addProperty(t,function(){return this})}),S.addProperty("not",function(){T(this,"negate",!0)}),S.addProperty("deep",function(){T(this,"deep",!0)}),S.addProperty("any",function(){T(this,"any",!0),T(this,"all",!1)}),S.addProperty("all",function(){T(this,"all",!0),T(this,"any",!1)}),S.addChainableMethod("an",n),S.addChainableMethod("a",n),S.addChainableMethod("include",o,r),S.addChainableMethod("contain",o,r),S.addChainableMethod("contains",o,r),S.addChainableMethod("includes",o,r),S.addProperty("ok",function(){this.assert(T(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),S.addProperty("true",function(){this.assert(!0===T(this,"object"),"expected #{this} to be true","expected #{this} to be false",!this.negate)}),S.addProperty("false",function(){this.assert(!1===T(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!this.negate)}),S.addProperty("null",function(){this.assert(null===T(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),S.addProperty("undefined",function(){this.assert(void 0===T(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),S.addProperty("NaN",function(){this.assert(isNaN(T(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),S.addProperty("exist",function(){this.assert(null!=T(this,"object"),"expected #{this} to exist","expected #{this} to not exist")}),S.addProperty("empty",function(){var t=T(this,"object"),e=t;Array.isArray(t)||"string"==typeof object?e=t.length:"object"==typeof t&&(e=Object.keys(t).length),this.assert(!e,"expected #{this} to be empty","expected #{this} not to be empty")}),S.addProperty("arguments",i),S.addProperty("Arguments",i),S.addMethod("equal",s),S.addMethod("equals",s),S.addMethod("eq",s),S.addMethod("eql",a),S.addMethod("eqls",a),S.addMethod("above",c),S.addMethod("gt",c),S.addMethod("greaterThan",c),S.addMethod("least",u),S.addMethod("gte",u),S.addMethod("below",h),S.addMethod("lt",h),S.addMethod("lessThan",h),S.addMethod("most",f),S.addMethod("lte",f),S.addMethod("within",function(t,e,n){n&&T(this,"message",n);var r=T(this,"object"),o=t+".."+e;if(T(this,"doLength")){new S(r,n).to.have.property("length");var i=r.length;this.assert(i>=t&&i<=e,"expected #{this} to have a length within "+o,"expected #{this} to not have a length within "+o)}else this.assert(r>=t&&r<=e,"expected #{this} to be within "+o,"expected #{this} to not be within "+o)}),S.addMethod("instanceof",p),S.addMethod("instanceOf",p),S.addMethod("property",function(t,n,r){r&&T(this,"message",r);var o=!!T(this,"deep"),i=o?"deep property ":"property ",s=T(this,"negate"),a=T(this,"object"),c=o?e.getPathInfo(t,a):null,u=o?c.exists:e.hasProperty(t,a),h=o?c.value:a[t];if(s&&arguments.length>1){if(void 0===h)throw r=null!=r?r+": ":"",new Error(r+e.inspect(a)+" has no "+i+e.inspect(t))}else this.assert(u,"expected #{this} to have a "+i+e.inspect(t),"expected #{this} to not have "+i+e.inspect(t));arguments.length>1&&this.assert(n===h,"expected #{this} to have a "+i+e.inspect(t)+" of #{exp}, but got #{act}","expected #{this} to not have a "+i+e.inspect(t)+" of #{act}",n,h),T(this,"object",h)}),S.addMethod("ownProperty",l),S.addMethod("haveOwnProperty",l),S.addMethod("ownPropertyDescriptor",d),S.addMethod("haveOwnPropertyDescriptor",d),S.addChainableMethod("length",y,g),S.addMethod("lengthOf",y),S.addMethod("match",b),S.addMethod("matches",b),S.addMethod("string",function(t,n){n&&T(this,"message",n);var r=T(this,"object");new S(r,n).is.a("string"),this.assert(~r.indexOf(t),"expected #{this} to contain "+e.inspect(t),"expected #{this} to not contain "+e.inspect(t))}),S.addMethod("keys",w),S.addMethod("key",w),S.addMethod("throw",v),S.addMethod("throws",v),S.addMethod("Throw",v),S.addMethod("respondTo",x),S.addMethod("respondsTo",x),S.addProperty("itself",function(){T(this,"itself",!0)}),S.addMethod("satisfy",m),S.addMethod("satisfies",m),S.addMethod("closeTo",E),S.addMethod("approximately",E),S.addMethod("members",function(t,n){n&&T(this,"message",n);var r=T(this,"object");new S(r).to.be.an("array"),new S(t).to.be.an("array");var o=T(this,"deep")?e.eql:void 0;return T(this,"contains")?this.assert(j(t,r,o),"expected #{this} to be a superset of #{act}","expected #{this} to not be a superset of #{act}",r,t):void this.assert(j(r,t,o)&&j(t,r,o),"expected #{this} to have the same members as #{act}","expected #{this} to not have the same members as #{act}",r,t)}),S.addMethod("oneOf",A),S.addChainableMethod("change",_),S.addChainableMethod("changes",_),S.addChainableMethod("increase",P),S.addChainableMethod("increases",P),S.addChainableMethod("decrease",O),S.addChainableMethod("decreases",O),S.addProperty("extensible",function(){var t,e=T(this,"object");try{t=Object.isExtensible(e)}catch(e){if(!(e instanceof TypeError))throw e;t=!1}this.assert(t,"expected #{this} to be extensible","expected #{this} to not be extensible")}),S.addProperty("sealed",function(){var t,e=T(this,"object");try{t=Object.isSealed(e)}catch(e){if(!(e instanceof TypeError))throw e;t=!0}this.assert(t,"expected #{this} to be sealed","expected #{this} to not be sealed")}),S.addProperty("frozen",function(){var t,e=T(this,"object");try{t=Object.isFrozen(e)}catch(e){if(!(e instanceof TypeError))throw e;t=!0}this.assert(t,"expected #{this} to be frozen","expected #{this} to not be frozen")})}},function(t,e){/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e){t.expect=function(e,n){return new t.Assertion(e,n)},t.expect.fail=function(e,n,r,o){throw r=r||"expect.fail()",new t.AssertionError(r,{actual:e,expected:n,operator:o},t.expect.fail)}}},function(t,e){/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e){function n(){function e(){return this instanceof String||this instanceof Number||this instanceof Boolean?new r(this.valueOf(),null,e):new r(this,null,e)}function n(t){Object.defineProperty(this,"should",{value:t,enumerable:!0,configurable:!0,writable:!0})}Object.defineProperty(Object.prototype,"should",{set:n,get:e,configurable:!0});var o={};return o.fail=function(e,n,r,i){throw r=r||"should.fail()",new t.AssertionError(r,{actual:e,expected:n,operator:i},o.fail)},o.equal=function(t,e,n){new r(t,n).to.equal(e)},o.Throw=function(t,e,n,o){new r(t,o).to.Throw(e,n)},o.exist=function(t,e){new r(t,e).to.exist},o.not={},o.not.equal=function(t,e,n){new r(t,n).to.not.equal(e)},o.not.Throw=function(t,e,n,o){new r(t,o).to.not.Throw(e,n)},o.not.exist=function(t,e){new r(t,e).to.not.exist},o.throw=o.Throw,o.not.throw=o.not.Throw,o}var r=t.Assertion;t.should=n,t.Should=n}},function(t,e){/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
t.exports=function(t,e){/*!
	   * Chai dependencies.
	   */
var n=t.Assertion,r=e.flag,o=t.assert=function(e,r){var o=new n(null,null,t.assert);o.assert(e,r,"[ negation message unavailable ]")};o.fail=function(e,n,r,i){throw r=r||"assert.fail()",new t.AssertionError(r,{actual:e,expected:n,operator:i},o.fail)},o.isOk=function(t,e){new n(t,e).is.ok},o.isNotOk=function(t,e){new n(t,e).is.not.ok},o.equal=function(t,e,i){var s=new n(t,i,o.equal);s.assert(e==r(s,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",e,t)},o.notEqual=function(t,e,i){var s=new n(t,i,o.notEqual);s.assert(e!=r(s,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",e,t)},o.strictEqual=function(t,e,r){new n(t,r).to.equal(e)},o.notStrictEqual=function(t,e,r){new n(t,r).to.not.equal(e)},o.deepEqual=function(t,e,r){new n(t,r).to.eql(e)},o.notDeepEqual=function(t,e,r){new n(t,r).to.not.eql(e)},o.isAbove=function(t,e,r){new n(t,r).to.be.above(e)},o.isAtLeast=function(t,e,r){new n(t,r).to.be.least(e)},o.isBelow=function(t,e,r){new n(t,r).to.be.below(e)},o.isAtMost=function(t,e,r){new n(t,r).to.be.most(e)},o.isTrue=function(t,e){new n(t,e).is.true},o.isNotTrue=function(t,e){new n(t,e).to.not.equal(!0)},o.isFalse=function(t,e){new n(t,e).is.false},o.isNotFalse=function(t,e){new n(t,e).to.not.equal(!1)},o.isNull=function(t,e){new n(t,e).to.equal(null)},o.isNotNull=function(t,e){new n(t,e).to.not.equal(null)},o.isNaN=function(t,e){new n(t,e).to.be.NaN},o.isNotNaN=function(t,e){new n(t,e).not.to.be.NaN},o.isUndefined=function(t,e){new n(t,e).to.equal(void 0)},o.isDefined=function(t,e){new n(t,e).to.not.equal(void 0)},o.isFunction=function(t,e){new n(t,e).to.be.a("function")},o.isNotFunction=function(t,e){new n(t,e).to.not.be.a("function")},o.isObject=function(t,e){new n(t,e).to.be.a("object")},o.isNotObject=function(t,e){new n(t,e).to.not.be.a("object")},o.isArray=function(t,e){new n(t,e).to.be.an("array")},o.isNotArray=function(t,e){new n(t,e).to.not.be.an("array")},o.isString=function(t,e){new n(t,e).to.be.a("string")},o.isNotString=function(t,e){new n(t,e).to.not.be.a("string")},o.isNumber=function(t,e){new n(t,e).to.be.a("number")},o.isNotNumber=function(t,e){new n(t,e).to.not.be.a("number")},o.isBoolean=function(t,e){new n(t,e).to.be.a("boolean")},o.isNotBoolean=function(t,e){new n(t,e).to.not.be.a("boolean")},o.typeOf=function(t,e,r){new n(t,r).to.be.a(e)},o.notTypeOf=function(t,e,r){new n(t,r).to.not.be.a(e)},o.instanceOf=function(t,e,r){new n(t,r).to.be.instanceOf(e)},o.notInstanceOf=function(t,e,r){new n(t,r).to.not.be.instanceOf(e)},o.include=function(t,e,r){new n(t,r,o.include).include(e)},o.notInclude=function(t,e,r){new n(t,r,o.notInclude).not.include(e)},o.match=function(t,e,r){new n(t,r).to.match(e)},o.notMatch=function(t,e,r){new n(t,r).to.not.match(e)},o.property=function(t,e,r){new n(t,r).to.have.property(e)},o.notProperty=function(t,e,r){new n(t,r).to.not.have.property(e)},o.deepProperty=function(t,e,r){new n(t,r).to.have.deep.property(e)},o.notDeepProperty=function(t,e,r){new n(t,r).to.not.have.deep.property(e)},o.propertyVal=function(t,e,r,o){new n(t,o).to.have.property(e,r)},o.propertyNotVal=function(t,e,r,o){new n(t,o).to.not.have.property(e,r)},o.deepPropertyVal=function(t,e,r,o){new n(t,o).to.have.deep.property(e,r)},o.deepPropertyNotVal=function(t,e,r,o){new n(t,o).to.not.have.deep.property(e,r)},o.lengthOf=function(t,e,r){new n(t,r).to.have.length(e)},o.throws=function(t,e,o,i){("string"==typeof e||e instanceof RegExp)&&(o=e,e=null);var s=new n(t,i).to.throw(e,o);return r(s,"object")},o.doesNotThrow=function(t,e,r){"string"==typeof e&&(r=e,e=null),new n(t,r).to.not.Throw(e)},o.operator=function(t,o,i,s){var a;switch(o){case"==":a=t==i;break;case"===":a=t===i;break;case">":a=t>i;break;case">=":a=t>=i;break;case"<":a=t<i;break;case"<=":a=t<=i;break;case"!=":a=t!=i;break;case"!==":a=t!==i;break;default:throw new Error('Invalid operator "'+o+'"')}var c=new n(a,s);c.assert(!0===r(c,"object"),"expected "+e.inspect(t)+" to be "+o+" "+e.inspect(i),"expected "+e.inspect(t)+" to not be "+o+" "+e.inspect(i))},o.closeTo=function(t,e,r,o){new n(t,o).to.be.closeTo(e,r)},o.approximately=function(t,e,r,o){new n(t,o).to.be.approximately(e,r)},o.sameMembers=function(t,e,r){new n(t,r).to.have.same.members(e)},o.sameDeepMembers=function(t,e,r){new n(t,r).to.have.same.deep.members(e)},o.includeMembers=function(t,e,r){new n(t,r).to.include.members(e)},o.includeDeepMembers=function(t,e,r){new n(t,r).to.include.deep.members(e)},o.oneOf=function(t,e,r){new n(t,r).to.be.oneOf(e)},o.changes=function(t,e,r){new n(t).to.change(e,r)},o.doesNotChange=function(t,e,r){new n(t).to.not.change(e,r)},o.increases=function(t,e,r){new n(t).to.increase(e,r)},o.doesNotIncrease=function(t,e,r){new n(t).to.not.increase(e,r)},o.decreases=function(t,e,r){new n(t).to.decrease(e,r)},o.doesNotDecrease=function(t,e,r){new n(t).to.not.decrease(e,r)},/*!
	   * ### .ifError(object)
	   *
	   * Asserts if value is not a false value, and throws if it is a true value.
	   * This is added to allow for chai to be a drop-in replacement for Node's
	   * assert class.
	   *
	   *     var err = new Error('I am a custom error');
	   *     assert.ifError(err); // Rethrows err!
	   *
	   * @name ifError
	   * @param {Object} object
	   * @namespace Assert
	   * @api public
	   */
o.ifError=function(t){if(t)throw t},o.isExtensible=function(t,e){new n(t,e).to.be.extensible},o.isNotExtensible=function(t,e){new n(t,e).to.not.be.extensible},o.isSealed=function(t,e){new n(t,e).to.be.sealed},o.isNotSealed=function(t,e){new n(t,e).to.not.be.sealed},o.isFrozen=function(t,e){new n(t,e).to.be.frozen},o.isNotFrozen=function(t,e){new n(t,e).to.not.be.frozen},/*!
	   * Aliases.
	   */
function t(e,n){return o[n]=o[e],t}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")}}]);