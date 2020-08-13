!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=74)}([,,function(e,t){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));if(3!==arguments.length)return o[t];o[t]=n}},,function(e,t,n){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=[];
/*!
 * Chai version
 */t.version="4.2.0",
/*!
 * Assertion Error
 */
t.AssertionError=n(18);
/*!
 * Utils for plugins (not exported)
 */
var r=n(76);t.use=function(e){return~o.indexOf(e)||(e(t,r),o.push(e)),t},
/*!
 * Utility Functions
 */
t.util=r;
/*!
 * Configuration
 */
var i=n(6);t.config=i;
/*!
 * Primary `Assertion` prototype
 */
var s=n(94);t.use(s);
/*!
 * Core Assertions
 */
var a=n(95);t.use(a);
/*!
 * Expect interface
 */
var c=n(96);t.use(c);
/*!
 * Should interface
 */
var l=n(97);t.use(l);
/*!
 * Assert interface
 */
var d=n(98);t.use(d)},function(e,t){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t,n){var o=e.__flags||(e.__flags=Object.create(null));for(var r in t.__flags||(t.__flags=Object.create(null)),n=3!==arguments.length||n,o)(n||"object"!==r&&"ssfi"!==r&&"lockSsfi"!==r&&"message"!=r)&&(t.__flags[r]=o[r])}},function(e,t){e.exports={includeStack:!1,showDiff:!0,truncateThreshold:40,useProxy:!0,proxyExcludedKeys:["then","catch","inspect","toJSON"]}},,function(e,t,n){var o=n(6);
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */e.exports=function(){return o.useProxy&&"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect}},function(e,t){var n=Object.getOwnPropertyDescriptor((function(){}),"length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */e.exports=function(e,t,o){return n.configurable?(Object.defineProperty(e,"length",{get:function(){if(o)throw Error("Invalid Chai property: "+t+'.length. Due to a compatibility issue, "length" cannot directly follow "'+t+'". Use "'+t+'.lengthOf" instead.');throw Error("Invalid Chai property: "+t+'.length. See docs for proper usage of "'+t+'".')}}),e):e}},function(e,t,n){var o=n(6),r=n(2),i=n(22),s=n(8),a=["__flags","__methods","_obj","assert"];e.exports=function(e,t){return s()?new Proxy(e,{get:function e(n,s){if("string"==typeof s&&-1===o.proxyExcludedKeys.indexOf(s)&&!Reflect.has(n,s)){if(t)throw Error("Invalid Chai property: "+t+"."+s+'. See docs for proper usage of "'+t+'".');var c=null,l=4;throw i(n).forEach((function(e){if(!Object.prototype.hasOwnProperty(e)&&-1===a.indexOf(e)){var t=function(e,t,n){if(Math.abs(e.length-t.length)>=n)return n;for(var o=[],r=0;r<=e.length;r++)o[r]=Array(t.length+1).fill(0),o[r][0]=r;for(var i=0;i<t.length;i++)o[0][i]=i;for(r=1;r<=e.length;r++){var s=e.charCodeAt(r-1);for(i=1;i<=t.length;i++)Math.abs(r-i)>=n?o[r][i]=n:o[r][i]=Math.min(o[r-1][i]+1,o[r][i-1]+1,o[r-1][i-1]+(s===t.charCodeAt(i-1)?0:1))}return o[e.length][t.length]}(s,e,l);t<l&&(c=e,l=t)}})),null!==c?Error("Invalid Chai property: "+s+'. Did you mean "'+c+'"?'):Error("Invalid Chai property: "+s)}return-1!==a.indexOf(s)||r(n,"lockSsfi")||r(n,"ssfi",e),Reflect.get(n,s)}}):e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.embedCodes=void 0,t.embedCodes=[{id:"Bandcamp Slim+show artwork",code:'<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=small/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=show/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-slim artwork-show"}},{id:"Bandcamp Slim+no artwork",code:'<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=small/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-slim artwork-none"}},{id:"Bandcamp Artwork only",code:'<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=big/minimal=true/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-artworkonly artwork-big width-350"}},{id:"Bandcamp Standard/no Artwork/no Tracklist",code:'<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-none"}},{id:"Bandcamp Standard/Artwork Big/no Tracklist",code:'<iframe style="border: 0; width: 100%; height: 312px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=big/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-big"}},{id:"Bandcamp Standard/Artwork Big/Tracklist",code:'<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=big/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-big tracklist width-350"}},{id:"Bandcamp Standard/Artwork Small/no Tracklist/Light Theme",code:'<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-small"}},{id:"Bandcamp Standard/Artwork Small/no Tracklist/Dark Theme",code:'<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-small bgcol-333333 linkcol-0f91ff"}},{id:"Bandcamp Standard/Artwork Small/Tracklist",code:'<iframe style="border: 0; width: 400px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=small/minimal=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',expect:{vid:"456865727",param:"html5video bandcamp layout-standard artwork-small tracklist width-400"}},{id:"Dailymotion/no starttime",code:'<iframe frameborder="0" width="480" height="270" src="https://www.dailymotion.com/embed/video/x44m1c5?start=" allowfullscreen></iframe><br /><a href="http://www.dailymotion.com/video/x44m1c5_1-004-the-architecture-of-an-angular-2-application_school" target="_blank">1- 004 The Architecture of an Angular 2...</a> <i>von <a href="http://www.dailymotion.com/tutstrainning" target="_blank">tutstrainning</a></i>',expect:{vid:"x44m1c5",param:"html5video dailymotion"}},{id:"Dailymotion/with starttime",code:'<iframe frameborder="0" width="560" height="315" src="https://www.dailymotion.com/embed/video/x4ik5tb?start=11" allowfullscreen></iframe><br /><a href="http://www.dailymotion.com/video/x4ik5tb_coldplay-glastonbury-2016-up-up-with-kids-live-full-version_music?start=11" target="_blank">Coldplay Glastonbury 2016 - Up &amp; Up - with Kids...</a> <i>von <a href="http://www.dailymotion.com/jon-chew" target="_blank">jon-chew</a></i>',expect:{vid:"x4ik5tb",param:"html5video dailymotion start-11"}},{id:"DCTP.tv/with starttime",code:'<iframe width="640" scrolling="no" height="360" frameborder="0" src="http://www.dctp.tv/filme/erdbeben-und-todeswelle/embed/?t=0m10s" name="dctp-embed" marginwidth="0" marginheight="0"><br></iframe>',expect:{vid:"erdbeben-und-todeswelle",param:"html5video dctptv start-10"}},{id:"Filmstarts",code:'<div id=\'blogvision\'>     <iframe src="http://www.filmstarts.de/_video/iblogvision.aspx?cmedia=19561243" style=\'width:480px; height:270px\'>     </iframe>     <br />     <a href="http://www.filmstarts.de/kritiken/204833.html" target="_blank">Zwischen zwei Leben - The Mountain Between Us</a>     <br/>     <a href="http://www.filmstarts.de/kritiken/204833/trailer/19561243.html"><strong>Zwischen zwei Leben - The Mountain Between Us</strong> Trailer DF</a>   </div>',expect:{vid:"19561243",param:"html5video filmstarts"}},{id:"FunnyOrDie",code:'<iframe src="https://www.funnyordie.com/embed/000a37c115" width="640" height="400" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>',expect:{vid:"000a37c115",param:"html5video funnyordie ratio-1.6"}},{id:"Giphy as iframe",code:'<iframe src="https://giphy.com/embed/5GoVLqeAOo6PK" width="480" height="375" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/excited-screaming-jonah-hill-5GoVLqeAOo6PK">via GIPHY</a></p>',expect:{vid:"5GoVLqeAOo6PK",param:"html5video giphy ratio-1.28"}},{id:"Giphy as image",code:'<iframe src="https://giphy.com/embed/5GoVLqeAOo6PK" width="480" height="375" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/excited-screaming-jonah-hill-5GoVLqeAOo6PK">via GIPHY</a></p>',expect:{vid:"5GoVLqeAOo6PK",param:"html5video giphy ratio-1.28"}},{id:"JsFiddle",code:'<iframe width="100%" height="300" src="https://jsfiddle.net/u93d2du8/embedded/js,html,css,result/dark/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>',expect:{vid:"u93d2du8",param:"html5video jsfiddle"}},{id:"Liveleak",code:'<iframe width="640" height="360" src="https://www.liveleak.com/e/kxA2P_1538160107&start=" frameborder="0" allowfullscreen></iframe>',expect:{vid:"kxA2P_1538160107",param:"html5video liveleak"}},{id:"Metacafe",code:'<iframe width="560" height="315" src="http://www.metacafe.com/embed/11603976/" frameborder="0" allowfullscreen></iframe>',expect:{vid:"11603976",param:"html5video metacafe"}},{id:"Slides/dark",code:'<iframe src="https://slid.es/news/custom-fonts/embed?style=dark" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',expect:{vid:"news/custom-fonts",param:"html5video slides ratio-1.37143"}},{id:"Slides/light",code:'<iframe src="https://slid.es/news/custom-fonts/embed?style=light" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',expect:{vid:"news/custom-fonts",param:"html5video slides color-light ratio-1.37143"}},{id:"Slideshare with slide",code:'<iframe src="https://www.slideshare.net/slideshow/embed_code/key/vYUBnUYL3JbBmP?startSlide=8" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MelissaPerri/the-build-trap-66849122" title="The Build Trap" target="_blank">The Build Trap</a> </strong> de <strong><a target="_blank" href="//www.slideshare.net/MelissaPerri">Melissa Perri</a></strong> </div>',expect:{vid:"vYUBnUYL3JbBmP",param:"html5video slideshare slide-8 ratio-1.2268"}},{id:"Soundcloud/stripe",code:'<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/249959694&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>',expect:{vid:"249959694",param:"html5video soundcloud stripe"}},{id:"Soundcloud/big/color",code:'<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/249959694&color=%23321c94&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>',expect:{vid:"249959694",param:"html5video soundcloud linkcol-321c94"}},{id:"Speakerdeck/no slide",code:'<iframe width="720" height="405" src="https://speakerdeck.com/player/4ab3c53d71fd4434a87934b8600888fb?slide=" frameborder="0" allowfullscreen=""></iframe>',expect:{vid:"4ab3c53d71fd4434a87934b8600888fb",param:"html5video speakerdeck"}},{id:"Speakerdeck with slide number",code:'<iframe width="720" height="405" src="https://speakerdeck.com/player/704d7f2694fa43559e0afc488a0c810c?slide=11" frameborder="0" allowfullscreen=""></iframe>',expect:{vid:"704d7f2694fa43559e0afc488a0c810c",param:"html5video speakerdeck slide-11"}},{id:"Strawpoll",code:'<iframe src="https://www.strawpoll.me/embed_1/14514733" style="width:680px;height:342px;border:0;">Loading poll...</iframe>',expect:{vid:"14514733",param:"html5video strawpoll"}},{id:"TED",code:'<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/sarah_corbett_activism_needs_introverts" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>',expect:{vid:"sarah_corbett_activism_needs_introverts",param:"html5video ted"}},{id:"TED with German subtitles",code:'<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/lang/de/paul_tasner_how_i_became_an_entrepreneur_at_66" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>',expect:{vid:"paul_tasner_how_i_became_an_entrepreneur_at_66",param:"html5video ted lang"}},{id:"Vevo",code:'<iframe width="640" height="360" src="https://embed.vevo.com/?isrc=GB1209700420" allowfullscreen=""></iframe>',expect:{vid:"GB1209700420",param:"html5video vevo"}},{id:"Vimeo/Standard",code:'<iframe src="https://player.vimeo.com/video/125947740" width="640" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/125947740">WILDERNESS</a> from <a href="https://vimeo.com/user10257701">Ivan Friedman - MAYA PICTURES</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',expect:{vid:"125947740",param:"html5video vimeo ratio-2.37037"}},{id:"Vimeo/Color",code:'<iframe src="https://player.vimeo.com/video/125947740?color=c9ff23" width="640" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',expect:{vid:"125947740",param:"html5video vimeo linkcol-c9ff23 ratio-2.37037"}},{id:"Vine",code:'<iframe src="https://vine.co/v/5XwKTtq777Q/embed/simple" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"><\/script>',expect:{vid:"5XwKTtq777Q",param:"html5video vine ratio-1"}},{id:"YouTube",code:'<iframe width="560" height="315" src="https://www.youtube.com/embed/DyfM7oLIlp0?start=&end=" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',expect:{vid:"DyfM7oLIlp0",param:"html5video youtube"}},{id:"YouTube/start",code:'<iframe width="560" height="315" src="https://www.youtube.com/embed/DyfM7oLIlp0?start=10&end=" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',expect:{vid:"DyfM7oLIlp0",param:"html5video youtube start-10"}}]},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ClassListPolyfill=void 0;var o=function(){function e(e){this.classList=[],"string"==typeof e?(String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),this.splitClasses(e)):this.copyClasses(e)}return e.prototype.splitClasses=function(e){this.classList=e.trim().toLowerCase().split(/\s+/)},e.prototype.copyClasses=function(e){for(var t=0;t<e.length;t++)this.classList.push(e.item(t))},e.prototype.contains=function(e){return this.classList.indexOf(e)>=0},e}();t.ClassListPolyfill=o},,function(e,t,n){(function(t){var n;n=function(){"use strict";var e="function"==typeof Promise,n="object"==typeof self?self:t,o="undefined"!=typeof Symbol,r="undefined"!=typeof Map,i="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,a="undefined"!=typeof WeakSet,c="undefined"!=typeof DataView,l=o&&void 0!==Symbol.iterator,d=o&&void 0!==Symbol.toStringTag,u=i&&"function"==typeof Set.prototype.entries,f=r&&"function"==typeof Map.prototype.entries,h=u&&Object.getPrototypeOf((new Set).entries()),p=f&&Object.getPrototypeOf((new Map).entries()),m=l&&"function"==typeof Array.prototype[Symbol.iterator],b=m&&Object.getPrototypeOf([][Symbol.iterator]()),y=l&&"function"==typeof String.prototype[Symbol.iterator],w=y&&Object.getPrototypeOf(""[Symbol.iterator]());return function(t){var o=typeof t;if("object"!==o)return o;if(null===t)return"null";if(t===n)return"global";if(Array.isArray(t)&&(!1===d||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var l=d&&t[Symbol.toStringTag];if("string"==typeof l)return l;var u=Object.getPrototypeOf(t);return u===RegExp.prototype?"RegExp":u===Date.prototype?"Date":e&&u===Promise.prototype?"Promise":i&&u===Set.prototype?"Set":r&&u===Map.prototype?"Map":a&&u===WeakSet.prototype?"WeakSet":s&&u===WeakMap.prototype?"WeakMap":c&&u===DataView.prototype?"DataView":r&&u===p?"Map Iterator":i&&u===h?"Set Iterator":m&&u===b?"Array Iterator":y&&u===w?"String Iterator":null===u?"Object":Object.prototype.toString.call(t).slice(8,-1)}},e.exports=n()}).call(this,n(79))},function(e,t,n){var o=n(21),r=n(22),i=n(82),s=n(6);e.exports=function(e,t,n,o){return a({showHidden:t,seen:[],stylize:function(e){return e}},e,void 0===n?2:n)};function a(e,n,p){if(n&&"function"==typeof n.inspect&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var m=n.inspect(p,e);return"string"!=typeof m&&(m=a(e,m,p)),m}var b,y=function(e,t){switch(typeof t){case"undefined":return e.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string");case"number":return 0===t&&1/t==-1/0?e.stylize("-0","number"):e.stylize(""+t,"number");case"boolean":return e.stylize(""+t,"boolean");case"symbol":return e.stylize(t.toString(),"symbol")}if(null===t)return e.stylize("null","null")}(e,n);if(y)return y;if(b=n,"object"==typeof HTMLElement?b instanceof HTMLElement:b&&"object"==typeof b&&"nodeType"in b&&1===b.nodeType&&"string"==typeof b.nodeName){if("outerHTML"in n)return n.outerHTML;try{if(document.xmlVersion)return(new XMLSerializer).serializeToString(n);var w=document.createElementNS("http://www.w3.org/1999/xhtml","_");w.appendChild(n.cloneNode(!1));var g=w.innerHTML.replace("><",">"+n.innerHTML+"<");return w.innerHTML="",g}catch(e){}}var v,x,k=i(n),O=e.showHidden?r(n):k;if(0===O.length||f(n)&&(1===O.length&&"stack"===O[0]||2===O.length&&"description"===O[0]&&"stack"===O[1])){if("function"==typeof n)return x=(v=o(n))?": "+v:"",e.stylize("[Function"+x+"]","special");if(d(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(u(n))return e.stylize(Date.prototype.toUTCString.call(n),"date");if(f(n))return c(n)}var j,M,P="",S=!1,E=!1,N=["{","}"];if("object"==typeof(j=n)&&/\w+Array]$/.test(h(j))&&(E=!0,N=["[","]"]),function(e){return Array.isArray(e)||"object"==typeof e&&"[object Array]"===h(e)}(n)&&(S=!0,N=["[","]"]),"function"==typeof n&&(P=" [Function"+(x=(v=o(n))?": "+v:"")+"]"),d(n)&&(P=" "+RegExp.prototype.toString.call(n)),u(n)&&(P=" "+Date.prototype.toUTCString.call(n)),f(n))return c(n);if(0===O.length&&(!S||0==n.length))return N[0]+P+N[1];if(p<0)return d(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special");if(e.seen.push(n),S)M=function(e,t,n,o,r){for(var i=[],s=0,a=t.length;s<a;++s)Object.prototype.hasOwnProperty.call(t,String(s))?i.push(l(e,t,n,o,String(s),!0)):i.push("");return r.forEach((function(r){r.match(/^\d+$/)||i.push(l(e,t,n,o,r,!0))})),i}(e,n,p,k,O);else{if(E)return function(e){for(var t="[ ",n=0;n<e.length;++n){if(t.length>=s.truncateThreshold-7){t+="...";break}t+=e[n]+", "}-1!==(t+=" ]").indexOf(",  ]")&&(t=t.replace(",  ]"," ]"));return t}(n);M=O.map((function(t){return l(e,n,p,k,t,S)}))}return e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return e+t.length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(M,P,N)}function c(e){return"["+Error.prototype.toString.call(e)+"]"}function l(e,t,n,o,r,i){var s,c,l=Object.getOwnPropertyDescriptor(t,r);if(l&&(l.get?c=l.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):l.set&&(c=e.stylize("[Setter]","special"))),o.indexOf(r)<0&&(s="["+r+"]"),c||(e.seen.indexOf(t[r])<0?(c=a(e,t[r],null===n?null:n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+c.split("\n").map((function(e){return"   "+e})).join("\n")):c=e.stylize("[Circular]","special")),void 0===s){if(i&&r.match(/^\d+$/))return c;(s=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+c}function d(e){return"object"==typeof e&&"[object RegExp]"===h(e)}function u(e){return"object"==typeof e&&"[object Date]"===h(e)}function f(e){return"object"==typeof e&&"[object Error]"===h(e)}function h(e){return Object.prototype.toString.call(e)}},function(e,t,n){e.exports=n(4)},function(e,t){
/*!
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
function n(){var e=[].slice.call(arguments);function t(t,n){Object.keys(n).forEach((function(o){~e.indexOf(o)||(t[o]=n[o])}))}return function(){for(var e=[].slice.call(arguments),n=0,o={};n<e.length;n++)t(o,e[n]);return o}}function o(e,t,r){var i=n("name","message","stack","constructor","toJSON")(t||{});for(var s in this.message=e||"Unspecified AssertionError",this.showDiff=!1,i)this[s]=i[s];if(r=r||o,Error.captureStackTrace)Error.captureStackTrace(this,r);else try{throw new Error}catch(e){this.stack=e.stack}}
/*!
 * Inherit from Error.prototype
 */
