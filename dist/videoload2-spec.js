!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=74)}([,,function(e,t){/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));if(3!==arguments.length)return o[t];o[t]=n}},function(e,t,n){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=[];/*!
 * Chai version
 */
t.version="4.1.2",/*!
 * Assertion Error
 */
t.AssertionError=n(18);/*!
 * Utils for plugins (not exported)
 */
var r=n(76);t.use=function(e){return~o.indexOf(e)||(e(t,r),o.push(e)),t},/*!
 * Utility Functions
 */
t.util=r;/*!
 * Configuration
 */
var i=n(4);t.config=i;/*!
 * Primary `Assertion` prototype
 */
var s=n(94);t.use(s);/*!
 * Core Assertions
 */
var a=n(95);t.use(a);/*!
 * Expect interface
 */
var c=n(96);t.use(c);/*!
 * Should interface
 */
var l=n(97);t.use(l);/*!
 * Assert interface
 */
var d=n(98);t.use(d)},function(e,t){e.exports={includeStack:!1,showDiff:!0,truncateThreshold:40,useProxy:!0,proxyExcludedKeys:["then","inspect","toJSON"]}},function(e,t){/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));t.__flags||(t.__flags=Object.create(null)),n=3!==arguments.length||n;for(var r in o)(n||"object"!==r&&"ssfi"!==r&&"lockSsfi"!==r&&"message"!=r)&&(t.__flags[r]=o[r])}},,,,function(e,t,n){function o(e,t,n,o){return r({showHidden:t,seen:[],stylize:function(e){return e}},e,void 0===n?2:n)}function r(e,n,o){if(n&&"function"==typeof n.inspect&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var b=n.inspect(o,e);return"string"!=typeof b&&(b=r(e,b,o)),b}var v=i(e,n);if(v)return v;if(x(n)){if("outerHTML"in n)return n.outerHTML;try{if(document.xmlVersion){return(new XMLSerializer).serializeToString(n)}var k=document.createElementNS("http://www.w3.org/1999/xhtml","_");k.appendChild(n.cloneNode(!1));var O=k.innerHTML.replace("><",">"+n.innerHTML+"<");return k.innerHTML="",O}catch(e){}}var M,j,P=g(n),S=e.showHidden?w(n):P;if(0===S.length||m(n)&&(1===S.length&&"stack"===S[0]||2===S.length&&"description"===S[0]&&"stack"===S[1])){if("function"==typeof n)return M=y(n),j=M?": "+M:"",e.stylize("[Function"+j+"]","special");if(h(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(p(n))return e.stylize(Date.prototype.toUTCString.call(n),"date");if(m(n))return s(n)}var E="",N=!1,A=!1,D=["{","}"];if(u(n)&&(A=!0,D=["[","]"]),f(n)&&(N=!0,D=["[","]"]),"function"==typeof n&&(M=y(n),j=M?": "+M:"",E=" [Function"+j+"]"),h(n)&&(E=" "+RegExp.prototype.toString.call(n)),p(n)&&(E=" "+Date.prototype.toUTCString.call(n)),m(n))return s(n);if(0===S.length&&(!N||0==n.length))return D[0]+E+D[1];if(o<0)return h(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");e.seen.push(n);var T;if(N)T=a(e,n,o,P,S);else{if(A)return c(n);T=S.map(function(t){return l(e,n,o,P,t,N)})}return e.seen.pop(),d(T,E,D)}function i(e,t){switch(typeof t){case"undefined":return e.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string");case"number":return 0===t&&1/t==-1/0?e.stylize("-0","number"):e.stylize(""+t,"number");case"boolean":return e.stylize(""+t,"boolean");case"symbol":return e.stylize(t.toString(),"symbol")}if(null===t)return e.stylize("null","null")}function s(e){return"["+Error.prototype.toString.call(e)+"]"}function a(e,t,n,o,r){for(var i=[],s=0,a=t.length;s<a;++s)Object.prototype.hasOwnProperty.call(t,String(s))?i.push(l(e,t,n,o,String(s),!0)):i.push("");return r.forEach(function(r){r.match(/^\d+$/)||i.push(l(e,t,n,o,r,!0))}),i}function c(e){for(var t="[ ",n=0;n<e.length;++n){if(t.length>=v.truncateThreshold-7){t+="...";break}t+=e[n]+", "}return t+=" ]",-1!==t.indexOf(",  ]")&&(t=t.replace(",  ]"," ]")),t}function l(e,t,n,o,i,s){var a,c,l=Object.getOwnPropertyDescriptor(t,i);if(l&&(l.get?c=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(c=e.stylize("[Setter]","special"))),o.indexOf(i)<0&&(a="["+i+"]"),c||(e.seen.indexOf(t[i])<0?(c=null===n?r(e,t[i],null):r(e,t[i],n-1),c.indexOf("\n")>-1&&(c=s?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n"))):c=e.stylize("[Circular]","special")),void 0===a){if(s&&i.match(/^\d+$/))return c;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+c}function d(e,t,n){var o=0;return e.reduce(function(e,t){return o++,t.indexOf("\n")>=0&&o++,e+t.length+1},0)>60?n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]:n[0]+t+" "+e.join(", ")+" "+n[1]}function u(e){return"object"==typeof e&&/\w+Array]$/.test(b(e))}function f(e){return Array.isArray(e)||"object"==typeof e&&"[object Array]"===b(e)}function h(e){return"object"==typeof e&&"[object RegExp]"===b(e)}function p(e){return"object"==typeof e&&"[object Date]"===b(e)}function m(e){return"object"==typeof e&&"[object Error]"===b(e)}function b(e){return Object.prototype.toString.call(e)}var y=n(20),w=n(21),g=n(82),v=n(4);e.exports=o;var x=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&"nodeType"in e&&1===e.nodeType&&"string"==typeof e.nodeName}},function(e,t,n){var o=n(4);/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(){return o.useProxy&&"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect}},function(e,t,n){var o=(n(4),Object.getOwnPropertyDescriptor(function(){},"length"));/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){return o.configurable?(Object.defineProperty(e,"length",{get:function(){if(n)throw Error("Invalid Chai property: "+t+'.length. Due to a compatibility issue, "length" cannot directly follow "'+t+'". Use "'+t+'.lengthOf" instead.');throw Error("Invalid Chai property: "+t+'.length. See docs for proper usage of "'+t+'".')}}),e):e}},function(e,t,n){function o(e,t,n){if(!n){n=[];for(var r=0;r<=e.length;r++)n[r]=[]}return n[e.length]&&n[e.length][t.length]||(0===e.length||0===t.length?n[e.length][t.length]=Math.max(e.length,t.length):n[e.length][t.length]=Math.min(o(e.slice(0,-1),t,n)+1,o(e,t.slice(0,-1),n)+1,o(e.slice(0,-1),t.slice(0,-1),n)+(e.slice(-1)===t.slice(-1)?0:1))),n[e.length][t.length]}var r=n(4),i=n(2),s=n(21),a=n(10),c=["__flags","__methods","_obj","assert"];e.exports=function(e,t){return a()?new Proxy(e,{get:function e(n,a){if("string"==typeof a&&-1===r.proxyExcludedKeys.indexOf(a)&&!Reflect.has(n,a)){if(t)throw Error("Invalid Chai property: "+t+"."+a+'. See docs for proper usage of "'+t+'".');var l=s(n).filter(function(e){return!Object.prototype.hasOwnProperty(e)&&-1===c.indexOf(e)}).sort(function(e,t){return o(a,e)-o(a,t)});throw l.length&&o(l[0],a)<4?Error("Invalid Chai property: "+a+'. Did you mean "'+l[0]+'"?'):Error("Invalid Chai property: "+a)}return-1!==c.indexOf(a)||i(n,"lockSsfi")||i(n,"ssfi",e),Reflect.get(n,a)}}):e}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){this.classList=[],"string"==typeof e?(String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),this.splitClasses(e)):this.copyClasses(e)}return e.prototype.splitClasses=function(e){this.classList=e.trim().toLowerCase().split(/\s+/)},e.prototype.copyClasses=function(e){for(var t=0;t<e.length;t++)this.classList.push(e.item(t))},e.prototype.contains=function(e){return this.classList.indexOf(e)>=0},e}();t.ClassListPolyfill=o},,function(e,t,n){(function(t){!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){var t=typeof e;if("object"!==t)return t;if(null===e)return"null";if(e===o)return"global";if(Array.isArray(e)&&(!1===f||!(Symbol.toStringTag in e)))return"Array";if(r){if(e===o.location)return"Location";if(e===o.document)return"Document";if(e===(o.navigator||{}).mimeTypes)return"MimeTypeArray";if(e===(o.navigator||{}).plugins)return"PluginArray";if(e instanceof o.HTMLElement&&"BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if(e instanceof o.HTMLElement&&"TD"===e.tagName)return"HTMLTableDataCellElement";if(e instanceof o.HTMLElement&&"TH"===e.tagName)return"HTMLTableHeaderCellElement"}var i=f&&e[Symbol.toStringTag];if("string"==typeof i)return i;var u=Object.getPrototypeOf(e);return u===RegExp.prototype?"RegExp":u===Date.prototype?"Date":n&&u===Promise.prototype?"Promise":a&&u===Set.prototype?"Set":s&&u===Map.prototype?"Map":l&&u===WeakSet.prototype?"WeakSet":c&&u===WeakMap.prototype?"WeakMap":d&&u===DataView.prototype?"DataView":s&&u===b?"Map Iterator":a&&u===m?"Set Iterator":y&&u===w?"Array Iterator":g&&u===v?"String Iterator":null===u?"Object":Object.prototype.toString.call(e).slice(x,k)}var n="function"==typeof Promise,o="object"==typeof self?self:t,r="object"==typeof window&&"document"in window&&"navigator"in window&&"HTMLElement"in window,i="undefined"!=typeof Symbol,s="undefined"!=typeof Map,a="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,l="undefined"!=typeof WeakSet,d="undefined"!=typeof DataView,u=i&&void 0!==Symbol.iterator,f=i&&void 0!==Symbol.toStringTag,h=a&&"function"==typeof Set.prototype.entries,p=s&&"function"==typeof Map.prototype.entries,m=h&&Object.getPrototypeOf((new Set).entries()),b=p&&Object.getPrototypeOf((new Map).entries()),y=u&&"function"==typeof Array.prototype[Symbol.iterator],w=y&&Object.getPrototypeOf([][Symbol.iterator]()),g=u&&"function"==typeof String.prototype[Symbol.iterator],v=g&&Object.getPrototypeOf(""[Symbol.iterator]()),x=8,k=-1;return e})}).call(t,n(79))},function(e,t,n){e.exports=n(3)},function(e,t){/*!
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
function n(){function e(e,n){Object.keys(n).forEach(function(o){~t.indexOf(o)||(e[o]=n[o])})}var t=[].slice.call(arguments);return function(){for(var t=[].slice.call(arguments),n=0,o={};n<t.length;n++)e(o,t[n]);return o}}function o(e,t,o){var r=n("name","message","stack","constructor","toJSON"),i=r(t||{});this.message=e||"Unspecified AssertionError",this.showDiff=!1;for(var s in i)this[s]=i[s];if((o=o||arguments.callee)&&Error.captureStackTrace)Error.captureStackTrace(this,o);else try{throw new Error}catch(e){this.stack=e.stack}}/*!
 * Primary Exports
 */
e.exports=o,/*!
 * Inherit from Error.prototype
 */
o.prototype=Object.create(Error.prototype),/*!
 * Statically set name
 */
o.prototype.name="AssertionError",/*!
 * Ensure correct constructor
 */
o.prototype.constructor=o,o.prototype.toJSON=function(e){var t=n("constructor","toJSON","stack"),o=t({name:this.name},this);return!1!==e&&this.stack&&(o.stack=this.stack),o}},function(e,t){/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){return t.length>4?t[4]:e._obj}},function(e,t,n){"use strict";function o(e){if("function"!=typeof e)return null;var t="";if(void 0===Function.prototype.name&&void 0===e.name){var n=r.call(e).match(i);n&&(t=n[1])}else t=e.name;return t}var r=Function.prototype.toString,i=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;e.exports=o},function(e,t){/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){function t(e){-1===n.indexOf(e)&&n.push(e)}for(var n=Object.getOwnPropertyNames(e),o=Object.getPrototypeOf(e);null!==o;)Object.getOwnPropertyNames(o).forEach(t),o=Object.getPrototypeOf(o);return n}},function(e,t,n){/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(9),r=n(4);e.exports=function(e){var t=o(e),n=Object.prototype.toString.call(e);if(r.truncateThreshold&&t.length>=r.truncateThreshold){if("[object Function]"===n)return e.name&&""!==e.name?"[Function: "+e.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+e.length+") ]";if("[object Object]"===n){var i=Object.keys(e);return"{ Object ("+(i.length>2?i.splice(0,2).join(", ")+", ...":i.join(", "))+") }"}return t}return t}},function(e,t){/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){return"function"!=typeof Object.getOwnPropertySymbols?[]:Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.embedCodes=[{id:"Bandcamp Slim+show artwork",code:'<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=small/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=show/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-slim artwork-show"}},{id:"Bandcamp Slim+no artwork",code:'<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=small/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-slim artwork-none"}},{id:"Bandcamp Artwork only",code:'<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=big/minimal=true/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-artworkonly artwork-big width-350"}},{id:"Bandcamp Standard/no Artwork/no Tracklist",code:'<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-none"}},{id:"Bandcamp Standard/Artwork Big/no Tracklist",code:'<iframe style="border: 0; width: 100%; height: 312px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=big/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-big"}},{id:"Bandcamp Standard/Artwork Big/Tracklist",code:'<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=big/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-big tracklist width-350"}},{id:"Bandcamp Standard/Artwork Small/no Tracklist/Light Theme",code:'<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-small"}},{id:"Bandcamp Standard/Artwork Small/no Tracklist/Dark Theme",code:'<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-small bgcol-333333 linkcol-0f91ff"}},{id:"Bandcamp Standard/Artwork Small/Tracklist",code:'<iframe style="border: 0; width: 400px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=small/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-small tracklist width-400"}},{id:"Dailymotion/no starttime",code:'<iframe frameborder="0" width="480" height="270" src="https://www.dailymotion.com/embed/video/x44m1c5?start=" allowfullscreen></iframe><br /><a href="http://www.dailymotion.com/video/x44m1c5_1-004-the-architecture-of-an-angular-2-application_school" target="_blank">1- 004 The Architecture of an Angular 2...</a> <i>von <a href="http://www.dailymotion.com/tutstrainning" target="_blank">tutstrainning</a></i>',expect:{vid:"x44m1c5",param:"html5video dailymotion"}},{id:"Dailymotion/with starttime",code:'<iframe frameborder="0" width="560" height="315" src="https://www.dailymotion.com/embed/video/x4ik5tb?start=11" allowfullscreen></iframe><br /><a href="http://www.dailymotion.com/video/x4ik5tb_coldplay-glastonbury-2016-up-up-with-kids-live-full-version_music?start=11" target="_blank">Coldplay Glastonbury 2016 - Up &amp; Up - with Kids...</a> <i>von <a href="http://www.dailymotion.com/jon-chew" target="_blank">jon-chew</a></i>',expect:{vid:"x4ik5tb",param:"html5video dailymotion start-11"}},{id:"DCTP.tv/with starttime",code:'<iframe width="640" scrolling="no" height="360" frameborder="0" src="http://www.dctp.tv/filme/erdbeben-und-todeswelle/embed/?t=0m10s" name="dctp-embed" marginwidth="0" marginheight="0"><br></iframe>',expect:{vid:"erdbeben-und-todeswelle",param:"html5video dctptv start-10"}},{id:"Filmstarts",code:'<div id=\'blogvision\'>     <iframe src="http://www.filmstarts.de/_video/iblogvision.aspx?cmedia=19561243" style=\'width:480px; height:270px\'>     </iframe>     <br />     <a href="http://www.filmstarts.de/kritiken/204833.html" target="_blank">Zwischen zwei Leben - The Mountain Between Us</a>     <br/>     <a href="http://www.filmstarts.de/kritiken/204833/trailer/19561243.html"><strong>Zwischen zwei Leben - The Mountain Between Us</strong> Trailer DF</a>   </div>',expect:{vid:"19561243",param:"html5video filmstarts"}},{id:"FunnyOrDie",code:'<iframe src="https://www.funnyordie.com/embed/000a37c115" width="640" height="400" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>',expect:{vid:"000a37c115",param:"html5video funnyordie ratio-1.6"}},{id:"Giphy as iframe",code:'<iframe src="https://giphy.com/embed/5GoVLqeAOo6PK" width="480" height="375" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/excited-screaming-jonah-hill-5GoVLqeAOo6PK">via GIPHY</a></p>',expect:{vid:"5GoVLqeAOo6PK",param:"html5video giphy ratio-1.28"}},{id:"Giphy as image",code:'<iframe src="https://giphy.com/embed/5GoVLqeAOo6PK" width="480" height="375" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/excited-screaming-jonah-hill-5GoVLqeAOo6PK">via GIPHY</a></p>',expect:{vid:"5GoVLqeAOo6PK",param:"html5video giphy ratio-1.28"}},{id:"JsFiddle",code:'<iframe width="100%" height="300" src="https://jsfiddle.net/u93d2du8/embedded/js,html,css,result/dark/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>',expect:{vid:"u93d2du8",param:"html5video jsfiddle"}},{id:"Liveleak",code:'<iframe width="640" height="360" src="https://www.liveleak.com/ll_embed?f=4e002aa1bd81&start=" frameborder="0" allowfullscreen></iframe>',expect:{vid:"4e002aa1bd81",param:"html5video liveleak"}},{id:"Metacafe",code:'<iframe width="560" height="315" src="http://www.metacafe.com/embed/11603976/" frameborder="0" allowfullscreen></iframe>',expect:{vid:"11603976",param:"html5video metacafe"}},{id:"Slides/dark",code:'<iframe src="https://slid.es/news/custom-fonts/embed?style=dark" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',expect:{vid:"news/custom-fonts",param:"html5video slides ratio-1.37143"}},{id:"Slides/light",code:'<iframe src="https://slid.es/news/custom-fonts/embed?style=light" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',expect:{vid:"news/custom-fonts",param:"html5video slides color-light ratio-1.37143"}},{id:"Slideshare with slide",code:'<iframe src="https://www.slideshare.net/slideshow/embed_code/key/vYUBnUYL3JbBmP?startSlide=8" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MelissaPerri/the-build-trap-66849122" title="The Build Trap" target="_blank">The Build Trap</a> </strong> de <strong><a target="_blank" href="//www.slideshare.net/MelissaPerri">Melissa Perri</a></strong> </div>',expect:{vid:"vYUBnUYL3JbBmP",param:"html5video slideshare slide-8 ratio-1.2268"}},{id:"Soundcloud/stripe",code:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/249959694&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>',expect:{vid:"249959694",param:"html5video soundcloud stripe"}},{id:"Soundcloud/big/color",code:'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/249959694&color=%23321c94&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>',expect:{vid:"249959694",param:"html5video soundcloud linkcol-321c94"}},{id:"Speakerdeck/no slide",code:'<iframe width="720" height="405" src="https://speakerdeck.com/player/4ab3c53d71fd4434a87934b8600888fb?slide=" frameborder="0" allowfullscreen=""></iframe>',expect:{vid:"4ab3c53d71fd4434a87934b8600888fb",param:"html5video speakerdeck"}},{id:"Speakerdeck with slide number",code:'<iframe width="720" height="405" src="https://speakerdeck.com/player/704d7f2694fa43559e0afc488a0c810c?slide=11" frameborder="0" allowfullscreen=""></iframe>',expect:{vid:"704d7f2694fa43559e0afc488a0c810c",param:"html5video speakerdeck slide-11"}},{id:"Strawpoll",code:'<iframe src="https://www.strawpoll.me/embed_1/14514733" style="width:680px;height:342px;border:0;">Loading poll...</iframe>',expect:{vid:"14514733",param:"html5video strawpoll"}},{id:"TED",code:'<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/sarah_corbett_activism_needs_introverts" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>',expect:{vid:"sarah_corbett_activism_needs_introverts",param:"html5video ted"}},{id:"TED with German subtitles",code:'<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/lang/de/paul_tasner_how_i_became_an_entrepreneur_at_66" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>',expect:{vid:"paul_tasner_how_i_became_an_entrepreneur_at_66",param:"html5video ted lang"}},{id:"Vevo",code:'<iframe width="640" height="360" src="https://embed.vevo.com/?isrc=GB1209700420" allowfullscreen=""></iframe>',expect:{vid:"GB1209700420",param:"html5video vevo"}},{id:"Vimeo/Standard",code:'<iframe src="https://player.vimeo.com/video/125947740" width="640" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/125947740">WILDERNESS</a> from <a href="https://vimeo.com/user10257701">Ivan Friedman - MAYA PICTURES</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',expect:{vid:"125947740",param:"html5video vimeo ratio-2.37037"}},{id:"Vimeo/Color",code:'<iframe src="https://player.vimeo.com/video/125947740?color=c9ff23" width="640" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',expect:{vid:"125947740",param:"html5video vimeo linkcol-c9ff23 ratio-2.37037"}},{id:"Vine",code:'<iframe src="https://vine.co/v/5XwKTtq777Q/embed/simple" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"><\/script>',expect:{vid:"5XwKTtq777Q",param:"html5video vine ratio-1"}},{id:"YouTube",code:'<iframe width="560" height="315" src="https://www.youtube.com/embed/DyfM7oLIlp0?start=&end=" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>',expect:{vid:"DyfM7oLIlp0",param:"html5video youtube"}}]},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(75),r=n(99),i=n(24);describe("All classlist polyfill test cases",function(){o.testCases()}),describe("All provider embed test cases",function(){r.testCases()});for(var s=document.getElementById("iframeBtns"),a="",c=0;c<i.embedCodes.length;c++)a+='<a class="btn" href="'+c+'">'+i.embedCodes[c].id+"</a>";s.innerHTML=a;var l=document.getElementById("testDIV"),d=document.getElementsByClassName("btn");Array.from(d).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=parseInt(this.attributes.href.nodeValue);l.innerHTML='<div class="'+i.embedCodes[t].expect.param+'" id="'+i.embedCodes[t].expect.vid+'"></div>',video2day.run({debug:!0})})})},function(e,t,n){"use strict";function o(){describe("ClassListPolyfill",function(){describe("#constructor",function(){it("should manage a string as constructor input",function(){var e=new r.ClassListPolyfill("one two three");i.assert.equal(e.classList.length,3)}),it("should manage a classList-property as constructor input",function(){var e=document.getElementById("testDIV");e.innerHTML='<div class="html5video bandcamp layout-standard artwork-small tracklist bgcol-333333 linkcol-0f91ff"></div>';var t=e.firstChild.classList;i.assert.equal(t.length,7);var n=new r.ClassListPolyfill(t);i.assert.equal(n.classList.length,t.length)}),it("should trim string classes as constructor input",function(){var e=new r.ClassListPolyfill("  six seven eight nine         ");i.assert.equal(e.classList.length,4)}),it("should lowercase string classes as constructor input",function(){var e=new r.ClassListPolyfill("  TEn ElEvEn");i.assert.equal(e.classList.length,2),i.assert.ok(e.contains("ten")),i.assert.ok(e.contains("eleven"))})}),describe('#property function "contains"',function(){it("should confirm an available class",function(){var e=new r.ClassListPolyfill("html5video bandcamp width-444");i.assert.isTrue(e.contains("html5video")),i.assert.isTrue(e.contains("bandcamp")),i.assert.isTrue(e.contains("width-444"))}),it("should not confirm a non-existent class",function(){var e=new r.ClassListPolyfill("html5video bandcamp width-444");i.assert.isFalse(e.contains("nonexistentclass"))})})})}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=n(17);t.testCases=o},function(e,t,n){/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Dependencies that are used for multiple exports are required here only once
 */
var o=n(77);/*!
 * test utility
 */
t.test=n(78),/*!
 * type utility
 */
t.type=n(16),/*!
 * expectTypes utility
 */
t.expectTypes=n(80),/*!
 * message utility
 */
t.getMessage=n(81),/*!
 * actual utility
 */
t.getActual=n(19),/*!
 * Inspect util
 */
t.inspect=n(9),/*!
 * Object Display util
 */
t.objDisplay=n(22),/*!
 * Flag utility
 */
t.flag=n(2),/*!
 * Flag transferring utility
 */
t.transferFlags=n(5),/*!
 * Deep equal utility
 */
t.eql=n(83),/*!
 * Deep path info
 */
t.getPathInfo=o.getPathInfo,/*!
 * Check if a property exists
 */
t.hasProperty=o.hasProperty,/*!
 * Function name
 */
t.getName=n(20),/*!
 * add Property
 */
t.addProperty=n(84),/*!
 * add Method
 */
t.addMethod=n(85),/*!
 * overwrite Property
 */
t.overwriteProperty=n(86),/*!
 * overwrite Method
 */
t.overwriteMethod=n(87),/*!
 * Add a chainable method
 */
t.addChainableMethod=n(88),/*!
 * Overwrite chainable method
 */
t.overwriteChainableMethod=n(89),/*!
 * Compare by inspect method
 */
t.compareByInspect=n(90),/*!
 * Get own enumerable property symbols method
 */
t.getOwnEnumerablePropertySymbols=n(23),/*!
 * Get own enumerable properties method
 */
t.getOwnEnumerableProperties=n(91),/*!
 * Checks error against a given set of criteria
 */
t.checkError=n(92),/*!
 * Proxify util
 */
t.proxify=n(12),/*!
 * addLengthGuard util
 */
t.addLengthGuard=n(11),/*!
 * isProxyEnabled helper
 */
t.isProxyEnabled=n(10),/*!
 * isNaN method
 */
t.isNaN=n(93)},function(e,t,n){"use strict";function o(e,t){return void 0!==e&&null!==e&&t in Object(e)}function r(e){return e.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map(function(e){var t=/^\[(\d+)\]$/,n=t.exec(e);return n?{i:parseFloat(n[1])}:{p:e.replace(/\\([.\[\]])/g,"$1")}})}function i(e,t,n){var o=e,r=null;n=void 0===n?t.length:n;for(var i=0;i<n;i++){var s=t[i];o&&(o=void 0===s.p?o[s.i]:o[s.p],i===n-1&&(r=o))}return r}function s(e,t,n){for(var o=e,r=n.length,i=null,s=0;s<r;s++){var a=null,c=null;if(i=n[s],s===r-1)a=void 0===i.p?i.i:i.p,o[a]=t;else if(void 0!==i.p&&o[i.p])o=o[i.p];else if(void 0!==i.i&&o[i.i])o=o[i.i];else{var l=n[s+1];a=void 0===i.p?i.i:i.p,c=void 0===l.p?[]:{},o[a]=c,o=o[a]}}}function a(e,t){var n=r(t),s=n[n.length-1],a={parent:n.length>1?i(e,n,n.length-1):e,name:s.p||s.i,value:i(e,n)};return a.exists=o(a.parent,a.name),a}function c(e,t){return a(e,t).value}function l(e,t,n){return s(e,n,r(t)),e}e.exports={hasProperty:o,getPathInfo:a,getPathValue:c,setPathValue:l}},function(e,t,n){/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(2);e.exports=function(e,t){var n=o(e,"negate"),r=t[0];return n?!r:r}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(18),r=n(2),i=n(16);e.exports=function(e,t){var n=r(e,"message"),s=r(e,"ssfi");n=n?n+": ":"",e=r(e,"object"),t=t.map(function(e){return e.toLowerCase()}),t.sort();var a=t.map(function(e,n){var o=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an":"a";return(t.length>1&&n===t.length-1?"or ":"")+o+" "+e}).join(", "),c=i(e).toLowerCase();if(!t.some(function(e){return c===e}))throw new o(n+"object tested must be "+a+", but "+c+" given",void 0,s)}},function(e,t,n){/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(2),r=n(19),i=(n(9),n(22));e.exports=function(e,t){var n=o(e,"negate"),s=o(e,"object"),a=t[3],c=r(e,t),l=n?t[2]:t[1],d=o(e,"message");return"function"==typeof l&&(l=l()),l=l||"",l=l.replace(/#\{this\}/g,function(){return i(s)}).replace(/#\{act\}/g,function(){return i(c)}).replace(/#\{exp\}/g,function(){return i(a)}),d?d+": "+l:l}},function(e,t){/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){var t=[];for(var n in e)t.push(n);return t}},function(e,t,n){"use strict";function o(){this._key="chai/deep-eql__"+Math.random()+Date.now()}/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
function r(e,t,n){if(!n||v(e)||v(t))return null;var o=n.get(e);if(o){var r=o.get(t);if("boolean"==typeof r)return r}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
function i(e,t,n,o){if(n&&!v(e)&&!v(t)){var r=n.get(e);r?r.set(t,o):(r=new k,r.set(t,o),n.set(e,r))}}function s(e,t,n){if(n&&n.comparator)return c(e,t,n);var o=a(e,t);return null!==o?o:c(e,t,n)}function a(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t||!v(e)&&!v(t)&&null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
function c(e,t,n){n=n||{},n.memoize=!1!==n.memoize&&(n.memoize||new k);var o=n&&n.comparator,s=r(e,t,n.memoize);if(null!==s)return s;var c=r(t,e,n.memoize);if(null!==c)return c;if(o){var d=o(e,t);if(!1===d||!0===d)return i(e,t,n.memoize,d),d;var u=a(e,t);if(null!==u)return u}var f=x(e);if(f!==x(t))return i(e,t,n.memoize,!1),!1;i(e,t,n.memoize,!0);var h=l(e,t,f,n);return i(e,t,n.memoize,h),h}function l(e,t,n,o){switch(n){case"String":case"Number":case"Boolean":case"Date":return s(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":case"Error":return e===t;case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return f(e,t,o);case"RegExp":return d(e,t);case"Generator":return h(e,t,o);case"DataView":return f(new Uint8Array(e.buffer),new Uint8Array(t.buffer),o);case"ArrayBuffer":return f(new Uint8Array(e),new Uint8Array(t),o);case"Set":case"Map":return u(e,t,o);default:return g(e,t,o)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
function d(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function u(e,t,n){if(e.size!==t.size)return!1;if(0===e.size)return!0;var o=[],r=[];return e.forEach(function(e,t){o.push([e,t])}),t.forEach(function(e,t){r.push([e,t])}),f(o.sort(),r.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function f(e,t,n){var o=e.length;if(o!==t.length)return!1;if(0===o)return!0;for(var r=-1;++r<o;)if(!1===s(e[r],t[r],n))return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function h(e,t,n){return f(b(e),b(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
function p(e){return"undefined"!=typeof Symbol&&"object"==typeof e&&void 0!==Symbol.iterator&&"function"==typeof e[Symbol.iterator]}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function m(e){if(p(e))try{return b(e[Symbol.iterator]())}catch(e){return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
function b(e){for(var t=e.next(),n=[t.value];!1===t.done;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
function y(e){var t=[];for(var n in e)t.push(n);return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function w(e,t,n,o){var r=n.length;if(0===r)return!0;for(var i=0;i<r;i+=1)if(!1===s(e[n[i]],t[n[i]],o))return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function g(e,t,n){var o=y(e),r=y(t);if(o.length&&o.length===r.length)return o.sort(),r.sort(),!1!==f(o,r)&&w(e,t,o,n);var i=m(e),s=m(t);return i.length&&i.length===s.length?(i.sort(),s.sort(),f(i,s,n)):0===o.length&&0===i.length&&0===r.length&&0===s.length}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
function v(e){return null===e||"object"!=typeof e}/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var x=n(16);o.prototype={get:function(e){return e[this._key]},set:function(e,t){Object.isExtensible(e)&&Object.defineProperty(e,this._key,{value:t,configurable:!0})}};var k="function"==typeof WeakMap?WeakMap:o;/*!
 * Primary Export
 */
e.exports=s,e.exports.MemoizeMap=k},function(e,t,n){/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(3),r=n(2),i=n(10),s=n(5);e.exports=function(e,t,n){n=void 0===n?function(){}:n,Object.defineProperty(e,t,{get:function e(){i()||r(this,"lockSsfi")||r(this,"ssfi",e);var t=n.call(this);if(void 0!==t)return t;var a=new o.Assertion;return s(this,a),a},configurable:!0})}},function(e,t,n){/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(11),r=n(3),i=n(2),s=n(12),a=n(5);e.exports=function(e,t,n){var c=function(){i(this,"lockSsfi")||i(this,"ssfi",c);var e=n.apply(this,arguments);if(void 0!==e)return e;var t=new r.Assertion;return a(this,t),t};o(c,t,!1),e[t]=s(c,t)}},function(e,t,n){/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(3),r=n(2),i=n(10),s=n(5);e.exports=function(e,t,n){var a=Object.getOwnPropertyDescriptor(e,t),c=function(){};a&&"function"==typeof a.get&&(c=a.get),Object.defineProperty(e,t,{get:function e(){i()||r(this,"lockSsfi")||r(this,"ssfi",e);var t=r(this,"lockSsfi");r(this,"lockSsfi",!0);var a=n(c).call(this);if(r(this,"lockSsfi",t),void 0!==a)return a;var l=new o.Assertion;return s(this,l),l},configurable:!0})}},function(e,t,n){/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(11),r=n(3),i=n(2),s=n(12),a=n(5);e.exports=function(e,t,n){var c=e[t],l=function(){throw new Error(t+" is not a function")};c&&"function"==typeof c&&(l=c);var d=function(){i(this,"lockSsfi")||i(this,"ssfi",d);var e=i(this,"lockSsfi");i(this,"lockSsfi",!0);var t=n(l).apply(this,arguments);if(i(this,"lockSsfi",e),void 0!==t)return t;var o=new r.Assertion;return a(this,o),o};o(d,t,!1),e[t]=s(d,t)}},function(e,t,n){/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(11),r=n(3),i=n(2),s=n(12),a=n(5),c="function"==typeof Object.setPrototypeOf,l=function(){},d=Object.getOwnPropertyNames(l).filter(function(e){var t=Object.getOwnPropertyDescriptor(l,e);return"object"!=typeof t||!t.configurable}),u=Function.prototype.call,f=Function.prototype.apply;e.exports=function(e,t,n,l){"function"!=typeof l&&(l=function(){});var h={method:n,chainingBehavior:l};e.__methods||(e.__methods={}),e.__methods[t]=h,Object.defineProperty(e,t,{get:function(){h.chainingBehavior.call(this);var n=function(){i(this,"lockSsfi")||i(this,"ssfi",n);var e=h.method.apply(this,arguments);if(void 0!==e)return e;var t=new r.Assertion;return a(this,t),t};if(o(n,t,!0),c){var l=Object.create(this);l.call=u,l.apply=f,Object.setPrototypeOf(n,l)}else{Object.getOwnPropertyNames(e).forEach(function(t){if(-1===d.indexOf(t)){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,o)}})}return a(this,n),s(n)},configurable:!0})}},function(e,t,n){/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(3),r=n(5);e.exports=function(e,t,n,i){var s=e.__methods[t],a=s.chainingBehavior;s.chainingBehavior=function(){var e=i(a).call(this);if(void 0!==e)return e;var t=new o.Assertion;return r(this,t),t};var c=s.method;s.method=function(){var e=n(c).apply(this,arguments);if(void 0!==e)return e;var t=new o.Assertion;return r(this,t),t}}},function(e,t,n){/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(9);e.exports=function(e,t){return o(e)<o(t)?-1:1}},function(e,t,n){/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var o=n(23);e.exports=function(e){return Object.keys(e).concat(o(e))}},function(e,t,n){"use strict";function o(e,t){return t instanceof Error&&e===t}function r(e,t){return t instanceof Error?e.constructor===t.constructor||e instanceof t.constructor:(t.prototype instanceof Error||t===Error)&&(e.constructor===t||e instanceof t)}function i(e,t){var n="string"==typeof e?e:e.message;return t instanceof RegExp?t.test(n):"string"==typeof t&&-1!==n.indexOf(t)}function s(e){var t="";if(void 0===e.name){var n=String(e).match(l);n&&(t=n[1])}else t=e.name;return t}function a(e){var t=e;return e instanceof Error?t=s(e.constructor):"function"==typeof e&&(t=s(e).trim()||s(new e)),t}function c(e){var t="";return e&&e.message?t=e.message:"string"==typeof e&&(t=e),t}var l=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;e.exports={compatibleInstance:o,compatibleConstructor:r,compatibleMessage:i,getMessage:c,getConstructorName:a}},function(e,t){/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function n(e){return e!==e}e.exports=Number.isNaN||n},function(e,t,n){/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(4);e.exports=function(e,t){/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
function n(e,o,r,s){return i(this,"ssfi",r||n),i(this,"lockSsfi",s),i(this,"object",e),i(this,"message",o),t.proxify(this)}/*!
   * Module dependencies.
   */
var r=e.AssertionError,i=t.flag;/*!
   * Module export.
   */
e.Assertion=n,Object.defineProperty(n,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack},set:function(e){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack=e}}),Object.defineProperty(n,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff},set:function(e){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff=e}}),n.addProperty=function(e,n){t.addProperty(this.prototype,e,n)},n.addMethod=function(e,n){t.addMethod(this.prototype,e,n)},n.addChainableMethod=function(e,n,o){t.addChainableMethod(this.prototype,e,n,o)},n.overwriteProperty=function(e,n){t.overwriteProperty(this.prototype,e,n)},n.overwriteMethod=function(e,n){t.overwriteMethod(this.prototype,e,n)},n.overwriteChainableMethod=function(e,n,o){t.overwriteChainableMethod(this.prototype,e,n,o)},n.prototype.assert=function(e,n,s,a,c,l){var d=t.test(this,arguments);if(!1!==l&&(l=!0),void 0===a&&void 0===c&&(l=!1),!0!==o.showDiff&&(l=!1),!d){n=t.getMessage(this,arguments);var u=t.getActual(this,arguments);throw new r(n,{actual:u,expected:a,showDiff:l},o.includeStack?this.assert:i(this,"ssfi"))}},/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(n.prototype,"_obj",{get:function(){return i(this,"object")},set:function(e){i(this,"object",e)}})}},function(e,t){/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){function n(e,n){n&&_(this,"message",n),e=e.toLowerCase();var o=_(this,"object"),r=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an ":"a ";this.assert(e===t.type(o).toLowerCase(),"expected #{this} to be "+r+e,"expected #{this} not to be "+r+e)}function o(e,n){return t.isNaN(e)&&t.isNaN(n)||e===n}function r(){_(this,"contains",!0)}function i(e,n){n&&_(this,"message",n);var r=_(this,"object"),i=t.type(r).toLowerCase(),s=_(this,"message"),a=_(this,"negate"),c=_(this,"ssfi"),l=_(this,"deep"),d=l?"deep ":"";s=s?s+": ":"";var u=!1;switch(i){case"string":u=-1!==r.indexOf(e);break;case"weakset":if(l)throw new T(s+"unable to use .deep.include with WeakSet",void 0,c);u=r.has(e);break;case"map":var f=l?t.eql:o;r.forEach(function(t){u=u||f(t,e)});break;case"set":l?r.forEach(function(n){u=u||t.eql(n,e)}):u=r.has(e);break;case"array":u=l?r.some(function(n){return t.eql(n,e)}):-1!==r.indexOf(e);break;default:if(e!==Object(e))throw new T(s+"object tested must be an array, a map, an object, a set, a string, or a weakset, but "+i+" given",void 0,c);var h=Object.keys(e),p=null,m=0;if(h.forEach(function(n){var o=new D(r);if(t.transferFlags(this,o,!0),_(o,"lockSsfi",!0),!a||1===h.length)return void o.property(n,e[n]);try{o.property(n,e[n])}catch(e){if(!t.checkError.compatibleConstructor(e,T))throw e;null===p&&(p=e),m++}},this),a&&h.length>1&&m===h.length)throw p;return}this.assert(u,"expected #{this} to "+d+"include "+t.inspect(e),"expected #{this} to not "+d+"include "+t.inspect(e))}function s(){var e=_(this,"object"),n=t.type(e);this.assert("Arguments"===n,"expected #{this} to be arguments but got "+n,"expected #{this} to not be arguments")}function a(e,t){t&&_(this,"message",t);var n=_(this,"object");if(_(this,"deep"))return this.eql(e);this.assert(e===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",e,this._obj,!0)}function c(e,n){n&&_(this,"message",n),this.assert(t.eql(e,_(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",e,this._obj,!0)}function l(e,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"doLength"),i=_(this,"message"),s=i?i+": ":"",a=_(this,"ssfi"),c=t.type(o).toLowerCase(),l=t.type(e).toLowerCase(),d=!0;if(r&&new D(o,i,a,!0).to.have.property("length"),r||"date"!==c||"date"===l)if("number"===l||!r&&"number"!==c)if(r||"date"===c||"number"===c)d=!1;else{var u="string"===c?"'"+o+"'":o;errorMessage=s+"expected "+u+" to be a number or a date"}else errorMessage=s+"the argument to above must be a number";else errorMessage=s+"the argument to above must be a date";if(d)throw new T(errorMessage,void 0,a);if(r){var f=o.length;this.assert(f>e,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",e,f)}else this.assert(o>e,"expected #{this} to be above #{exp}","expected #{this} to be at most #{exp}",e)}function d(e,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"doLength"),i=_(this,"message"),s=i?i+": ":"",a=_(this,"ssfi"),c=t.type(o).toLowerCase(),l=t.type(e).toLowerCase(),d=!0;if(r&&new D(o,i,a,!0).to.have.property("length"),r||"date"!==c||"date"===l)if("number"===l||!r&&"number"!==c)if(r||"date"===c||"number"===c)d=!1;else{var u="string"===c?"'"+o+"'":o;errorMessage=s+"expected "+u+" to be a number or a date"}else errorMessage=s+"the argument to least must be a number";else errorMessage=s+"the argument to least must be a date";if(d)throw new T(errorMessage,void 0,a);if(r){var f=o.length;this.assert(f>=e,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",e,f)}else this.assert(o>=e,"expected #{this} to be at least #{exp}","expected #{this} to be below #{exp}",e)}function u(e,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"doLength"),i=_(this,"message"),s=i?i+": ":"",a=_(this,"ssfi"),c=t.type(o).toLowerCase(),l=t.type(e).toLowerCase(),d=!0;if(r&&new D(o,i,a,!0).to.have.property("length"),r||"date"!==c||"date"===l)if("number"===l||!r&&"number"!==c)if(r||"date"===c||"number"===c)d=!1;else{var u="string"===c?"'"+o+"'":o;errorMessage=s+"expected "+u+" to be a number or a date"}else errorMessage=s+"the argument to below must be a number";else errorMessage=s+"the argument to below must be a date";if(d)throw new T(errorMessage,void 0,a);if(r){var f=o.length;this.assert(f<e,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",e,f)}else this.assert(o<e,"expected #{this} to be below #{exp}","expected #{this} to be at least #{exp}",e)}function f(e,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"doLength"),i=_(this,"message"),s=i?i+": ":"",a=_(this,"ssfi"),c=t.type(o).toLowerCase(),l=t.type(e).toLowerCase(),d=!0;if(r&&new D(o,i,a,!0).to.have.property("length"),r||"date"!==c||"date"===l)if("number"===l||!r&&"number"!==c)if(r||"date"===c||"number"===c)d=!1;else{var u="string"===c?"'"+o+"'":o;errorMessage=s+"expected "+u+" to be a number or a date"}else errorMessage=s+"the argument to most must be a number";else errorMessage=s+"the argument to most must be a date";if(d)throw new T(errorMessage,void 0,a);if(r){var f=o.length;this.assert(f<=e,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",e,f)}else this.assert(o<=e,"expected #{this} to be at most #{exp}","expected #{this} to be above #{exp}",e)}function h(e,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"ssfi"),i=_(this,"message");try{var s=o instanceof e}catch(n){if(n instanceof TypeError)throw i=i?i+": ":"",new T(i+"The instanceof assertion needs a constructor but "+t.type(e)+" was given.",void 0,r);throw n}var a=t.getName(e);null===a&&(a="an unnamed constructor"),this.assert(s,"expected #{this} to be an instance of "+a,"expected #{this} to not be an instance of "+a)}function p(e,n,o){o&&_(this,"message",o);var r=_(this,"nested"),i=_(this,"own"),s=_(this,"message"),a=_(this,"object"),c=_(this,"ssfi");if(r&&i)throw s=s?s+": ":"",new T(s+'The "nested" and "own" flags cannot be combined.',void 0,c);if(null===a||void 0===a)throw s=s?s+": ":"",new T(s+"Target cannot be null or undefined.",void 0,c);var l=_(this,"deep"),d=_(this,"negate"),u=r?t.getPathInfo(a,e):null,f=r?u.value:a[e],h="";l&&(h+="deep "),i&&(h+="own "),r&&(h+="nested "),h+="property ";var p;p=i?Object.prototype.hasOwnProperty.call(a,e):r?u.exists:t.hasProperty(a,e),d&&1!==arguments.length||this.assert(p,"expected #{this} to have "+h+t.inspect(e),"expected #{this} to not have "+h+t.inspect(e)),arguments.length>1&&this.assert(p&&(l?t.eql(n,f):n===f),"expected #{this} to have "+h+t.inspect(e)+" of #{exp}, but got #{act}","expected #{this} to not have "+h+t.inspect(e)+" of #{act}",n,f),_(this,"object",f)}function m(e,t,n){_(this,"own",!0),p.apply(this,arguments)}function b(e,n,o){"string"==typeof n&&(o=n,n=null),o&&_(this,"message",o);var r=_(this,"object"),i=Object.getOwnPropertyDescriptor(Object(r),e);i&&n?this.assert(t.eql(n,i),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to match "+t.inspect(n)+", got "+t.inspect(i),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to not match "+t.inspect(n),n,i,!0):this.assert(i,"expected #{this} to have an own property descriptor for "+t.inspect(e),"expected #{this} to not have an own property descriptor for "+t.inspect(e)),_(this,"object",i)}function y(){_(this,"doLength",!0)}function w(e,t){t&&_(this,"message",t);var n=_(this,"object"),o=_(this,"message"),r=_(this,"ssfi");new D(n,o,r,!0).to.have.property("length");var i=n.length;this.assert(i==e,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",e,i)}function g(e,t){t&&_(this,"message",t);var n=_(this,"object");this.assert(e.exec(n),"expected #{this} to match "+e,"expected #{this} not to match "+e)}function v(e){var n,o=_(this,"object"),r=t.type(o),i=t.type(e),s=_(this,"ssfi"),a=_(this,"deep"),c="",l=!0,d=_(this,"message");d=d?d+": ":"";var u=d+"when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";if("Map"===r||"Set"===r)c=a?"deeply ":"",f=[],o.forEach(function(e,t){f.push(t)}),"Array"!==i&&(e=Array.prototype.slice.call(arguments));else{switch(f=t.getOwnEnumerableProperties(o),i){case"Array":if(arguments.length>1)throw new T(u,void 0,s);break;case"Object":if(arguments.length>1)throw new T(u,void 0,s);e=Object.keys(e);break;default:e=Array.prototype.slice.call(arguments)}e=e.map(function(e){return"symbol"==typeof e?e:String(e)})}if(!e.length)throw new T(d+"keys required",void 0,s);var f,h=e.length,p=_(this,"any"),m=_(this,"all"),b=e;if(p||m||(m=!0),p&&(l=b.some(function(e){return f.some(function(n){return a?t.eql(e,n):e===n})})),m&&(l=b.every(function(e){return f.some(function(n){return a?t.eql(e,n):e===n})}),_(this,"contains")||(l=l&&e.length==f.length)),h>1){e=e.map(function(e){return t.inspect(e)});var y=e.pop();m&&(n=e.join(", ")+", and "+y),p&&(n=e.join(", ")+", or "+y)}else n=t.inspect(e[0]);n=(h>1?"keys ":"key ")+n,n=(_(this,"contains")?"contain ":"have ")+n,this.assert(l,"expected #{this} to "+c+n,"expected #{this} to not "+c+n,b.slice(0).sort(t.compareByInspect),f.sort(t.compareByInspect),!0)}function x(e,n,o){o&&_(this,"message",o);var r=_(this,"object"),i=_(this,"ssfi"),s=_(this,"message"),a=_(this,"negate")||!1;new D(r,s,i,!0).is.a("function"),(e instanceof RegExp||"string"==typeof e)&&(n=e,e=null);var c;try{r()}catch(e){c=e}var l=void 0===e&&void 0===n,d=Boolean(e&&n),u=!1,f=!1;if(l||!l&&!a){var h="an error";e instanceof Error?h="#{exp}":e&&(h=t.checkError.getConstructorName(e)),this.assert(c,"expected #{this} to throw "+h,"expected #{this} to not throw an error but #{act} was thrown",e&&e.toString(),c instanceof Error?c.toString():"string"==typeof c?c:c&&t.checkError.getConstructorName(c))}if(e&&c){if(e instanceof Error){t.checkError.compatibleInstance(c,e)===a&&(d&&a?u=!0:this.assert(a,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(c&&!a?" but #{act} was thrown":""),e.toString(),c.toString()))}t.checkError.compatibleConstructor(c,e)===a&&(d&&a?u=!0:this.assert(a,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(c?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&t.checkError.getConstructorName(e),c instanceof Error?c.toString():c&&t.checkError.getConstructorName(c)))}if(c&&void 0!==n&&null!==n){var p="including";n instanceof RegExp&&(p="matching");t.checkError.compatibleMessage(c,n)===a&&(d&&a?f=!0:this.assert(a,"expected #{this} to throw error "+p+" #{exp} but got #{act}","expected #{this} to throw error not "+p+" #{exp}",n,t.checkError.getMessage(c)))}u&&f&&this.assert(a,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(c?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&t.checkError.getConstructorName(e),c instanceof Error?c.toString():c&&t.checkError.getConstructorName(c)),_(this,"object",c)}function k(e,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"itself"),i="function"!=typeof o||r?o[e]:o.prototype[e];this.assert("function"==typeof i,"expected #{this} to respond to "+t.inspect(e),"expected #{this} to not respond to "+t.inspect(e))}function O(e,n){n&&_(this,"message",n);var o=_(this,"object"),r=e(o);this.assert(r,"expected #{this} to satisfy "+t.objDisplay(e),"expected #{this} to not satisfy"+t.objDisplay(e),!_(this,"negate"),r)}function M(e,t,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"message"),i=_(this,"ssfi");if(new D(o,r,i,!0).is.a("number"),"number"!=typeof e||"number"!=typeof t)throw r=r?r+": ":"",new T(r+"the arguments to closeTo or approximately must be numbers",void 0,i);this.assert(Math.abs(o-e)<=t,"expected #{this} to be close to "+e+" +/- "+t,"expected #{this} not to be close to "+e+" +/- "+t)}function j(e,t,n,o,r){if(!o){if(e.length!==t.length)return!1;t=t.slice()}return e.every(function(e,i){if(r)return n?n(e,t[i]):e===t[i];if(!n){var s=t.indexOf(e);return-1!==s&&(o||t.splice(s,1),!0)}return t.some(function(r,i){return!!n(e,r)&&(o||t.splice(i,1),!0)})})}function P(e,t){t&&_(this,"message",t);var n=_(this,"object"),o=_(this,"message"),r=_(this,"ssfi");new D(e,o,r,!0).to.be.an("array"),this.assert(e.indexOf(n)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",e,n)}function S(e,t,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"message"),i=_(this,"ssfi");new D(o,r,i,!0).is.a("function");var s;t?(new D(e,r,i,!0).to.have.property(t),s=e[t]):(new D(e,r,i,!0).is.a("function"),s=e()),o();var a=void 0===t||null===t?e():e[t],c=void 0===t||null===t?s:"."+t;_(this,"deltaMsgObj",c),_(this,"initialDeltaValue",s),_(this,"finalDeltaValue",a),_(this,"deltaBehavior","change"),_(this,"realDelta",a!==s),this.assert(s!==a,"expected "+c+" to change","expected "+c+" to not change")}function E(e,t,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"message"),i=_(this,"ssfi");new D(o,r,i,!0).is.a("function");var s;t?(new D(e,r,i,!0).to.have.property(t),s=e[t]):(new D(e,r,i,!0).is.a("function"),s=e()),new D(s,r,i,!0).is.a("number"),o();var a=void 0===t||null===t?e():e[t],c=void 0===t||null===t?s:"."+t;_(this,"deltaMsgObj",c),_(this,"initialDeltaValue",s),_(this,"finalDeltaValue",a),_(this,"deltaBehavior","increase"),_(this,"realDelta",a-s),this.assert(a-s>0,"expected "+c+" to increase","expected "+c+" to not increase")}function N(e,t,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"message"),i=_(this,"ssfi");new D(o,r,i,!0).is.a("function");var s;t?(new D(e,r,i,!0).to.have.property(t),s=e[t]):(new D(e,r,i,!0).is.a("function"),s=e()),new D(s,r,i,!0).is.a("number"),o();var a=void 0===t||null===t?e():e[t],c=void 0===t||null===t?s:"."+t;_(this,"deltaMsgObj",c),_(this,"initialDeltaValue",s),_(this,"finalDeltaValue",a),_(this,"deltaBehavior","decrease"),_(this,"realDelta",s-a),this.assert(a-s<0,"expected "+c+" to decrease","expected "+c+" to not decrease")}function A(e,t){t&&_(this,"message",t);var n,o=_(this,"deltaMsgObj"),r=_(this,"initialDeltaValue"),i=_(this,"finalDeltaValue"),s=_(this,"deltaBehavior"),a=_(this,"realDelta");n="change"===s?Math.abs(i-r)===Math.abs(e):a===Math.abs(e),this.assert(n,"expected "+o+" to "+s+" by "+e,"expected "+o+" to not "+s+" by "+e)}var D=e.Assertion,T=e.AssertionError,_=t.flag;["to","be","been","is","and","has","have","with","that","which","at","of","same","but","does"].forEach(function(e){D.addProperty(e)}),D.addProperty("not",function(){_(this,"negate",!0)}),D.addProperty("deep",function(){_(this,"deep",!0)}),D.addProperty("nested",function(){_(this,"nested",!0)}),D.addProperty("own",function(){_(this,"own",!0)}),D.addProperty("ordered",function(){_(this,"ordered",!0)}),D.addProperty("any",function(){_(this,"any",!0),_(this,"all",!1)}),D.addProperty("all",function(){_(this,"all",!0),_(this,"any",!1)}),D.addChainableMethod("an",n),D.addChainableMethod("a",n),D.addChainableMethod("include",i,r),D.addChainableMethod("contain",i,r),D.addChainableMethod("contains",i,r),D.addChainableMethod("includes",i,r),D.addProperty("ok",function(){this.assert(_(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),D.addProperty("true",function(){this.assert(!0===_(this,"object"),"expected #{this} to be true","expected #{this} to be false",!_(this,"negate"))}),D.addProperty("false",function(){this.assert(!1===_(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!_(this,"negate"))}),D.addProperty("null",function(){this.assert(null===_(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),D.addProperty("undefined",function(){this.assert(void 0===_(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),D.addProperty("NaN",function(){this.assert(t.isNaN(_(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),D.addProperty("exist",function(){var e=_(this,"object");this.assert(null!==e&&void 0!==e,"expected #{this} to exist","expected #{this} to not exist")}),D.addProperty("empty",function(){var e,n=_(this,"object"),o=_(this,"ssfi"),r=_(this,"message");switch(r=r?r+": ":"",t.type(n).toLowerCase()){case"array":case"string":e=n.length;break;case"map":case"set":e=n.size;break;case"weakmap":case"weakset":throw new T(r+".empty was passed a weak collection",void 0,o);case"function":var i=r+".empty was passed a function "+t.getName(n);throw new T(i.trim(),void 0,o);default:if(n!==Object(n))throw new T(r+".empty was passed non-string primitive "+t.inspect(n),void 0,o);e=Object.keys(n).length}this.assert(0===e,"expected #{this} to be empty","expected #{this} not to be empty")}),D.addProperty("arguments",s),D.addProperty("Arguments",s),D.addMethod("equal",a),D.addMethod("equals",a),D.addMethod("eq",a),D.addMethod("eql",c),D.addMethod("eqls",c),D.addMethod("above",l),D.addMethod("gt",l),D.addMethod("greaterThan",l),D.addMethod("least",d),D.addMethod("gte",d),D.addMethod("below",u),D.addMethod("lt",u),D.addMethod("lessThan",u),D.addMethod("most",f),D.addMethod("lte",f),D.addMethod("within",function(e,n,o){o&&_(this,"message",o);var r=_(this,"object"),i=_(this,"doLength"),s=_(this,"message"),a=s?s+": ":"",c=_(this,"ssfi"),l=t.type(r).toLowerCase(),d=t.type(e).toLowerCase(),u=t.type(n).toLowerCase(),f=!0,h="date"===d&&"date"===u?e.toUTCString()+".."+n.toUTCString():e+".."+n;if(i&&new D(r,s,c,!0).to.have.property("length"),i||"date"!==l||"date"===d&&"date"===u)if("number"===d&&"number"===u||!i&&"number"!==l)if(i||"date"===l||"number"===l)f=!1;else{var p="string"===l?"'"+r+"'":r;errorMessage=a+"expected "+p+" to be a number or a date"}else errorMessage=a+"the arguments to within must be numbers";else errorMessage=a+"the arguments to within must be dates";if(f)throw new T(errorMessage,void 0,c);if(i){var m=r.length;this.assert(m>=e&&m<=n,"expected #{this} to have a length within "+h,"expected #{this} to not have a length within "+h)}else this.assert(r>=e&&r<=n,"expected #{this} to be within "+h,"expected #{this} to not be within "+h)}),D.addMethod("instanceof",h),D.addMethod("instanceOf",h),D.addMethod("property",p),D.addMethod("ownProperty",m),D.addMethod("haveOwnProperty",m),D.addMethod("ownPropertyDescriptor",b),D.addMethod("haveOwnPropertyDescriptor",b),D.addChainableMethod("length",w,y),D.addChainableMethod("lengthOf",w,y),D.addMethod("match",g),D.addMethod("matches",g),D.addMethod("string",function(e,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"message"),i=_(this,"ssfi");new D(o,r,i,!0).is.a("string"),this.assert(~o.indexOf(e),"expected #{this} to contain "+t.inspect(e),"expected #{this} to not contain "+t.inspect(e))}),D.addMethod("keys",v),D.addMethod("key",v),D.addMethod("throw",x),D.addMethod("throws",x),D.addMethod("Throw",x),D.addMethod("respondTo",k),D.addMethod("respondsTo",k),D.addProperty("itself",function(){_(this,"itself",!0)}),D.addMethod("satisfy",O),D.addMethod("satisfies",O),D.addMethod("closeTo",M),D.addMethod("approximately",M),D.addMethod("members",function(e,n){n&&_(this,"message",n);var o=_(this,"object"),r=_(this,"message"),i=_(this,"ssfi");new D(o,r,i,!0).to.be.an("array"),new D(e,r,i,!0).to.be.an("array");var s,a,c,l=_(this,"contains"),d=_(this,"ordered");l?(s=d?"an ordered superset":"a superset",a="expected #{this} to be "+s+" of #{exp}",c="expected #{this} to not be "+s+" of #{exp}"):(s=d?"ordered members":"members",a="expected #{this} to have the same "+s+" as #{exp}",c="expected #{this} to not have the same "+s+" as #{exp}");var u=_(this,"deep")?t.eql:void 0;this.assert(j(e,o,u,l,d),a,c,e,o,!0)}),D.addMethod("oneOf",P),D.addMethod("change",S),D.addMethod("changes",S),D.addMethod("increase",E),D.addMethod("increases",E),D.addMethod("decrease",N),D.addMethod("decreases",N),D.addMethod("by",A),D.addProperty("extensible",function(){var e=_(this,"object"),t=e===Object(e)&&Object.isExtensible(e);this.assert(t,"expected #{this} to be extensible","expected #{this} to not be extensible")}),D.addProperty("sealed",function(){var e=_(this,"object"),t=e!==Object(e)||Object.isSealed(e);this.assert(t,"expected #{this} to be sealed","expected #{this} to not be sealed")}),D.addProperty("frozen",function(){var e=_(this,"object"),t=e!==Object(e)||Object.isFrozen(e);this.assert(t,"expected #{this} to be frozen","expected #{this} to not be frozen")}),D.addProperty("finite",function(e){var t=_(this,"object");this.assert("number"==typeof t&&isFinite(t),"expected #{this} to be a finite number","expected #{this} to not be a finite number")})}},function(e,t){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){e.expect=function(t,n){return new e.Assertion(t,n)},e.expect.fail=function(t,n,o,r){throw o=o||"expect.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:r},e.expect.fail)}}},function(e,t){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){function n(){function t(){return this instanceof String||this instanceof Number||this instanceof Boolean||"function"==typeof Symbol&&this instanceof Symbol?new o(this.valueOf(),null,t):new o(this,null,t)}function n(e){Object.defineProperty(this,"should",{value:e,enumerable:!0,configurable:!0,writable:!0})}Object.defineProperty(Object.prototype,"should",{set:n,get:t,configurable:!0});var r={};return r.fail=function(t,n,o,i){throw o=o||"should.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:i},r.fail)},r.equal=function(e,t,n){new o(e,n).to.equal(t)},r.Throw=function(e,t,n,r){new o(e,r).to.Throw(t,n)},r.exist=function(e,t){new o(e,t).to.exist},r.not={},r.not.equal=function(e,t,n){new o(e,n).to.not.equal(t)},r.not.Throw=function(e,t,n,r){new o(e,r).to.not.Throw(t,n)},r.not.exist=function(e,t){new o(e,t).to.not.exist},r.throw=r.Throw,r.not.throw=r.not.Throw,r}var o=e.Assertion;e.should=n,e.Should=n}},function(e,t){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){/*!
   * Chai dependencies.
   */
var n=e.Assertion,o=t.flag,r=e.assert=function(t,o){new n(null,null,e.assert,!0).assert(t,o,"[ negation message unavailable ]")};r.fail=function(t,n,o,i){throw o=o||"assert.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:i},r.fail)},r.isOk=function(e,t){new n(e,t,r.isOk,!0).is.ok},r.isNotOk=function(e,t){new n(e,t,r.isNotOk,!0).is.not.ok},r.equal=function(e,t,i){var s=new n(e,i,r.equal,!0);s.assert(t==o(s,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",t,e,!0)},r.notEqual=function(e,t,i){var s=new n(e,i,r.notEqual,!0);s.assert(t!=o(s,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",t,e,!0)},r.strictEqual=function(e,t,o){new n(e,o,r.strictEqual,!0).to.equal(t)},r.notStrictEqual=function(e,t,o){new n(e,o,r.notStrictEqual,!0).to.not.equal(t)},r.deepEqual=r.deepStrictEqual=function(e,t,o){new n(e,o,r.deepEqual,!0).to.eql(t)},r.notDeepEqual=function(e,t,o){new n(e,o,r.notDeepEqual,!0).to.not.eql(t)},r.isAbove=function(e,t,o){new n(e,o,r.isAbove,!0).to.be.above(t)},r.isAtLeast=function(e,t,o){new n(e,o,r.isAtLeast,!0).to.be.least(t)},r.isBelow=function(e,t,o){new n(e,o,r.isBelow,!0).to.be.below(t)},r.isAtMost=function(e,t,o){new n(e,o,r.isAtMost,!0).to.be.most(t)},r.isTrue=function(e,t){new n(e,t,r.isTrue,!0).is.true},r.isNotTrue=function(e,t){new n(e,t,r.isNotTrue,!0).to.not.equal(!0)},r.isFalse=function(e,t){new n(e,t,r.isFalse,!0).is.false},r.isNotFalse=function(e,t){new n(e,t,r.isNotFalse,!0).to.not.equal(!1)},r.isNull=function(e,t){new n(e,t,r.isNull,!0).to.equal(null)},r.isNotNull=function(e,t){new n(e,t,r.isNotNull,!0).to.not.equal(null)},r.isNaN=function(e,t){new n(e,t,r.isNaN,!0).to.be.NaN},r.isNotNaN=function(e,t){new n(e,t,r.isNotNaN,!0).not.to.be.NaN},r.exists=function(e,t){new n(e,t,r.exists,!0).to.exist},r.notExists=function(e,t){new n(e,t,r.notExists,!0).to.not.exist},r.isUndefined=function(e,t){new n(e,t,r.isUndefined,!0).to.equal(void 0)},r.isDefined=function(e,t){new n(e,t,r.isDefined,!0).to.not.equal(void 0)},r.isFunction=function(e,t){new n(e,t,r.isFunction,!0).to.be.a("function")},r.isNotFunction=function(e,t){new n(e,t,r.isNotFunction,!0).to.not.be.a("function")},r.isObject=function(e,t){new n(e,t,r.isObject,!0).to.be.a("object")},r.isNotObject=function(e,t){new n(e,t,r.isNotObject,!0).to.not.be.a("object")},r.isArray=function(e,t){new n(e,t,r.isArray,!0).to.be.an("array")},r.isNotArray=function(e,t){new n(e,t,r.isNotArray,!0).to.not.be.an("array")},r.isString=function(e,t){new n(e,t,r.isString,!0).to.be.a("string")},r.isNotString=function(e,t){new n(e,t,r.isNotString,!0).to.not.be.a("string")},r.isNumber=function(e,t){new n(e,t,r.isNumber,!0).to.be.a("number")},r.isNotNumber=function(e,t){new n(e,t,r.isNotNumber,!0).to.not.be.a("number")},r.isFinite=function(e,t){new n(e,t,r.isFinite,!0).to.be.finite},r.isBoolean=function(e,t){new n(e,t,r.isBoolean,!0).to.be.a("boolean")},r.isNotBoolean=function(e,t){new n(e,t,r.isNotBoolean,!0).to.not.be.a("boolean")},r.typeOf=function(e,t,o){new n(e,o,r.typeOf,!0).to.be.a(t)},r.notTypeOf=function(e,t,o){new n(e,o,r.notTypeOf,!0).to.not.be.a(t)},r.instanceOf=function(e,t,o){new n(e,o,r.instanceOf,!0).to.be.instanceOf(t)},r.notInstanceOf=function(e,t,o){new n(e,o,r.notInstanceOf,!0).to.not.be.instanceOf(t)},r.include=function(e,t,o){new n(e,o,r.include,!0).include(t)},r.notInclude=function(e,t,o){new n(e,o,r.notInclude,!0).not.include(t)},r.deepInclude=function(e,t,o){new n(e,o,r.deepInclude,!0).deep.include(t)},r.notDeepInclude=function(e,t,o){new n(e,o,r.notDeepInclude,!0).not.deep.include(t)},r.nestedInclude=function(e,t,o){new n(e,o,r.nestedInclude,!0).nested.include(t)},r.notNestedInclude=function(e,t,o){new n(e,o,r.notNestedInclude,!0).not.nested.include(t)},r.deepNestedInclude=function(e,t,o){new n(e,o,r.deepNestedInclude,!0).deep.nested.include(t)},r.notDeepNestedInclude=function(e,t,o){new n(e,o,r.notDeepNestedInclude,!0).not.deep.nested.include(t)},r.ownInclude=function(e,t,o){new n(e,o,r.ownInclude,!0).own.include(t)},r.notOwnInclude=function(e,t,o){new n(e,o,r.notOwnInclude,!0).not.own.include(t)},r.deepOwnInclude=function(e,t,o){new n(e,o,r.deepOwnInclude,!0).deep.own.include(t)},r.notDeepOwnInclude=function(e,t,o){new n(e,o,r.notDeepOwnInclude,!0).not.deep.own.include(t)},r.match=function(e,t,o){new n(e,o,r.match,!0).to.match(t)},r.notMatch=function(e,t,o){new n(e,o,r.notMatch,!0).to.not.match(t)},r.property=function(e,t,o){new n(e,o,r.property,!0).to.have.property(t)},r.notProperty=function(e,t,o){new n(e,o,r.notProperty,!0).to.not.have.property(t)},r.propertyVal=function(e,t,o,i){new n(e,i,r.propertyVal,!0).to.have.property(t,o)},r.notPropertyVal=function(e,t,o,i){new n(e,i,r.notPropertyVal,!0).to.not.have.property(t,o)},r.deepPropertyVal=function(e,t,o,i){new n(e,i,r.deepPropertyVal,!0).to.have.deep.property(t,o)},r.notDeepPropertyVal=function(e,t,o,i){new n(e,i,r.notDeepPropertyVal,!0).to.not.have.deep.property(t,o)},r.ownProperty=function(e,t,o){new n(e,o,r.ownProperty,!0).to.have.own.property(t)},r.notOwnProperty=function(e,t,o){new n(e,o,r.notOwnProperty,!0).to.not.have.own.property(t)},r.ownPropertyVal=function(e,t,o,i){new n(e,i,r.ownPropertyVal,!0).to.have.own.property(t,o)},r.notOwnPropertyVal=function(e,t,o,i){new n(e,i,r.notOwnPropertyVal,!0).to.not.have.own.property(t,o)},r.deepOwnPropertyVal=function(e,t,o,i){new n(e,i,r.deepOwnPropertyVal,!0).to.have.deep.own.property(t,o)},r.notDeepOwnPropertyVal=function(e,t,o,i){new n(e,i,r.notDeepOwnPropertyVal,!0).to.not.have.deep.own.property(t,o)},r.nestedProperty=function(e,t,o){new n(e,o,r.nestedProperty,!0).to.have.nested.property(t)},r.notNestedProperty=function(e,t,o){new n(e,o,r.notNestedProperty,!0).to.not.have.nested.property(t)},r.nestedPropertyVal=function(e,t,o,i){new n(e,i,r.nestedPropertyVal,!0).to.have.nested.property(t,o)},r.notNestedPropertyVal=function(e,t,o,i){new n(e,i,r.notNestedPropertyVal,!0).to.not.have.nested.property(t,o)},r.deepNestedPropertyVal=function(e,t,o,i){new n(e,i,r.deepNestedPropertyVal,!0).to.have.deep.nested.property(t,o)},r.notDeepNestedPropertyVal=function(e,t,o,i){new n(e,i,r.notDeepNestedPropertyVal,!0).to.not.have.deep.nested.property(t,o)},r.lengthOf=function(e,t,o){new n(e,o,r.lengthOf,!0).to.have.lengthOf(t)},r.hasAnyKeys=function(e,t,o){new n(e,o,r.hasAnyKeys,!0).to.have.any.keys(t)},r.hasAllKeys=function(e,t,o){new n(e,o,r.hasAllKeys,!0).to.have.all.keys(t)},r.containsAllKeys=function(e,t,o){new n(e,o,r.containsAllKeys,!0).to.contain.all.keys(t)},r.doesNotHaveAnyKeys=function(e,t,o){new n(e,o,r.doesNotHaveAnyKeys,!0).to.not.have.any.keys(t)},r.doesNotHaveAllKeys=function(e,t,o){new n(e,o,r.doesNotHaveAllKeys,!0).to.not.have.all.keys(t)},r.hasAnyDeepKeys=function(e,t,o){new n(e,o,r.hasAnyDeepKeys,!0).to.have.any.deep.keys(t)},r.hasAllDeepKeys=function(e,t,o){new n(e,o,r.hasAllDeepKeys,!0).to.have.all.deep.keys(t)},r.containsAllDeepKeys=function(e,t,o){new n(e,o,r.containsAllDeepKeys,!0).to.contain.all.deep.keys(t)},r.doesNotHaveAnyDeepKeys=function(e,t,o){new n(e,o,r.doesNotHaveAnyDeepKeys,!0).to.not.have.any.deep.keys(t)},r.doesNotHaveAllDeepKeys=function(e,t,o){new n(e,o,r.doesNotHaveAllDeepKeys,!0).to.not.have.all.deep.keys(t)},r.throws=function(e,t,i,s){("string"==typeof t||t instanceof RegExp)&&(i=t,t=null);var a=new n(e,s,r.throws,!0).to.throw(t,i);return o(a,"object")},r.doesNotThrow=function(e,t,o,i){("string"==typeof t||t instanceof RegExp)&&(o=t,t=null),new n(e,i,r.doesNotThrow,!0).to.not.throw(t,o)},r.operator=function(i,s,a,c){var l;switch(s){case"==":l=i==a;break;case"===":l=i===a;break;case">":l=i>a;break;case">=":l=i>=a;break;case"<":l=i<a;break;case"<=":l=i<=a;break;case"!=":l=i!=a;break;case"!==":l=i!==a;break;default:throw c=c?c+": ":c,new e.AssertionError(c+'Invalid operator "'+s+'"',void 0,r.operator)}var d=new n(l,c,r.operator,!0);d.assert(!0===o(d,"object"),"expected "+t.inspect(i)+" to be "+s+" "+t.inspect(a),"expected "+t.inspect(i)+" to not be "+s+" "+t.inspect(a))},r.closeTo=function(e,t,o,i){new n(e,i,r.closeTo,!0).to.be.closeTo(t,o)},r.approximately=function(e,t,o,i){new n(e,i,r.approximately,!0).to.be.approximately(t,o)},r.sameMembers=function(e,t,o){new n(e,o,r.sameMembers,!0).to.have.same.members(t)},r.notSameMembers=function(e,t,o){new n(e,o,r.notSameMembers,!0).to.not.have.same.members(t)},r.sameDeepMembers=function(e,t,o){new n(e,o,r.sameDeepMembers,!0).to.have.same.deep.members(t)},r.notSameDeepMembers=function(e,t,o){new n(e,o,r.notSameDeepMembers,!0).to.not.have.same.deep.members(t)},r.sameOrderedMembers=function(e,t,o){new n(e,o,r.sameOrderedMembers,!0).to.have.same.ordered.members(t)},r.notSameOrderedMembers=function(e,t,o){new n(e,o,r.notSameOrderedMembers,!0).to.not.have.same.ordered.members(t)},r.sameDeepOrderedMembers=function(e,t,o){new n(e,o,r.sameDeepOrderedMembers,!0).to.have.same.deep.ordered.members(t)},r.notSameDeepOrderedMembers=function(e,t,o){new n(e,o,r.notSameDeepOrderedMembers,!0).to.not.have.same.deep.ordered.members(t)},r.includeMembers=function(e,t,o){new n(e,o,r.includeMembers,!0).to.include.members(t)},r.notIncludeMembers=function(e,t,o){new n(e,o,r.notIncludeMembers,!0).to.not.include.members(t)},r.includeDeepMembers=function(e,t,o){new n(e,o,r.includeDeepMembers,!0).to.include.deep.members(t)},r.notIncludeDeepMembers=function(e,t,o){new n(e,o,r.notIncludeDeepMembers,!0).to.not.include.deep.members(t)},r.includeOrderedMembers=function(e,t,o){new n(e,o,r.includeOrderedMembers,!0).to.include.ordered.members(t)},r.notIncludeOrderedMembers=function(e,t,o){new n(e,o,r.notIncludeOrderedMembers,!0).to.not.include.ordered.members(t)},r.includeDeepOrderedMembers=function(e,t,o){new n(e,o,r.includeDeepOrderedMembers,!0).to.include.deep.ordered.members(t)},r.notIncludeDeepOrderedMembers=function(e,t,o){new n(e,o,r.notIncludeDeepOrderedMembers,!0).to.not.include.deep.ordered.members(t)},r.oneOf=function(e,t,o){new n(e,o,r.oneOf,!0).to.be.oneOf(t)},r.changes=function(e,t,o,i){3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.changes,!0).to.change(t,o)},r.changesBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.changesBy,!0).to.change(t,o).by(i)},r.doesNotChange=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.doesNotChange,!0).to.not.change(t,o)},r.changesButNotBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.changesButNotBy,!0).to.change(t,o).but.not.by(i)},r.increases=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.increases,!0).to.increase(t,o)},r.increasesBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.increasesBy,!0).to.increase(t,o).by(i)},r.doesNotIncrease=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.doesNotIncrease,!0).to.not.increase(t,o)},r.increasesButNotBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.increasesButNotBy,!0).to.increase(t,o).but.not.by(i)},r.decreases=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.decreases,!0).to.decrease(t,o)},r.decreasesBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.decreasesBy,!0).to.decrease(t,o).by(i)},r.doesNotDecrease=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.doesNotDecrease,!0).to.not.decrease(t,o)},r.doesNotDecreaseBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);return new n(e,s,r.doesNotDecreaseBy,!0).to.not.decrease(t,o).by(i)},r.decreasesButNotBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.decreasesButNotBy,!0).to.decrease(t,o).but.not.by(i)},/*!
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
r.ifError=function(e){if(e)throw e},r.isExtensible=function(e,t){new n(e,t,r.isExtensible,!0).to.be.extensible},r.isNotExtensible=function(e,t){new n(e,t,r.isNotExtensible,!0).to.not.be.extensible},r.isSealed=function(e,t){new n(e,t,r.isSealed,!0).to.be.sealed},r.isNotSealed=function(e,t){new n(e,t,r.isNotSealed,!0).to.not.be.sealed},r.isFrozen=function(e,t){new n(e,t,r.isFrozen,!0).to.be.frozen},r.isNotFrozen=function(e,t){new n(e,t,r.isNotFrozen,!0).to.not.be.frozen},r.isEmpty=function(e,t){new n(e,t,r.isEmpty,!0).to.be.empty},r.isNotEmpty=function(e,t){new n(e,t,r.isNotEmpty,!0).to.not.be.empty},/*!
   * Aliases.
   */
function e(t,n){return r[n]=r[t],e}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")("isEmpty","empty")("isNotEmpty","notEmpty")}},function(e,t,n){"use strict";function o(){describe("Provider Embed Codes",function(){describe("#verify iframe src generation of all provider embeds",function(){for(var e=document.getElementById("testDIV"),t="",n="",o=0,s=r.embedCodes;o<s.length;o++){var a=s[o];!function(o){it("should generate "+o.id,function(){e.innerHTML='<div class="'+o.expect.param+'" id="'+o.expect.vid+'"></div>',video2day.run({debug:!0}),t=e.firstChild.firstChild.src,n=o.code.match(/src\s*=\s*"([^"]+)"/)[1],i.assert(t===n,"\n expected: "+n+"\ngenerated: "+t)})}(a)}})})}Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),i=n(17);t.testCases=o}]);