/*!
 * Primary Exports
 */
e.exports=o,o.prototype=Object.create(Error.prototype),
/*!
 * Statically set name
 */
o.prototype.name="AssertionError",
/*!
 * Ensure correct constructor
 */
o.prototype.constructor=o,o.prototype.toJSON=function(e){var t=n("constructor","toJSON","stack")({name:this.name},this);return!1!==e&&this.stack&&(t.stack=this.stack),t}},function(e,t){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){return t.length>4?t[4]:e._obj}},function(e,t,n){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(16),r=n(6);e.exports=function(e){var t=o(e),n=Object.prototype.toString.call(e);if(r.truncateThreshold&&t.length>=r.truncateThreshold){if("[object Function]"===n)return e.name&&""!==e.name?"[Function: "+e.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+e.length+") ]";if("[object Object]"===n){var i=Object.keys(e);return"{ Object ("+(i.length>2?i.splice(0,2).join(", ")+", ...":i.join(", "))+") }"}return t}return t}},function(e,t,n){"use strict";var o=Function.prototype.toString,r=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;e.exports=function(e){if("function"!=typeof e)return null;var t="";if(void 0===Function.prototype.name&&void 0===e.name){var n=o.call(e).match(r);n&&(t=n[1])}else t=e.name;return t}},function(e,t){
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){var t=Object.getOwnPropertyNames(e);function n(e){-1===t.indexOf(e)&&t.push(e)}for(var o=Object.getPrototypeOf(e);null!==o;)Object.getOwnPropertyNames(o).forEach(n),o=Object.getPrototypeOf(o);return t}},function(e,t){
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){return"function"!=typeof Object.getOwnPropertySymbols?[]:Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(75),r=n(99),i=n(11);describe("All classlist polyfill test cases",(function(){o.testCases()})),describe("All provider embed test cases",(function(){r.testCases()}));for(var s=document.getElementById("iframeBtns"),a="",c=0;c<i.embedCodes.length;c++)a+='<a class="btn" href="'+c+'">'+i.embedCodes[c].id+"</a>";s.innerHTML=a;var l=document.getElementById("testDIV"),d=document.getElementsByClassName("btn");Array.from(d).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=parseInt(this.attributes.href.nodeValue),n=i.embedCodes[t];l.innerHTML='<div class="'+n.expect.param+'" id="'+n.expect.vid+'"></div>',video2day.run({debug:!0})}))}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.testCases=void 0;var o=n(13),r=n(17);t.testCases=function(){describe("ClassListPolyfill",(function(){describe("#constructor",(function(){it("should manage a string as constructor input",(function(){var e=new o.ClassListPolyfill("one two three");r.assert.equal(e.classList.length,3)})),it("should manage a classList-property as constructor input",(function(){var e=document.getElementById("testDIV");e.innerHTML='<div class="html5video bandcamp layout-standard artwork-small tracklist bgcol-333333 linkcol-0f91ff"></div>';var t=e.firstChild.classList;r.assert.equal(t.length,7);var n=new o.ClassListPolyfill(t);r.assert.equal(n.classList.length,t.length)})),it("should trim string classes as constructor input",(function(){var e=new o.ClassListPolyfill("  six seven eight nine         ");r.assert.equal(e.classList.length,4)})),it("should lowercase string classes as constructor input",(function(){var e=new o.ClassListPolyfill("  TEn ElEvEn");r.assert.equal(e.classList.length,2),r.assert.ok(e.contains("ten")),r.assert.ok(e.contains("eleven"))}))})),describe('#property function "contains"',(function(){it("should confirm an available class",(function(){var e=new o.ClassListPolyfill("html5video bandcamp width-444");r.assert.isTrue(e.contains("html5video")),r.assert.isTrue(e.contains("bandcamp")),r.assert.isTrue(e.contains("width-444"))})),it("should not confirm a non-existent class",(function(){var e=new o.ClassListPolyfill("html5video bandcamp width-444");r.assert.isFalse(e.contains("nonexistentclass"))}))}))}))}},function(e,t,n){
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Dependencies that are used for multiple exports are required here only once
 */
var o=n(77);
/*!
 * test utility
 */t.test=n(78),
/*!
 * type utility
 */
t.type=n(15),
/*!
 * expectTypes utility
 */
t.expectTypes=n(80),
/*!
 * message utility
 */
t.getMessage=n(81),
/*!
 * actual utility
 */
t.getActual=n(19),
/*!
 * Inspect util
 */
t.inspect=n(16),
/*!
 * Object Display util
 */
t.objDisplay=n(20),
/*!
 * Flag utility
 */
t.flag=n(2),
/*!
 * Flag transferring utility
 */
t.transferFlags=n(5),
/*!
 * Deep equal utility
 */
t.eql=n(83),
/*!
 * Deep path info
 */
t.getPathInfo=o.getPathInfo,
/*!
 * Check if a property exists
 */
t.hasProperty=o.hasProperty,
/*!
 * Function name
 */
t.getName=n(21),
/*!
 * add Property
 */
t.addProperty=n(84),
/*!
 * add Method
 */
t.addMethod=n(85),
/*!
 * overwrite Property
 */
t.overwriteProperty=n(86),
/*!
 * overwrite Method
 */
t.overwriteMethod=n(87),
/*!
 * Add a chainable method
 */
t.addChainableMethod=n(88),
/*!
 * Overwrite chainable method
 */
t.overwriteChainableMethod=n(89),
/*!
 * Compare by inspect method
 */
t.compareByInspect=n(90),
/*!
 * Get own enumerable property symbols method
 */
t.getOwnEnumerablePropertySymbols=n(23),
/*!
 * Get own enumerable properties method
 */
t.getOwnEnumerableProperties=n(91),
/*!
 * Checks error against a given set of criteria
 */
t.checkError=n(92),
/*!
 * Proxify util
 */
t.proxify=n(10),
/*!
 * addLengthGuard util
 */
t.addLengthGuard=n(9),
/*!
 * isProxyEnabled helper
 */
t.isProxyEnabled=n(8),
/*!
 * isNaN method
 */
t.isNaN=n(93)},function(e,t,n){"use strict";function o(e,t){return null!=e&&t in Object(e)}function r(e){return e.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map((function(e){var t=/^\[(\d+)\]$/.exec(e);return t?{i:parseFloat(t[1])}:{p:e.replace(/\\([.\[\]])/g,"$1")}}))}function i(e,t,n){var o=e,r=null;n=void 0===n?t.length:n;for(var i=0;i<n;i++){var s=t[i];o&&(o=void 0===s.p?o[s.i]:o[s.p],i===n-1&&(r=o))}return r}function s(e,t){var n=r(t),s=n[n.length-1],a={parent:n.length>1?i(e,n,n.length-1):e,name:s.p||s.i,value:i(e,n)};return a.exists=o(a.parent,a.name),a}e.exports={hasProperty:o,getPathInfo:s,getPathValue:function(e,t){return s(e,t).value},setPathValue:function(e,t,n){return function(e,t,n){for(var o=e,r=n.length,i=null,s=0;s<r;s++){var a=null,c=null;if(i=n[s],s===r-1)o[a=void 0===i.p?i.i:i.p]=t;else if(void 0!==i.p&&o[i.p])o=o[i.p];else if(void 0!==i.i&&o[i.i])o=o[i.i];else{var l=n[s+1];a=void 0===i.p?i.i:i.p,c=void 0===l.p?[]:{},o[a]=c,o=o[a]}}}(e,n,r(t)),e}}},function(e,t,n){
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(2);e.exports=function(e,t){var n=o(e,"negate"),r=t[0];return n?!r:r}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(18),r=n(2),i=n(15);e.exports=function(e,t){var n=r(e,"message"),s=r(e,"ssfi");n=n?n+": ":"",e=r(e,"object"),(t=t.map((function(e){return e.toLowerCase()}))).sort();var a=t.map((function(e,n){var o=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an":"a";return(t.length>1&&n===t.length-1?"or ":"")+o+" "+e})).join(", "),c=i(e).toLowerCase();if(!t.some((function(e){return c===e})))throw new o(n+"object tested must be "+a+", but "+c+" given",void 0,s)}},function(e,t,n){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(2),r=n(19),i=n(20);e.exports=function(e,t){var n=o(e,"negate"),s=o(e,"object"),a=t[3],c=r(e,t),l=n?t[2]:t[1],d=o(e,"message");return"function"==typeof l&&(l=l()),l=(l=l||"").replace(/#\{this\}/g,(function(){return i(s)})).replace(/#\{act\}/g,(function(){return i(c)})).replace(/#\{exp\}/g,(function(){return i(a)})),d?d+": "+l:l}},function(e,t){
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e){var t=[];for(var n in e)t.push(n);return t}},function(e,t,n){"use strict";
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */var o=n(15);function r(){this._key="chai/deep-eql__"+Math.random()+Date.now()}r.prototype={get:function(e){return e[this._key]},set:function(e,t){Object.isExtensible(e)&&Object.defineProperty(e,this._key,{value:t,configurable:!0})}};var i="function"==typeof WeakMap?WeakMap:r;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function s(e,t,n){if(!n||b(e)||b(t))return null;var o=n.get(e);if(o){var r=o.get(t);if("boolean"==typeof r)return r}return null}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function a(e,t,n,o){if(n&&!b(e)&&!b(t)){var r=n.get(e);r?r.set(t,o):((r=new i).set(t,o),n.set(e,r))}}
/*!
 * Primary Export
 */function c(e,t,n){if(n&&n.comparator)return d(e,t,n);var o=l(e,t);return null!==o?o:d(e,t,n)}function l(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t||!b(e)&&!b(t)&&null}
/*!
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
*/function d(e,t,n){(n=n||{}).memoize=!1!==n.memoize&&(n.memoize||new i);var r=n&&n.comparator,d=s(e,t,n.memoize);if(null!==d)return d;var b=s(t,e,n.memoize);if(null!==b)return b;if(r){var y=r(e,t);if(!1===y||!0===y)return a(e,t,n.memoize,y),y;var w=l(e,t);if(null!==w)return w}var g=o(e);if(g!==o(t))return a(e,t,n.memoize,!1),!1;a(e,t,n.memoize,!0);var v=function(e,t,n,o){switch(n){case"String":case"Number":case"Boolean":case"Date":return c(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":case"Error":return e===t;case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return f(e,t,o);case"RegExp":
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
return function(e,t){return e.toString()===t.toString()}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */(e,t);case"Generator":
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(e,t,n){return f(p(e),p(t),n)}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */(e,t,o);case"DataView":return f(new Uint8Array(e.buffer),new Uint8Array(t.buffer),o);case"ArrayBuffer":return f(new Uint8Array(e),new Uint8Array(t),o);case"Set":case"Map":return u(e,t,o);default:
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(e,t,n){var o=m(e),r=m(t);if(o.length&&o.length===r.length)return o.sort(),r.sort(),!1!==f(o,r)&&
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function(e,t,n,o){var r=n.length;if(0===r)return!0;for(var i=0;i<r;i+=1)if(!1===c(e[n[i]],t[n[i]],o))return!1;return!0}(e,t,o,n);var i=h(e),s=h(t);if(i.length&&i.length===s.length)return i.sort(),s.sort(),f(i,s,n);if(0===o.length&&0===i.length&&0===r.length&&0===s.length)return!0;return!1}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */(e,t,o)}}(e,t,g,n);return a(e,t,n.memoize,v),v}function u(e,t,n){if(e.size!==t.size)return!1;if(0===e.size)return!0;var o=[],r=[];return e.forEach((function(e,t){o.push([e,t])})),t.forEach((function(e,t){r.push([e,t])})),f(o.sort(),r.sort(),n)}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function f(e,t,n){var o=e.length;if(o!==t.length)return!1;if(0===o)return!0;for(var r=-1;++r<o;)if(!1===c(e[r],t[r],n))return!1;return!0}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function h(e){if(function(e){return"undefined"!=typeof Symbol&&"object"==typeof e&&void 0!==Symbol.iterator&&"function"==typeof e[Symbol.iterator]}(e))try{return p(e[Symbol.iterator]())}catch(e){return[]}return[]}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function p(e){for(var t=e.next(),n=[t.value];!1===t.done;)t=e.next(),n.push(t.value);return n}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function m(e){var t=[];for(var n in e)t.push(n);return t}function b(e){return null===e||"object"!=typeof e}e.exports=c,e.exports.MemoizeMap=i},function(e,t,n){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(4),r=n(2),i=n(8),s=n(5);e.exports=function(e,t,n){n=void 0===n?function(){}:n,Object.defineProperty(e,t,{get:function e(){i()||r(this,"lockSsfi")||r(this,"ssfi",e);var t=n.call(this);if(void 0!==t)return t;var a=new o.Assertion;return s(this,a),a},configurable:!0})}},function(e,t,n){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(9),r=n(4),i=n(2),s=n(10),a=n(5);e.exports=function(e,t,n){var c=function(){i(this,"lockSsfi")||i(this,"ssfi",c);var e=n.apply(this,arguments);if(void 0!==e)return e;var t=new r.Assertion;return a(this,t),t};o(c,t,!1),e[t]=s(c,t)}},function(e,t,n){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(4),r=n(2),i=n(8),s=n(5);e.exports=function(e,t,n){var a=Object.getOwnPropertyDescriptor(e,t),c=function(){};a&&"function"==typeof a.get&&(c=a.get),Object.defineProperty(e,t,{get:function e(){i()||r(this,"lockSsfi")||r(this,"ssfi",e);var t=r(this,"lockSsfi");r(this,"lockSsfi",!0);var a=n(c).call(this);if(r(this,"lockSsfi",t),void 0!==a)return a;var l=new o.Assertion;return s(this,l),l},configurable:!0})}},function(e,t,n){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(9),r=n(4),i=n(2),s=n(10),a=n(5);e.exports=function(e,t,n){var c=e[t],l=function(){throw new Error(t+" is not a function")};c&&"function"==typeof c&&(l=c);var d=function(){i(this,"lockSsfi")||i(this,"ssfi",d);var e=i(this,"lockSsfi");i(this,"lockSsfi",!0);var t=n(l).apply(this,arguments);if(i(this,"lockSsfi",e),void 0!==t)return t;var o=new r.Assertion;return a(this,o),o};o(d,t,!1),e[t]=s(d,t)}},function(e,t,n){
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(9),r=n(4),i=n(2),s=n(10),a=n(5),c="function"==typeof Object.setPrototypeOf,l=function(){},d=Object.getOwnPropertyNames(l).filter((function(e){var t=Object.getOwnPropertyDescriptor(l,e);return"object"!=typeof t||!t.configurable})),u=Function.prototype.call,f=Function.prototype.apply;e.exports=function(e,t,n,l){"function"!=typeof l&&(l=function(){});var h={method:n,chainingBehavior:l};e.__methods||(e.__methods={}),e.__methods[t]=h,Object.defineProperty(e,t,{get:function(){h.chainingBehavior.call(this);var n=function(){i(this,"lockSsfi")||i(this,"ssfi",n);var e=h.method.apply(this,arguments);if(void 0!==e)return e;var t=new r.Assertion;return a(this,t),t};if(o(n,t,!0),c){var l=Object.create(this);l.call=u,l.apply=f,Object.setPrototypeOf(n,l)}else{Object.getOwnPropertyNames(e).forEach((function(t){if(-1===d.indexOf(t)){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,o)}}))}return a(this,n),s(n)},configurable:!0})}},function(e,t,n){
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(4),r=n(5);e.exports=function(e,t,n,i){var s=e.__methods[t],a=s.chainingBehavior;s.chainingBehavior=function(){var e=i(a).call(this);if(void 0!==e)return e;var t=new o.Assertion;return r(this,t),t};var c=s.method;s.method=function(){var e=n(c).apply(this,arguments);if(void 0!==e)return e;var t=new o.Assertion;return r(this,t),t}}},function(e,t,n){
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(16);e.exports=function(e,t){return o(e)<o(t)?-1:1}},function(e,t,n){
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var o=n(23);e.exports=function(e){return Object.keys(e).concat(o(e))}},function(e,t,n){"use strict";var o=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;function r(e){var t="";if(void 0===e.name){var n=String(e).match(o);n&&(t=n[1])}else t=e.name;return t}e.exports={compatibleInstance:function(e,t){return t instanceof Error&&e===t},compatibleConstructor:function(e,t){return t instanceof Error?e.constructor===t.constructor||e instanceof t.constructor:(t.prototype instanceof Error||t===Error)&&(e.constructor===t||e instanceof t)},compatibleMessage:function(e,t){var n="string"==typeof e?e:e.message;return t instanceof RegExp?t.test(n):"string"==typeof t&&-1!==n.indexOf(t)},getMessage:function(e){var t="";return e&&e.message?t=e.message:"string"==typeof e&&(t=e),t},getConstructorName:function(e){var t=e;return e instanceof Error?t=r(e.constructor):"function"==typeof e&&(t=r(e).trim()||r(new e)),t}}},function(e,t){e.exports=Number.isNaN||
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function(e){return e!=e}},function(e,t,n){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var o=n(6);e.exports=function(e,t){
/*!
   * Module dependencies.
   */
var n=e.AssertionError,r=t.flag;
/*!
   * Module export.
   */
/*!
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
function i(e,n,o,s){return r(this,"ssfi",o||i),r(this,"lockSsfi",s),r(this,"object",e),r(this,"message",n),t.proxify(this)}e.Assertion=i,Object.defineProperty(i,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack},set:function(e){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),o.includeStack=e}}),Object.defineProperty(i,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff},set:function(e){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),o.showDiff=e}}),i.addProperty=function(e,n){t.addProperty(this.prototype,e,n)},i.addMethod=function(e,n){t.addMethod(this.prototype,e,n)},i.addChainableMethod=function(e,n,o){t.addChainableMethod(this.prototype,e,n,o)},i.overwriteProperty=function(e,n){t.overwriteProperty(this.prototype,e,n)},i.overwriteMethod=function(e,n){t.overwriteMethod(this.prototype,e,n)},i.overwriteChainableMethod=function(e,n,o){t.overwriteChainableMethod(this.prototype,e,n,o)},i.prototype.assert=function(e,i,s,a,c,l){var d=t.test(this,arguments);if(!1!==l&&(l=!0),void 0===a&&void 0===c&&(l=!1),!0!==o.showDiff&&(l=!1),!d){i=t.getMessage(this,arguments);var u=t.getActual(this,arguments);throw new n(i,{actual:u,expected:a,showDiff:l},o.includeStack?this.assert:r(this,"ssfi"))}},
/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(i.prototype,"_obj",{get:function(){return r(this,"object")},set:function(e){r(this,"object",e)}})}},function(e,t){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){var n=e.Assertion,o=e.AssertionError,r=t.flag;function i(e,n){n&&r(this,"message",n),e=e.toLowerCase();var o=r(this,"object"),i=~["a","e","i","o","u"].indexOf(e.charAt(0))?"an ":"a ";this.assert(e===t.type(o).toLowerCase(),"expected #{this} to be "+i+e,"expected #{this} not to be "+i+e)}function s(e,n){return t.isNaN(e)&&t.isNaN(n)||e===n}function a(){r(this,"contains",!0)}function c(e,i){i&&r(this,"message",i);var a=r(this,"object"),c=t.type(a).toLowerCase(),l=r(this,"message"),d=r(this,"negate"),u=r(this,"ssfi"),f=r(this,"deep"),h=f?"deep ":"";l=l?l+": ":"";var p=!1;switch(c){case"string":p=-1!==a.indexOf(e);break;case"weakset":if(f)throw new o(l+"unable to use .deep.include with WeakSet",void 0,u);p=a.has(e);break;case"map":var m=f?t.eql:s;a.forEach((function(t){p=p||m(t,e)}));break;case"set":f?a.forEach((function(n){p=p||t.eql(n,e)})):p=a.has(e);break;case"array":p=f?a.some((function(n){return t.eql(n,e)})):-1!==a.indexOf(e);break;default:if(e!==Object(e))throw new o(l+"object tested must be an array, a map, an object, a set, a string, or a weakset, but "+c+" given",void 0,u);var b=Object.keys(e),y=null,w=0;if(b.forEach((function(i){var s=new n(a);if(t.transferFlags(this,s,!0),r(s,"lockSsfi",!0),d&&1!==b.length)try{s.property(i,e[i])}catch(e){if(!t.checkError.compatibleConstructor(e,o))throw e;null===y&&(y=e),w++}else s.property(i,e[i])}),this),d&&b.length>1&&w===b.length)throw y;return}this.assert(p,"expected #{this} to "+h+"include "+t.inspect(e),"expected #{this} to not "+h+"include "+t.inspect(e))}function l(){var e=r(this,"object"),n=t.type(e);this.assert("Arguments"===n,"expected #{this} to be arguments but got "+n,"expected #{this} to not be arguments")}function d(e,t){t&&r(this,"message",t);var n=r(this,"object");if(r(this,"deep")){var o=r(this,"lockSsfi");r(this,"lockSsfi",!0),this.eql(e),r(this,"lockSsfi",o)}else this.assert(e===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",e,this._obj,!0)}function u(e,n){n&&r(this,"message",n),this.assert(t.eql(e,r(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",e,this._obj,!0)}function f(e,i){i&&r(this,"message",i);var s,a=r(this,"object"),c=r(this,"doLength"),l=r(this,"message"),d=l?l+": ":"",u=r(this,"ssfi"),f=t.type(a).toLowerCase(),h=t.type(e).toLowerCase(),p=!0;if(c&&"map"!==f&&"set"!==f&&new n(a,l,u,!0).to.have.property("length"),c||"date"!==f||"date"===h)if("number"===h||!c&&"number"!==f)if(c||"date"===f||"number"===f)p=!1;else{s=d+"expected "+("string"===f?"'"+a+"'":a)+" to be a number or a date"}else s=d+"the argument to above must be a number";else s=d+"the argument to above must be a date";if(p)throw new o(s,void 0,u);if(c){var m,b="length";"map"===f||"set"===f?(b="size",m=a.size):m=a.length,this.assert(m>e,"expected #{this} to have a "+b+" above #{exp} but got #{act}","expected #{this} to not have a "+b+" above #{exp}",e,m)}else this.assert(a>e,"expected #{this} to be above #{exp}","expected #{this} to be at most #{exp}",e)}function h(e,i){i&&r(this,"message",i);var s,a=r(this,"object"),c=r(this,"doLength"),l=r(this,"message"),d=l?l+": ":"",u=r(this,"ssfi"),f=t.type(a).toLowerCase(),h=t.type(e).toLowerCase(),p=!0;if(c&&"map"!==f&&"set"!==f&&new n(a,l,u,!0).to.have.property("length"),c||"date"!==f||"date"===h)if("number"===h||!c&&"number"!==f)if(c||"date"===f||"number"===f)p=!1;else{s=d+"expected "+("string"===f?"'"+a+"'":a)+" to be a number or a date"}else s=d+"the argument to least must be a number";else s=d+"the argument to least must be a date";if(p)throw new o(s,void 0,u);if(c){var m,b="length";"map"===f||"set"===f?(b="size",m=a.size):m=a.length,this.assert(m>=e,"expected #{this} to have a "+b+" at least #{exp} but got #{act}","expected #{this} to have a "+b+" below #{exp}",e,m)}else this.assert(a>=e,"expected #{this} to be at least #{exp}","expected #{this} to be below #{exp}",e)}function p(e,i){i&&r(this,"message",i);var s,a=r(this,"object"),c=r(this,"doLength"),l=r(this,"message"),d=l?l+": ":"",u=r(this,"ssfi"),f=t.type(a).toLowerCase(),h=t.type(e).toLowerCase(),p=!0;if(c&&"map"!==f&&"set"!==f&&new n(a,l,u,!0).to.have.property("length"),c||"date"!==f||"date"===h)if("number"===h||!c&&"number"!==f)if(c||"date"===f||"number"===f)p=!1;else{s=d+"expected "+("string"===f?"'"+a+"'":a)+" to be a number or a date"}else s=d+"the argument to below must be a number";else s=d+"the argument to below must be a date";if(p)throw new o(s,void 0,u);if(c){var m,b="length";"map"===f||"set"===f?(b="size",m=a.size):m=a.length,this.assert(m<e,"expected #{this} to have a "+b+" below #{exp} but got #{act}","expected #{this} to not have a "+b+" below #{exp}",e,m)}else this.assert(a<e,"expected #{this} to be below #{exp}","expected #{this} to be at least #{exp}",e)}function m(e,i){i&&r(this,"message",i);var s,a=r(this,"object"),c=r(this,"doLength"),l=r(this,"message"),d=l?l+": ":"",u=r(this,"ssfi"),f=t.type(a).toLowerCase(),h=t.type(e).toLowerCase(),p=!0;if(c&&"map"!==f&&"set"!==f&&new n(a,l,u,!0).to.have.property("length"),c||"date"!==f||"date"===h)if("number"===h||!c&&"number"!==f)if(c||"date"===f||"number"===f)p=!1;else{s=d+"expected "+("string"===f?"'"+a+"'":a)+" to be a number or a date"}else s=d+"the argument to most must be a number";else s=d+"the argument to most must be a date";if(p)throw new o(s,void 0,u);if(c){var m,b="length";"map"===f||"set"===f?(b="size",m=a.size):m=a.length,this.assert(m<=e,"expected #{this} to have a "+b+" at most #{exp} but got #{act}","expected #{this} to have a "+b+" above #{exp}",e,m)}else this.assert(a<=e,"expected #{this} to be at most #{exp}","expected #{this} to be above #{exp}",e)}function b(e,n){n&&r(this,"message",n);var i=r(this,"object"),s=r(this,"ssfi"),a=r(this,"message");try{var c=i instanceof e}catch(n){if(n instanceof TypeError)throw new o((a=a?a+": ":"")+"The instanceof assertion needs a constructor but "+t.type(e)+" was given.",void 0,s);throw n}var l=t.getName(e);null===l&&(l="an unnamed constructor"),this.assert(c,"expected #{this} to be an instance of "+l,"expected #{this} to not be an instance of "+l)}function y(e,n,i){i&&r(this,"message",i);var s=r(this,"nested"),a=r(this,"own"),c=r(this,"message"),l=r(this,"object"),d=r(this,"ssfi"),u=typeof e;if(c=c?c+": ":"",s){if("string"!==u)throw new o(c+"the argument to property must be a string when using nested syntax",void 0,d)}else if("string"!==u&&"number"!==u&&"symbol"!==u)throw new o(c+"the argument to property must be a string, number, or symbol",void 0,d);if(s&&a)throw new o(c+'The "nested" and "own" flags cannot be combined.',void 0,d);if(null==l)throw new o(c+"Target cannot be null or undefined.",void 0,d);var f,h=r(this,"deep"),p=r(this,"negate"),m=s?t.getPathInfo(l,e):null,b=s?m.value:l[e],y="";h&&(y+="deep "),a&&(y+="own "),s&&(y+="nested "),y+="property ",f=a?Object.prototype.hasOwnProperty.call(l,e):s?m.exists:t.hasProperty(l,e),p&&1!==arguments.length||this.assert(f,"expected #{this} to have "+y+t.inspect(e),"expected #{this} to not have "+y+t.inspect(e)),arguments.length>1&&this.assert(f&&(h?t.eql(n,b):n===b),"expected #{this} to have "+y+t.inspect(e)+" of #{exp}, but got #{act}","expected #{this} to not have "+y+t.inspect(e)+" of #{act}",n,b),r(this,"object",b)}function w(e,t,n){r(this,"own",!0),y.apply(this,arguments)}function g(e,n,o){"string"==typeof n&&(o=n,n=null),o&&r(this,"message",o);var i=r(this,"object"),s=Object.getOwnPropertyDescriptor(Object(i),e);s&&n?this.assert(t.eql(n,s),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to match "+t.inspect(n)+", got "+t.inspect(s),"expected the own property descriptor for "+t.inspect(e)+" on #{this} to not match "+t.inspect(n),n,s,!0):this.assert(s,"expected #{this} to have an own property descriptor for "+t.inspect(e),"expected #{this} to not have an own property descriptor for "+t.inspect(e)),r(this,"object",s)}function v(){r(this,"doLength",!0)}function x(e,o){o&&r(this,"message",o);var i,s=r(this,"object"),a=t.type(s).toLowerCase(),c=r(this,"message"),l=r(this,"ssfi"),d="length";switch(a){case"map":case"set":d="size",i=s.size;break;default:new n(s,c,l,!0).to.have.property("length"),i=s.length}this.assert(i==e,"expected #{this} to have a "+d+" of #{exp} but got #{act}","expected #{this} to not have a "+d+" of #{act}",e,i)}function k(e,t){t&&r(this,"message",t);var n=r(this,"object");this.assert(e.exec(n),"expected #{this} to match "+e,"expected #{this} not to match "+e)}function O(e){var n,i,s=r(this,"object"),a=t.type(s),c=t.type(e),l=r(this,"ssfi"),d=r(this,"deep"),u="",f=!0,h=r(this,"message"),p=(h=h?h+": ":"")+"when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";if("Map"===a||"Set"===a)u=d?"deeply ":"",i=[],s.forEach((function(e,t){i.push(t)})),"Array"!==c&&(e=Array.prototype.slice.call(arguments));else{switch(i=t.getOwnEnumerableProperties(s),c){case"Array":if(arguments.length>1)throw new o(p,void 0,l);break;case"Object":if(arguments.length>1)throw new o(p,void 0,l);e=Object.keys(e);break;default:e=Array.prototype.slice.call(arguments)}e=e.map((function(e){return"symbol"==typeof e?e:String(e)}))}if(!e.length)throw new o(h+"keys required",void 0,l);var m=e.length,b=r(this,"any"),y=r(this,"all"),w=e;if(b||y||(y=!0),b&&(f=w.some((function(e){return i.some((function(n){return d?t.eql(e,n):e===n}))}))),y&&(f=w.every((function(e){return i.some((function(n){return d?t.eql(e,n):e===n}))})),r(this,"contains")||(f=f&&e.length==i.length)),m>1){var g=(e=e.map((function(e){return t.inspect(e)}))).pop();y&&(n=e.join(", ")+", and "+g),b&&(n=e.join(", ")+", or "+g)}else n=t.inspect(e[0]);n=(m>1?"keys ":"key ")+n,n=(r(this,"contains")?"contain ":"have ")+n,this.assert(f,"expected #{this} to "+u+n,"expected #{this} to not "+u+n,w.slice(0).sort(t.compareByInspect),i.sort(t.compareByInspect),!0)}function j(e,o,i){i&&r(this,"message",i);var s,a=r(this,"object"),c=r(this,"ssfi"),l=r(this,"message"),d=r(this,"negate")||!1;new n(a,l,c,!0).is.a("function"),(e instanceof RegExp||"string"==typeof e)&&(o=e,e=null);try{a()}catch(e){s=e}var u=void 0===e&&void 0===o,f=Boolean(e&&o),h=!1,p=!1;if(u||!u&&!d){var m="an error";e instanceof Error?m="#{exp}":e&&(m=t.checkError.getConstructorName(e)),this.assert(s,"expected #{this} to throw "+m,"expected #{this} to not throw an error but #{act} was thrown",e&&e.toString(),s instanceof Error?s.toString():"string"==typeof s?s:s&&t.checkError.getConstructorName(s))}if(e&&s){if(e instanceof Error)t.checkError.compatibleInstance(s,e)===d&&(f&&d?h=!0:this.assert(d,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(s&&!d?" but #{act} was thrown":""),e.toString(),s.toString()));t.checkError.compatibleConstructor(s,e)===d&&(f&&d?h=!0:this.assert(d,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(s?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&t.checkError.getConstructorName(e),s instanceof Error?s.toString():s&&t.checkError.getConstructorName(s)))}if(s&&null!=o){var b="including";o instanceof RegExp&&(b="matching"),t.checkError.compatibleMessage(s,o)===d&&(f&&d?p=!0:this.assert(d,"expected #{this} to throw error "+b+" #{exp} but got #{act}","expected #{this} to throw error not "+b+" #{exp}",o,t.checkError.getMessage(s)))}h&&p&&this.assert(d,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(s?" but #{act} was thrown":""),e instanceof Error?e.toString():e&&t.checkError.getConstructorName(e),s instanceof Error?s.toString():s&&t.checkError.getConstructorName(s)),r(this,"object",s)}function M(e,n){n&&r(this,"message",n);var o=r(this,"object"),i=r(this,"itself"),s="function"!=typeof o||i?o[e]:o.prototype[e];this.assert("function"==typeof s,"expected #{this} to respond to "+t.inspect(e),"expected #{this} to not respond to "+t.inspect(e))}function P(e,n){n&&r(this,"message",n);var o=e(r(this,"object"));this.assert(o,"expected #{this} to satisfy "+t.objDisplay(e),"expected #{this} to not satisfy"+t.objDisplay(e),!r(this,"negate"),o)}function S(e,t,i){i&&r(this,"message",i);var s=r(this,"object"),a=r(this,"message"),c=r(this,"ssfi");if(new n(s,a,c,!0).is.a("number"),"number"!=typeof e||"number"!=typeof t)throw new o((a=a?a+": ":"")+"the arguments to closeTo or approximately must be numbers",void 0,c);this.assert(Math.abs(s-e)<=t,"expected #{this} to be close to "+e+" +/- "+t,"expected #{this} not to be close to "+e+" +/- "+t)}function E(e,t,o){o&&r(this,"message",o);var i,s=r(this,"object"),a=r(this,"message"),c=r(this,"ssfi");new n(s,a,c,!0).is.a("function"),t?(new n(e,a,c,!0).to.have.property(t),i=e[t]):(new n(e,a,c,!0).is.a("function"),i=e()),s();var l=null==t?e():e[t],d=null==t?i:"."+t;r(this,"deltaMsgObj",d),r(this,"initialDeltaValue",i),r(this,"finalDeltaValue",l),r(this,"deltaBehavior","change"),r(this,"realDelta",l!==i),this.assert(i!==l,"expected "+d+" to change","expected "+d+" to not change")}function N(e,t,o){o&&r(this,"message",o);var i,s=r(this,"object"),a=r(this,"message"),c=r(this,"ssfi");new n(s,a,c,!0).is.a("function"),t?(new n(e,a,c,!0).to.have.property(t),i=e[t]):(new n(e,a,c,!0).is.a("function"),i=e()),new n(i,a,c,!0).is.a("number"),s();var l=null==t?e():e[t],d=null==t?i:"."+t;r(this,"deltaMsgObj",d),r(this,"initialDeltaValue",i),r(this,"finalDeltaValue",l),r(this,"deltaBehavior","increase"),r(this,"realDelta",l-i),this.assert(l-i>0,"expected "+d+" to increase","expected "+d+" to not increase")}function A(e,t,o){o&&r(this,"message",o);var i,s=r(this,"object"),a=r(this,"message"),c=r(this,"ssfi");new n(s,a,c,!0).is.a("function"),t?(new n(e,a,c,!0).to.have.property(t),i=e[t]):(new n(e,a,c,!0).is.a("function"),i=e()),new n(i,a,c,!0).is.a("number"),s();var l=null==t?e():e[t],d=null==t?i:"."+t;r(this,"deltaMsgObj",d),r(this,"initialDeltaValue",i),r(this,"finalDeltaValue",l),r(this,"deltaBehavior","decrease"),r(this,"realDelta",i-l),this.assert(l-i<0,"expected "+d+" to decrease","expected "+d+" to not decrease")}["to","be","been","is","and","has","have","with","that","which","at","of","same","but","does","still"].forEach((function(e){n.addProperty(e)})),n.addProperty("not",(function(){r(this,"negate",!0)})),n.addProperty("deep",(function(){r(this,"deep",!0)})),n.addProperty("nested",(function(){r(this,"nested",!0)})),n.addProperty("own",(function(){r(this,"own",!0)})),n.addProperty("ordered",(function(){r(this,"ordered",!0)})),n.addProperty("any",(function(){r(this,"any",!0),r(this,"all",!1)})),n.addProperty("all",(function(){r(this,"all",!0),r(this,"any",!1)})),n.addChainableMethod("an",i),n.addChainableMethod("a",i),n.addChainableMethod("include",c,a),n.addChainableMethod("contain",c,a),n.addChainableMethod("contains",c,a),n.addChainableMethod("includes",c,a),n.addProperty("ok",(function(){this.assert(r(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")})),n.addProperty("true",(function(){this.assert(!0===r(this,"object"),"expected #{this} to be true","expected #{this} to be false",!r(this,"negate"))})),n.addProperty("false",(function(){this.assert(!1===r(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!r(this,"negate"))})),n.addProperty("null",(function(){this.assert(null===r(this,"object"),"expected #{this} to be null","expected #{this} not to be null")})),n.addProperty("undefined",(function(){this.assert(void 0===r(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")})),n.addProperty("NaN",(function(){this.assert(t.isNaN(r(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")})),n.addProperty("exist",(function(){var e=r(this,"object");this.assert(null!=e,"expected #{this} to exist","expected #{this} to not exist")})),n.addProperty("empty",(function(){var e,n=r(this,"object"),i=r(this,"ssfi"),s=r(this,"message");switch(s=s?s+": ":"",t.type(n).toLowerCase()){case"array":case"string":e=n.length;break;case"map":case"set":e=n.size;break;case"weakmap":case"weakset":throw new o(s+".empty was passed a weak collection",void 0,i);case"function":var a=s+".empty was passed a function "+t.getName(n);throw new o(a.trim(),void 0,i);default:if(n!==Object(n))throw new o(s+".empty was passed non-string primitive "+t.inspect(n),void 0,i);e=Object.keys(n).length}this.assert(0===e,"expected #{this} to be empty","expected #{this} not to be empty")})),n.addProperty("arguments",l),n.addProperty("Arguments",l),n.addMethod("equal",d),n.addMethod("equals",d),n.addMethod("eq",d),n.addMethod("eql",u),n.addMethod("eqls",u),n.addMethod("above",f),n.addMethod("gt",f),n.addMethod("greaterThan",f),n.addMethod("least",h),n.addMethod("gte",h),n.addMethod("below",p),n.addMethod("lt",p),n.addMethod("lessThan",p),n.addMethod("most",m),n.addMethod("lte",m),n.addMethod("within",(function(e,i,s){s&&r(this,"message",s);var a,c=r(this,"object"),l=r(this,"doLength"),d=r(this,"message"),u=d?d+": ":"",f=r(this,"ssfi"),h=t.type(c).toLowerCase(),p=t.type(e).toLowerCase(),m=t.type(i).toLowerCase(),b=!0,y="date"===p&&"date"===m?e.toUTCString()+".."+i.toUTCString():e+".."+i;if(l&&"map"!==h&&"set"!==h&&new n(c,d,f,!0).to.have.property("length"),l||"date"!==h||"date"===p&&"date"===m)if("number"===p&&"number"===m||!l&&"number"!==h)if(l||"date"===h||"number"===h)b=!1;else{a=u+"expected "+("string"===h?"'"+c+"'":c)+" to be a number or a date"}else a=u+"the arguments to within must be numbers";else a=u+"the arguments to within must be dates";if(b)throw new o(a,void 0,f);if(l){var w,g="length";"map"===h||"set"===h?(g="size",w=c.size):w=c.length,this.assert(w>=e&&w<=i,"expected #{this} to have a "+g+" within "+y,"expected #{this} to not have a "+g+" within "+y)}else this.assert(c>=e&&c<=i,"expected #{this} to be within "+y,"expected #{this} to not be within "+y)})),n.addMethod("instanceof",b),n.addMethod("instanceOf",b),n.addMethod("property",y),n.addMethod("ownProperty",w),n.addMethod("haveOwnProperty",w),n.addMethod("ownPropertyDescriptor",g),n.addMethod("haveOwnPropertyDescriptor",g),n.addChainableMethod("length",x,v),n.addChainableMethod("lengthOf",x,v),n.addMethod("match",k),n.addMethod("matches",k),n.addMethod("string",(function(e,o){o&&r(this,"message",o);var i=r(this,"object"),s=r(this,"message"),a=r(this,"ssfi");new n(i,s,a,!0).is.a("string"),this.assert(~i.indexOf(e),"expected #{this} to contain "+t.inspect(e),"expected #{this} to not contain "+t.inspect(e))})),n.addMethod("keys",O),n.addMethod("key",O),n.addMethod("throw",j),n.addMethod("throws",j),n.addMethod("Throw",j),n.addMethod("respondTo",M),n.addMethod("respondsTo",M),n.addProperty("itself",(function(){r(this,"itself",!0)})),n.addMethod("satisfy",P),n.addMethod("satisfies",P),n.addMethod("closeTo",S),n.addMethod("approximately",S),n.addMethod("members",(function(e,o){o&&r(this,"message",o);var i=r(this,"object"),s=r(this,"message"),a=r(this,"ssfi");new n(i,s,a,!0).to.be.an("array"),new n(e,s,a,!0).to.be.an("array");var c,l,d,u=r(this,"contains"),f=r(this,"ordered");u?(l="expected #{this} to be "+(c=f?"an ordered superset":"a superset")+" of #{exp}",d="expected #{this} to not be "+c+" of #{exp}"):(l="expected #{this} to have the same "+(c=f?"ordered members":"members")+" as #{exp}",d="expected #{this} to not have the same "+c+" as #{exp}");var h=r(this,"deep")?t.eql:void 0;this.assert(function(e,t,n,o,r){if(!o){if(e.length!==t.length)return!1;t=t.slice()}return e.every((function(e,i){if(r)return n?n(e,t[i]):e===t[i];if(!n){var s=t.indexOf(e);return-1!==s&&(o||t.splice(s,1),!0)}return t.some((function(r,i){return!!n(e,r)&&(o||t.splice(i,1),!0)}))}))}(e,i,h,u,f),l,d,e,i,!0)})),n.addMethod("oneOf",(function(e,t){t&&r(this,"message",t);var o=r(this,"object"),i=r(this,"message"),s=r(this,"ssfi");new n(e,i,s,!0).to.be.an("array"),this.assert(e.indexOf(o)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",e,o)})),n.addMethod("change",E),n.addMethod("changes",E),n.addMethod("increase",N),n.addMethod("increases",N),n.addMethod("decrease",A),n.addMethod("decreases",A),n.addMethod("by",(function(e,t){t&&r(this,"message",t);var n,o=r(this,"deltaMsgObj"),i=r(this,"initialDeltaValue"),s=r(this,"finalDeltaValue"),a=r(this,"deltaBehavior"),c=r(this,"realDelta");n="change"===a?Math.abs(s-i)===Math.abs(e):c===Math.abs(e),this.assert(n,"expected "+o+" to "+a+" by "+e,"expected "+o+" to not "+a+" by "+e)})),n.addProperty("extensible",(function(){var e=r(this,"object"),t=e===Object(e)&&Object.isExtensible(e);this.assert(t,"expected #{this} to be extensible","expected #{this} to not be extensible")})),n.addProperty("sealed",(function(){var e=r(this,"object"),t=e!==Object(e)||Object.isSealed(e);this.assert(t,"expected #{this} to be sealed","expected #{this} to not be sealed")})),n.addProperty("frozen",(function(){var e=r(this,"object"),t=e!==Object(e)||Object.isFrozen(e);this.assert(t,"expected #{this} to be frozen","expected #{this} to not be frozen")})),n.addProperty("finite",(function(e){var t=r(this,"object");this.assert("number"==typeof t&&isFinite(t),"expected #{this} to be a finite number","expected #{this} to not be a finite number")}))}},function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){e.expect=function(t,n){return new e.Assertion(t,n)},e.expect.fail=function(t,n,o,r){throw arguments.length<2&&(o=t,t=void 0),o=o||"expect.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:r},e.expect.fail)}}},function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){var n=e.Assertion;function o(){Object.defineProperty(Object.prototype,"should",{set:function(e){Object.defineProperty(this,"should",{value:e,enumerable:!0,configurable:!0,writable:!0})},get:function e(){return this instanceof String||this instanceof Number||this instanceof Boolean||"function"==typeof Symbol&&this instanceof Symbol?new n(this.valueOf(),null,e):new n(this,null,e)},configurable:!0});var t={fail:function(n,o,r,i){throw arguments.length<2&&(r=n,n=void 0),r=r||"should.fail()",new e.AssertionError(r,{actual:n,expected:o,operator:i},t.fail)},equal:function(e,t,o){new n(e,o).to.equal(t)},Throw:function(e,t,o,r){new n(e,r).to.Throw(t,o)},exist:function(e,t){new n(e,t).to.exist},not:{}};return t.not.equal=function(e,t,o){new n(e,o).to.not.equal(t)},t.not.Throw=function(e,t,o,r){new n(e,r).to.not.Throw(t,o)},t.not.exist=function(e,t){new n(e,t).to.not.exist},t.throw=t.Throw,t.not.throw=t.not.Throw,t}e.should=o,e.Should=o}},function(e,t){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
e.exports=function(e,t){
/*!
   * Chai dependencies.
   */
var n=e.Assertion,o=t.flag,r=e.assert=function(t,o){new n(null,null,e.assert,!0).assert(t,o,"[ negation message unavailable ]")};
/*!
   * Module export.
   */r.fail=function(t,n,o,i){throw arguments.length<2&&(o=t,t=void 0),o=o||"assert.fail()",new e.AssertionError(o,{actual:t,expected:n,operator:i},r.fail)},r.isOk=function(e,t){new n(e,t,r.isOk,!0).is.ok},r.isNotOk=function(e,t){new n(e,t,r.isNotOk,!0).is.not.ok},r.equal=function(e,t,i){var s=new n(e,i,r.equal,!0);s.assert(t==o(s,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",t,e,!0)},r.notEqual=function(e,t,i){var s=new n(e,i,r.notEqual,!0);s.assert(t!=o(s,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",t,e,!0)},r.strictEqual=function(e,t,o){new n(e,o,r.strictEqual,!0).to.equal(t)},r.notStrictEqual=function(e,t,o){new n(e,o,r.notStrictEqual,!0).to.not.equal(t)},r.deepEqual=r.deepStrictEqual=function(e,t,o){new n(e,o,r.deepEqual,!0).to.eql(t)},r.notDeepEqual=function(e,t,o){new n(e,o,r.notDeepEqual,!0).to.not.eql(t)},r.isAbove=function(e,t,o){new n(e,o,r.isAbove,!0).to.be.above(t)},r.isAtLeast=function(e,t,o){new n(e,o,r.isAtLeast,!0).to.be.least(t)},r.isBelow=function(e,t,o){new n(e,o,r.isBelow,!0).to.be.below(t)},r.isAtMost=function(e,t,o){new n(e,o,r.isAtMost,!0).to.be.most(t)},r.isTrue=function(e,t){new n(e,t,r.isTrue,!0).is.true},r.isNotTrue=function(e,t){new n(e,t,r.isNotTrue,!0).to.not.equal(!0)},r.isFalse=function(e,t){new n(e,t,r.isFalse,!0).is.false},r.isNotFalse=function(e,t){new n(e,t,r.isNotFalse,!0).to.not.equal(!1)},r.isNull=function(e,t){new n(e,t,r.isNull,!0).to.equal(null)},r.isNotNull=function(e,t){new n(e,t,r.isNotNull,!0).to.not.equal(null)},r.isNaN=function(e,t){new n(e,t,r.isNaN,!0).to.be.NaN},r.isNotNaN=function(e,t){new n(e,t,r.isNotNaN,!0).not.to.be.NaN},r.exists=function(e,t){new n(e,t,r.exists,!0).to.exist},r.notExists=function(e,t){new n(e,t,r.notExists,!0).to.not.exist},r.isUndefined=function(e,t){new n(e,t,r.isUndefined,!0).to.equal(void 0)},r.isDefined=function(e,t){new n(e,t,r.isDefined,!0).to.not.equal(void 0)},r.isFunction=function(e,t){new n(e,t,r.isFunction,!0).to.be.a("function")},r.isNotFunction=function(e,t){new n(e,t,r.isNotFunction,!0).to.not.be.a("function")},r.isObject=function(e,t){new n(e,t,r.isObject,!0).to.be.a("object")},r.isNotObject=function(e,t){new n(e,t,r.isNotObject,!0).to.not.be.a("object")},r.isArray=function(e,t){new n(e,t,r.isArray,!0).to.be.an("array")},r.isNotArray=function(e,t){new n(e,t,r.isNotArray,!0).to.not.be.an("array")},r.isString=function(e,t){new n(e,t,r.isString,!0).to.be.a("string")},r.isNotString=function(e,t){new n(e,t,r.isNotString,!0).to.not.be.a("string")},r.isNumber=function(e,t){new n(e,t,r.isNumber,!0).to.be.a("number")},r.isNotNumber=function(e,t){new n(e,t,r.isNotNumber,!0).to.not.be.a("number")},r.isFinite=function(e,t){new n(e,t,r.isFinite,!0).to.be.finite},r.isBoolean=function(e,t){new n(e,t,r.isBoolean,!0).to.be.a("boolean")},r.isNotBoolean=function(e,t){new n(e,t,r.isNotBoolean,!0).to.not.be.a("boolean")},r.typeOf=function(e,t,o){new n(e,o,r.typeOf,!0).to.be.a(t)},r.notTypeOf=function(e,t,o){new n(e,o,r.notTypeOf,!0).to.not.be.a(t)},r.instanceOf=function(e,t,o){new n(e,o,r.instanceOf,!0).to.be.instanceOf(t)},r.notInstanceOf=function(e,t,o){new n(e,o,r.notInstanceOf,!0).to.not.be.instanceOf(t)},r.include=function(e,t,o){new n(e,o,r.include,!0).include(t)},r.notInclude=function(e,t,o){new n(e,o,r.notInclude,!0).not.include(t)},r.deepInclude=function(e,t,o){new n(e,o,r.deepInclude,!0).deep.include(t)},r.notDeepInclude=function(e,t,o){new n(e,o,r.notDeepInclude,!0).not.deep.include(t)},r.nestedInclude=function(e,t,o){new n(e,o,r.nestedInclude,!0).nested.include(t)},r.notNestedInclude=function(e,t,o){new n(e,o,r.notNestedInclude,!0).not.nested.include(t)},r.deepNestedInclude=function(e,t,o){new n(e,o,r.deepNestedInclude,!0).deep.nested.include(t)},r.notDeepNestedInclude=function(e,t,o){new n(e,o,r.notDeepNestedInclude,!0).not.deep.nested.include(t)},r.ownInclude=function(e,t,o){new n(e,o,r.ownInclude,!0).own.include(t)},r.notOwnInclude=function(e,t,o){new n(e,o,r.notOwnInclude,!0).not.own.include(t)},r.deepOwnInclude=function(e,t,o){new n(e,o,r.deepOwnInclude,!0).deep.own.include(t)},r.notDeepOwnInclude=function(e,t,o){new n(e,o,r.notDeepOwnInclude,!0).not.deep.own.include(t)},r.match=function(e,t,o){new n(e,o,r.match,!0).to.match(t)},r.notMatch=function(e,t,o){new n(e,o,r.notMatch,!0).to.not.match(t)},r.property=function(e,t,o){new n(e,o,r.property,!0).to.have.property(t)},r.notProperty=function(e,t,o){new n(e,o,r.notProperty,!0).to.not.have.property(t)},r.propertyVal=function(e,t,o,i){new n(e,i,r.propertyVal,!0).to.have.property(t,o)},r.notPropertyVal=function(e,t,o,i){new n(e,i,r.notPropertyVal,!0).to.not.have.property(t,o)},r.deepPropertyVal=function(e,t,o,i){new n(e,i,r.deepPropertyVal,!0).to.have.deep.property(t,o)},r.notDeepPropertyVal=function(e,t,o,i){new n(e,i,r.notDeepPropertyVal,!0).to.not.have.deep.property(t,o)},r.ownProperty=function(e,t,o){new n(e,o,r.ownProperty,!0).to.have.own.property(t)},r.notOwnProperty=function(e,t,o){new n(e,o,r.notOwnProperty,!0).to.not.have.own.property(t)},r.ownPropertyVal=function(e,t,o,i){new n(e,i,r.ownPropertyVal,!0).to.have.own.property(t,o)},r.notOwnPropertyVal=function(e,t,o,i){new n(e,i,r.notOwnPropertyVal,!0).to.not.have.own.property(t,o)},r.deepOwnPropertyVal=function(e,t,o,i){new n(e,i,r.deepOwnPropertyVal,!0).to.have.deep.own.property(t,o)},r.notDeepOwnPropertyVal=function(e,t,o,i){new n(e,i,r.notDeepOwnPropertyVal,!0).to.not.have.deep.own.property(t,o)},r.nestedProperty=function(e,t,o){new n(e,o,r.nestedProperty,!0).to.have.nested.property(t)},r.notNestedProperty=function(e,t,o){new n(e,o,r.notNestedProperty,!0).to.not.have.nested.property(t)},r.nestedPropertyVal=function(e,t,o,i){new n(e,i,r.nestedPropertyVal,!0).to.have.nested.property(t,o)},r.notNestedPropertyVal=function(e,t,o,i){new n(e,i,r.notNestedPropertyVal,!0).to.not.have.nested.property(t,o)},r.deepNestedPropertyVal=function(e,t,o,i){new n(e,i,r.deepNestedPropertyVal,!0).to.have.deep.nested.property(t,o)},r.notDeepNestedPropertyVal=function(e,t,o,i){new n(e,i,r.notDeepNestedPropertyVal,!0).to.not.have.deep.nested.property(t,o)},r.lengthOf=function(e,t,o){new n(e,o,r.lengthOf,!0).to.have.lengthOf(t)},r.hasAnyKeys=function(e,t,o){new n(e,o,r.hasAnyKeys,!0).to.have.any.keys(t)},r.hasAllKeys=function(e,t,o){new n(e,o,r.hasAllKeys,!0).to.have.all.keys(t)},r.containsAllKeys=function(e,t,o){new n(e,o,r.containsAllKeys,!0).to.contain.all.keys(t)},r.doesNotHaveAnyKeys=function(e,t,o){new n(e,o,r.doesNotHaveAnyKeys,!0).to.not.have.any.keys(t)},r.doesNotHaveAllKeys=function(e,t,o){new n(e,o,r.doesNotHaveAllKeys,!0).to.not.have.all.keys(t)},r.hasAnyDeepKeys=function(e,t,o){new n(e,o,r.hasAnyDeepKeys,!0).to.have.any.deep.keys(t)},r.hasAllDeepKeys=function(e,t,o){new n(e,o,r.hasAllDeepKeys,!0).to.have.all.deep.keys(t)},r.containsAllDeepKeys=function(e,t,o){new n(e,o,r.containsAllDeepKeys,!0).to.contain.all.deep.keys(t)},r.doesNotHaveAnyDeepKeys=function(e,t,o){new n(e,o,r.doesNotHaveAnyDeepKeys,!0).to.not.have.any.deep.keys(t)},r.doesNotHaveAllDeepKeys=function(e,t,o){new n(e,o,r.doesNotHaveAllDeepKeys,!0).to.not.have.all.deep.keys(t)},r.throws=function(e,t,i,s){("string"==typeof t||t instanceof RegExp)&&(i=t,t=null);var a=new n(e,s,r.throws,!0).to.throw(t,i);return o(a,"object")},r.doesNotThrow=function(e,t,o,i){("string"==typeof t||t instanceof RegExp)&&(o=t,t=null),new n(e,i,r.doesNotThrow,!0).to.not.throw(t,o)},r.operator=function(i,s,a,c){var l;switch(s){case"==":l=i==a;break;case"===":l=i===a;break;case">":l=i>a;break;case">=":l=i>=a;break;case"<":l=i<a;break;case"<=":l=i<=a;break;case"!=":l=i!=a;break;case"!==":l=i!==a;break;default:throw c=c?c+": ":c,new e.AssertionError(c+'Invalid operator "'+s+'"',void 0,r.operator)}var d=new n(l,c,r.operator,!0);d.assert(!0===o(d,"object"),"expected "+t.inspect(i)+" to be "+s+" "+t.inspect(a),"expected "+t.inspect(i)+" to not be "+s+" "+t.inspect(a))},r.closeTo=function(e,t,o,i){new n(e,i,r.closeTo,!0).to.be.closeTo(t,o)},r.approximately=function(e,t,o,i){new n(e,i,r.approximately,!0).to.be.approximately(t,o)},r.sameMembers=function(e,t,o){new n(e,o,r.sameMembers,!0).to.have.same.members(t)},r.notSameMembers=function(e,t,o){new n(e,o,r.notSameMembers,!0).to.not.have.same.members(t)},r.sameDeepMembers=function(e,t,o){new n(e,o,r.sameDeepMembers,!0).to.have.same.deep.members(t)},r.notSameDeepMembers=function(e,t,o){new n(e,o,r.notSameDeepMembers,!0).to.not.have.same.deep.members(t)},r.sameOrderedMembers=function(e,t,o){new n(e,o,r.sameOrderedMembers,!0).to.have.same.ordered.members(t)},r.notSameOrderedMembers=function(e,t,o){new n(e,o,r.notSameOrderedMembers,!0).to.not.have.same.ordered.members(t)},r.sameDeepOrderedMembers=function(e,t,o){new n(e,o,r.sameDeepOrderedMembers,!0).to.have.same.deep.ordered.members(t)},r.notSameDeepOrderedMembers=function(e,t,o){new n(e,o,r.notSameDeepOrderedMembers,!0).to.not.have.same.deep.ordered.members(t)},r.includeMembers=function(e,t,o){new n(e,o,r.includeMembers,!0).to.include.members(t)},r.notIncludeMembers=function(e,t,o){new n(e,o,r.notIncludeMembers,!0).to.not.include.members(t)},r.includeDeepMembers=function(e,t,o){new n(e,o,r.includeDeepMembers,!0).to.include.deep.members(t)},r.notIncludeDeepMembers=function(e,t,o){new n(e,o,r.notIncludeDeepMembers,!0).to.not.include.deep.members(t)},r.includeOrderedMembers=function(e,t,o){new n(e,o,r.includeOrderedMembers,!0).to.include.ordered.members(t)},r.notIncludeOrderedMembers=function(e,t,o){new n(e,o,r.notIncludeOrderedMembers,!0).to.not.include.ordered.members(t)},r.includeDeepOrderedMembers=function(e,t,o){new n(e,o,r.includeDeepOrderedMembers,!0).to.include.deep.ordered.members(t)},r.notIncludeDeepOrderedMembers=function(e,t,o){new n(e,o,r.notIncludeDeepOrderedMembers,!0).to.not.include.deep.ordered.members(t)},r.oneOf=function(e,t,o){new n(e,o,r.oneOf,!0).to.be.oneOf(t)},r.changes=function(e,t,o,i){3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.changes,!0).to.change(t,o)},r.changesBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.changesBy,!0).to.change(t,o).by(i)},r.doesNotChange=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.doesNotChange,!0).to.not.change(t,o)},r.changesButNotBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.changesButNotBy,!0).to.change(t,o).but.not.by(i)},r.increases=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.increases,!0).to.increase(t,o)},r.increasesBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.increasesBy,!0).to.increase(t,o).by(i)},r.doesNotIncrease=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.doesNotIncrease,!0).to.not.increase(t,o)},r.increasesButNotBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.increasesButNotBy,!0).to.increase(t,o).but.not.by(i)},r.decreases=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.decreases,!0).to.decrease(t,o)},r.decreasesBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.decreasesBy,!0).to.decrease(t,o).by(i)},r.doesNotDecrease=function(e,t,o,i){return 3===arguments.length&&"function"==typeof t&&(i=o,o=null),new n(e,i,r.doesNotDecrease,!0).to.not.decrease(t,o)},r.doesNotDecreaseBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);return new n(e,s,r.doesNotDecreaseBy,!0).to.not.decrease(t,o).by(i)},r.decreasesButNotBy=function(e,t,o,i,s){if(4===arguments.length&&"function"==typeof t){var a=i;i=o,s=a}else 3===arguments.length&&(i=o,o=null);new n(e,s,r.decreasesButNotBy,!0).to.decrease(t,o).but.not.by(i)}
/*!
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
   */,r.ifError=function(e){if(e)throw e},r.isExtensible=function(e,t){new n(e,t,r.isExtensible,!0).to.be.extensible},r.isNotExtensible=function(e,t){new n(e,t,r.isNotExtensible,!0).to.not.be.extensible},r.isSealed=function(e,t){new n(e,t,r.isSealed,!0).to.be.sealed},r.isNotSealed=function(e,t){new n(e,t,r.isNotSealed,!0).to.not.be.sealed},r.isFrozen=function(e,t){new n(e,t,r.isFrozen,!0).to.be.frozen},r.isNotFrozen=function(e,t){new n(e,t,r.isNotFrozen,!0).to.not.be.frozen},r.isEmpty=function(e,t){new n(e,t,r.isEmpty,!0).to.be.empty},r.isNotEmpty=function(e,t){new n(e,t,r.isNotEmpty,!0).to.not.be.empty},
/*!
   * Aliases.
   */
function e(t,n){return r[n]=r[t],e}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")("isEmpty","empty")("isNotEmpty","notEmpty")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.testCases=void 0;var o=n(11),r=n(17);t.testCases=function(){describe("Provider Embed Codes",(function(){describe("#verify iframe src generation of all provider embeds",(function(){for(var e=document.getElementById("testDIV"),t="",n="",i=function(o){it("should generate "+o.id,(function(){e.innerHTML='<div class="'+o.expect.param+'" id="'+o.expect.vid+'"></div>',video2day.run({debug:!0}),t=e.firstChild.firstChild.src,n=o.code.match(/src\s*=\s*"([^"]+)"/)[1],r.assert(t===n,"\n expected: "+n+"\ngenerated: "+t)}))},s=0,a=o.embedCodes;s<a.length;s++){i(a[s])}}))}))}}]);