(()=>{var t={3219:(t,e,o)=>{"use strict";o.d(e,{Z:()=>a});var r=o(8081),i=o.n(r),n=o(3645),s=o.n(n)()(i());s.push([t.id,".hint {\n  font-size: 12px;\n  text-align: justify;\n}\n.imgProvider {\n  position: absolute;\n  top: 4px;\n  left: 19px;\n  width: 29px;\n  height: 29px;\n}\n.pad6 {\n  padding-top: 6px;\n}\nlegend i {\n  margin-right: 4px;\n}\n#optProvider {\n  padding-left: 40px;\n}\n#txtIframe {\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n#txtPixel,\n#txtRatio {\n  display: inline-block;\n  width: 123px;\n  margin-right: 5px;\n}\n.postfix.jscolor {\n  cursor: pointer;\n  margin-left: -1px;\n  border-color: #ccc;\n  outline: none;\n  padding: 0;\n}\n.snippet-wrap pre.sh_sourceCode {\n  white-space: pre-wrap;\n}\n.tiny.radius {\n  outline: none;\n}\n",""]);const a=s},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",r=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),r&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),r&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,r,i,n){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);r&&s[p[0]]||(void 0!==n&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=n),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},8081:t=>{"use strict";t.exports=function(t){return t[1]}},7298:t=>{
/*! load-script2. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
t.exports=function(t,e,o){return new Promise(((r,i)=>{const n=document.createElement("script");n.async=!0,n.src=t;for(const[t,o]of Object.entries(e||{}))n.setAttribute(t,o);n.onload=()=>{n.onerror=n.onload=null,r(n)},n.onerror=()=>{n.onerror=n.onload=null,i(new Error(`Failed to load ${t}`))};(o||document.head||document.getElementsByTagName("head")[0]).appendChild(n)}))}},7114:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>y});var r=o(3379),i=o.n(r),n=o(7795),s=o.n(n),a=o(569),l=o.n(a),c=o(3565),p=o.n(c),u=o(9216),h=o.n(u),d=o(4589),f=o.n(d),v=o(3219),m={};m.styleTagTransform=f(),m.setAttributes=p(),m.insert=l().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=h();i()(v.Z,m);const y=v.Z&&v.Z.locals?v.Z.locals:void 0},3379:t=>{"use strict";var e=[];function o(t){for(var o=-1,r=0;r<e.length;r++)if(e[r].identifier===t){o=r;break}return o}function r(t,r){for(var n={},s=[],a=0;a<t.length;a++){var l=t[a],c=r.base?l[0]+r.base:l[0],p=n[c]||0,u="".concat(c," ").concat(p);n[c]=p+1;var h=o(u),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(d);else{var f=i(d,r);r.byIndex=a,e.splice(a,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function i(t,e){var o=e.domAPI(e);o.update(t);return function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,i){var n=r(t=t||[],i=i||{});return function(t){t=t||[];for(var s=0;s<n.length;s++){var a=o(n[s]);e[a].references--}for(var l=r(t,i),c=0;c<n.length;c++){var p=o(n[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}n=l}}},569:t=>{"use strict";var e={};t.exports=function(t,o){var r=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},9216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,o)=>{"use strict";t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},7795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,i&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var n=o.sourceMap;n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},3066:(t,e)=>{"use strict";function o(t,e){e.innerHTML='<p class="message">'.concat(t,"</p>")}Object.defineProperty(e,"__esModule",{value:!0}),e.Provider=e.ErrorMessage=e.FixedRatioAttribute=e.FixedWidthAttribute=e.FixedHeightAttribute=e.playerTemplate=e.imageTemplate=e.frameTemplate=void 0,e.frameTemplate='<iframe class="generated{_llClass}" width="{_width}" height="{_height}" {_llPrefix}src="_src"{_addAttr} frameborder="0" allowfullscreen></iframe>',e.imageTemplate='<img class="generated{_llClass}" alt="{_alt}" width="{_width}" height="{_height}" {_llPrefix}src="_src" />',e.playerTemplate='<video class="video-js vjs-fluid vjs-default-skin{_autoplay}" controls preload="auto" width="{_width}" height="{_height}" data-setup="{}" poster="{_poster}"><source src="{_id}" type="video/mp4"></video>',e.FixedHeightAttribute="height",e.FixedWidthAttribute="width",e.FixedRatioAttribute="ratio",e.ErrorMessage=o;var r=function(){function t(t){this.pluginID=t,this._addAttr="",this._llClass="",this._llPrefix="",this.badParam=""}return t.prototype.fillParams=function(t){var e=this,o=t;return Object.keys(this).forEach((function(t){"_"===t.substr(0,1)&&(o=o.replace(new RegExp("{".concat(t,"}"),"g"),e[t]))})),o},t.prototype.generate=function(t,o,r){this.init(t),this.render(this.fillParams(e.frameTemplate.replace("_src",this.source)),r,o)},t.prototype.getID=function(){return this.pluginID},t.prototype.hasHttpSourceInSecureMode=function(){return"https:"===location.protocol&&"http://"===this.source.substr(0,7)},t.prototype.init=function(t){this._id=t.id,this._height=t.height.toString(),t.lazyload&&(this._llClass=" lozad",this._llPrefix="data-"),this.setData(t.instance,e.FixedWidthAttribute,t.width.toString()),this.setData(t.instance,e.FixedRatioAttribute,(1/t.ratio).toString()),this.element=t.instance,"other"===t.provider&&(this.element.style.width="".concat(this._width,"px"))},t.prototype.log=function(){console.log("".concat(this.getID()," plugin registered."))},t.prototype.render=function(t,e,r){console.log(t);var i="";"<"!==t[0]?o(t,this.element):(i="bottom"===r?this.element.innerHTML+t:t+this.element.innerHTML,e?this.element.dataset.content=i:this.element.innerHTML=i)},t.prototype.setData=function(t,e,o){this["_".concat(e)]=o,t.setAttribute("data-".concat(e),o)},t.prototype.setFixedHeight=function(t,o){t.height=o,this.setData(t.instance,e.FixedHeightAttribute,o.toString())},t}();e.Provider=r},9457:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.Soundcloud=e.standardPlaybuttonColor=e.smallArtwork=e.bigArtwork=void 0;var n=o(3066);e.bigArtwork=450,e.smallArtwork=166,e.standardPlaybuttonColor="ff5500";var s=function(t){function o(){var e=t.call(this,"soundcloud")||this;return e.source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{_id}&amp;color=%23{_linkcol}&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false&amp;visual={_visual}",e._addAttr=' allow="autoplay"',e}return i(o,t),o.prototype.init=function(o){t.prototype.init.call(this,o),this._visual=!o.hasOwnProperty("stripe"),this._linkcol=o.hasOwnProperty("linkcol")?o.linkcol:e.standardPlaybuttonColor,this.setFixedHeight(o,e.smallArtwork+Number(this._visual)*(e.bigArtwork-e.smallArtwork))},o}(n.Provider);e.Soundcloud=s},923:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolBandcamp=void 0;var n=o(216),s="ffffff",a="0687f5",l=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=e.$tag.attr("style")||"",i=r.match(/width:\s([0-9]*)/);i&&r.indexOf("%")<0&&(o.vm.selWidth("pixel"),o.vm.txtPixel(i[1]));var n=o.src.match(/bgcol=([0-9a-f]*)/);o.vm.txtBgColor(n?n[1]:s);var l=o.src.match(/linkcol=([0-9a-f]*)/);o.vm.txtLinks(l?l[1]:a);var c=o.src.match(/size=([a-z]*)/),p=c?c[1]:"big",u=o.src.match(/artwork=([a-z]*)/),h=u?u[1]:"big",d=!!o.src.match(/minimal=true/);switch(p){case"small":e.optLayout("slim"),e.optArtwork("none"===h?"none":"show");break;case"large":if(d)e.optLayout("artworkonly"),e.optArtwork("big");else{e.optLayout("standard"),e.optArtwork(h);var f=o.src.match(/tracklist=false/);o.vm.chkTracklist(!f)}}return o}return i(e,t),e.prototype.generateDiv=function(){if(this.params=" layout-".concat(this.vm.optLayout()," artwork-").concat(this.vm.optArtwork()),this.validateColor("txtBgColor","Hintergrund","bgcol",s),this.validateColor("txtLinks","Link","linkcol",a),this.vm.chkTracklist()){var e=this.vm.txtTracks();e.length>0?(this.validateNumber("txtTracks","Trackanzahl","tracklist"),!this.vm.hasError()&&parseInt(e)<2&&this.vm.errIframe("Die Tracklist-Anzeige muss mindestens 2 Tracks umfassen!")):this.params+=" tracklist"}return $(".jscolor").css("background-color","#".concat(this.vm.txtLinks())),t.prototype.generateDiv.call(this)},e}(n.ToolProvider);e.ToolBandcamp=l},7711:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolDailymotion=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=o.src.match(/start=([0-9]*)/);return r?o.vm.txtStart(r[1]):o.vm.txtStart(""),o}return i(e,t),e.prototype.generateDiv=function(){return this.validateNumber("txtStart","Startsekunde","start"),t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolDailymotion=n},5589:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolDctptv=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=o.src.match(/t=([0-9]*m[0-9]*s)/);if(r){var i=r[1].split("m");o.vm.txtStart((60*parseInt(i[0])+parseInt(i[1])).toString())}else o.vm.txtStart("");return o}return i(e,t),e.prototype.generateDiv=function(){return this.validateNumber("txtStart","Startsekunde","start"),t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolDctptv=n},216:(t,e)=>{"use strict";function o(t){return Math.round(1e5*t)/1e5}function r(t){return/(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.ToolProvider=e.n43=e.n169=e.isValidColor=e.round5th=void 0,e.round5th=o,e.isValidColor=r,e.n169=o(16/9),e.n43=o(4/3);var i=.99*e.n169,n=1.01*e.n169,s=.99*e.n43,a=1.01*e.n43,l=function(){function t(t){if(this.vm=t,this.params="",this.src="",t.$tag){this.src=t.$tag.attr("src")||"";var r,l=t.$tag.attr("data-ratio");if(void 0!==l)r=o(parseFloat(l));else{var c=t.$tag.attr("width")||"%",p=t.$tag.attr("height")||"%";r=c.indexOf("%")<0&&p.indexOf("%")<0?o(parseInt(c)/parseInt(p)):e.n169}r>=i&&r<=n?r=e.n169:r>=s&&r<=a&&(r=e.n43),r===e.n169||r===e.n43?this.vm.selRatio(r.toString()):this.vm.selRatio("custom"),this.vm.txtRatio(r.toString())}}return t.prototype.initParam=function(){this.params="",this.vm.errIframe("")},t.prototype.generateDiv=function(){if("pixel"===this.vm.selWidth()){var t=this.vm.txtPixel();if($.isNumeric(t)){if("bandcamp"===this.vm.optProvider()){var r="standard"===this.vm.optLayout()&&"small"===this.vm.optArtwork()?250:170,i=parseInt(t);i<r&&this.vm.errIframe("Bandcamp erfordert eine Mindestbreite von 170 Pixel - bei Layout=standard und Artwork=small sogar 250 Pixel!"),i>700&&this.vm.errIframe("Bandcamp begrenzt die maximale Anzeigebreite auf 700 Pixel!")}this.params+=" width-".concat(t)}else this.vm.errIframe("Bitte geben Sie eine gültige (numerische) Breite in Pixel sein!")}if(this.vm.selRatio()!==e.n169.toString()){var n=this.vm.txtRatio().replace(/,/g,".");$.isNumeric(n)?(n=o(parseFloat(n)).toString(),this.params+=" ratio-".concat(n)):this.vm.errIframe("Bitte machen Sie eine gültige Angabe für das gewünschte Aspektverhältnis!")}if(0===this.vm.txtElementID().length){var s=this.vm.labelProvider();this.vm.errIframe("Bitte geben Sie eine gültige ".concat(s.substr(0,s.length-1)," ein!"))}return'&lt;div class="html5video '.concat(this.vm.optProvider()).concat(this.params,'" id="').concat(this.vm.txtElementID(),'"&gt;&lt;/div&gt;')},t.prototype.validateNumber=function(t,e,o){var r=this.vm[t]();r.length>0&&($.isNumeric(r)?this.params+=" ".concat(o,"-").concat(r):this.vm.errIframe("Bitte geben Sie einen gültigen (numerischen) Wert für die ".concat(e," ein!")))},t.prototype.validateColor=function(t,e,o,i){var n=this.vm[t]();n.length>0&&(r(n)?n!==i&&(this.params+=" ".concat(o,"-").concat(n)):this.vm.errIframe("Bitte geben Sie einen gültigen Wert (hexadezimal, 3- oder 6-stellig) für die ".concat(e,"farbe ein!")))},t}();e.ToolProvider=l},8698:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolGiphy=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;return o.vm=e,o}return i(e,t),e.prototype.generateDiv=function(){if(this.vm.chkAsImage()){this.params=" asimage";var e=$.trim(this.vm.txtAlt()).replace(/\s/g,"_");e.length>0&&(this.params+=" alt-".concat(e))}return t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolGiphy=n},3439:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolJsFiddle=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=o.src.match(/embedded\/(.*)\//);if(r){var i=r[1].split("/"),n=i[0].split(",");o.vm.chkHtml(n.indexOf("html")>=0),o.vm.chkCss(n.indexOf("css")>=0),o.vm.chkJs(n.indexOf("js")>=0),o.vm.chkResult(n.indexOf("result")>=0),o.vm.optColor(i.length>1?"light"===i[1]?"ffffff":"333333":"ffffff")}else o.vm.chkHtml(!0),o.vm.chkCss(!0),o.vm.chkJs(!0),o.vm.chkResult(!0),o.vm.optColor("333333");return o}return i(e,t),e.prototype.generateDiv=function(){if(!(this.vm.chkHtml()&&this.vm.chkCss()&&this.vm.chkJs()&&this.vm.chkResult())){var e=[];this.vm.chkHtml()&&e.push("html"),this.vm.chkCss()&&e.push("css"),this.vm.chkJs()&&e.push("js"),this.vm.chkResult()&&e.push("result"),0===e.length?this.vm.errIframe("Bitte selektieren Sie wenigstens eine Auswahlbox beim jsFiddle-Umfang!"):this.params=" scope-".concat(e.join(","))}return"333333"!==this.vm.optColor()&&(this.params+=" color-light"),t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolJsFiddle=n},1080:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolOther=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;return o.vm=e,o}return i(e,t),e.prototype.generateDiv=function(){if(this.vm.chkPoster()){this.params=" poster";var e=this.vm.selPoster();"jpg"!==e&&(this.params+=" image-".concat(e))}return this.vm.chkAutoplay()&&(this.params+=" autoplay"),t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolOther=n},2242:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolSlides=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=o.src.match(/\/#\/([0-9]*)/);r?o.vm.txtSlide(r[1]):o.vm.txtSlide("");var i=o.src.match(/\?style=(.*)/);return i?o.vm.optColor("light"===i[1]?"ffffff":"333333"):o.vm.optColor("333333"),o}return i(e,t),e.prototype.generateDiv=function(){return this.validateNumber("txtSlide","Startseite","slide"),"333333"!==this.vm.optColor()&&(this.params+=" color-light"),t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolSlides=n},3308:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolSlideshare=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=o.src.match(/startSlide=([0-9]*)/);return r?o.vm.txtSlide(r[1]):o.vm.txtSlide(""),o}return i(e,t),e.prototype.generateDiv=function(){return this.validateNumber("txtSlide","Startseite","slide"),t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolSlideshare=n},8181:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolSoundcloud=void 0;var n=o(216),s=o(9457),a=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=parseInt(e.$tag.attr("height")||"450");o.vm.chkStripe(r<s.bigArtwork);var i=o.src.match(/color=%23([0-9a-f]*)/);return i?o.vm.txtColor(i[1]):o.vm.txtColor(s.standardPlaybuttonColor),o}return i(e,t),e.prototype.generateDiv=function(){return this.vm.chkStripe()&&(this.params=" stripe"),this.validateColor("txtColor","Playbutton","linkcol",s.standardPlaybuttonColor),$(".jscolor").css("background-color","#".concat(this.vm.txtColor())),t.prototype.generateDiv.call(this)},e}(n.ToolProvider);e.ToolSoundcloud=a},3915:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolSpeakerdeck=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=e.$tag.attr("data-id")||"";o.vm.txtElementID(r);var i=e.$tag.attr("data-slide")||"";return o.vm.txtSlide(i),o}return i(e,t),e.prototype.generateDiv=function(){return this.validateNumber("txtSlide","Startseite","slide"),t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolSpeakerdeck=n},2878:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolTed=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;return o.vm=e,e.$tag?(o.vm.chkLang(!!o.src.match(/lang\/de/)),o):o}return i(e,t),e.prototype.generateDiv=function(){return this.vm.chkLang()&&(this.params=" lang"),t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolTed=n},5661:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolVimeo=void 0;var n=o(216),s="00adef",a=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=o.src.match(/color=([0-9a-f]*)/);return r?o.vm.txtColor(r[1]):o.vm.txtColor(s),o}return i(e,t),e.prototype.generateDiv=function(){return this.validateColor("txtColor","Link","linkcol",s),$(".jscolor").css("background-color","#".concat(this.vm.txtColor())),t.prototype.generateDiv.call(this)},e}(n.ToolProvider);e.ToolVimeo=a},2610:function(t,e,o){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0}),e.ToolYoutube=void 0;var n=function(t){function e(e){var o=t.call(this,e)||this;if(o.vm=e,!e.$tag)return o;var r=o.src.match(/start=([0-9]*)/);r?o.vm.txtStart(r[1]):o.vm.txtStart("");var i=o.src.match(/end=([0-9]*)/);return i?o.vm.txtEndat(i[1]):o.vm.txtEndat(""),o}return i(e,t),e.prototype.generateDiv=function(){return this.validateNumber("txtStart","Startsekunde","start"),this.validateNumber("txtEndat","Endsekunde","endat"),t.prototype.generateDiv.call(this)},e}(o(216).ToolProvider);e.ToolYoutube=n},3691:function(t,e,o){"use strict";var r=this&&this.__read||function(t,e){var o="function"==typeof Symbol&&t[Symbol.iterator];if(!o)return t;var r,i,n=o.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(o=n.return)&&o.call(n)}finally{if(i)throw i.error}}return s};Object.defineProperty(e,"__esModule",{value:!0}),o(7114);var i,n=o(216),s=o(923),a=o(7711),l=o(5589),c=o(8698),p=o(3439),u=o(2242),h=o(3308),d=o(8181),f=o(3915),v=o(2878),m=o(5661),y=o(2610),b=o(1080),g=o(7298),k="1.77778",_=$('a[name="codedemo"]'),x="youtube",T={standard:["small","big","none"],slim:["show","none"],artworkonly:["big"]};!function(t){t[t.NoTemplate=0]="NoTemplate",t[t.TmplBandcamp=1]="TmplBandcamp",t[t.TmplVideoStart=2]="TmplVideoStart",t[t.TmplVideoStartEndat=3]="TmplVideoStartEndat",t[t.TmplGiphy=4]="TmplGiphy",t[t.TmplFiddle=5]="TmplFiddle",t[t.TmplSlide=6]="TmplSlide",t[t.TmplSlides=7]="TmplSlides",t[t.TmplSoundcloud=8]="TmplSoundcloud",t[t.TmplTed=9]="TmplTed",t[t.TmplVimeo=10]="TmplVimeo",t[t.TmplOther=11]="TmplOther"}(i||(i={}));var w=function(){function t(){var t=this;this.$tag=null,this.prevProvider="";var e={rateLimit:{method:"notifyWhenChangesStop",timeout:400}};this.providers={bandcamp:{name:"Bandcamp",template:i.TmplBandcamp,aspect:!1,id:"bandcamp.com",vmatch:"\\/album=([0-9]*)"},dailymotion:{name:"DailyMotion",template:i.TmplVideoStart,aspect:!0,id:"dailymotion.com",vmatch:"\\/video\\/([0-9a-z]*)"},dctptv:{name:"DCTPtv",template:i.TmplVideoStart,aspect:!0,id:"dctp.tv",vmatch:"\\/filme\\/(.*)\\/embed"},filmstarts:{name:"Filmstarts",template:i.NoTemplate,aspect:!0,id:"filmstarts.de",vmatch:"\\/([0-9]*)\\."},giphy:{name:"Giphy",template:i.TmplGiphy,aspect:!0,id:"giphy.com",vmatch:"\\/embed\\/(.*)"},itemfix:{name:"Itemfix",template:i.NoTemplate,aspect:!0,id:"itemfix.com",vmatch:"\\/e\\/(.*)"},jsfiddle:{name:"JsFiddle",template:i.TmplFiddle,aspect:!0,id:"jsfiddle.net",vmatch:".net\\/(.*)\\/embedded"},slides:{name:"Slides",template:i.TmplSlides,aspect:!0,id:"slides.com",vmatch:"com\\/(.*?)\\/embed"},slideshare:{name:"Slideshare",template:i.TmplSlide,aspect:!0,id:"slideshare.net",vmatch:"\\/embed_code\\/key\\/([0-9a-zA-Z]*)"},soundcloud:{name:"Soundcloud",template:i.TmplSoundcloud,aspect:!1,id:"soundcloud.com",vmatch:"com\\/tracks\\/(.*?)&"},speakerdeck:{name:"Speakerdeck",template:i.TmplSlide,aspect:!0,id:"speakerdeck.com",vmatch:'data-id="([0-9a-z]*)'},ted:{name:"Ted",template:i.TmplTed,aspect:!0,id:"ted.com",vmatch:"(\\/talks\\/lang\\/[a-z]{2}\\/|\\/talks\\/)([a-z0-9_]*)"},vimeo:{name:"Vimeo",template:i.TmplVimeo,aspect:!0,id:"vimeo.com",vmatch:"\\/video\\/([0-9]*)"},vine:{name:"Vine",template:i.NoTemplate,aspect:!0,id:"vine.co",vmatch:"\\/v\\/(.*)\\/embed"},youtube:{name:"Youtube",template:i.TmplVideoStartEndat,aspect:!0,id:"youtube.com",vmatch:"\\/embed\\/([A-Za-z0-9_\\-]{11})"},other:{name:"Other (MP4-Datei)",template:i.TmplOther,aspect:!0,id:"",vmatch:""}},this.providerOptions=ko.pureComputed((function(){return Object.keys(t.providers).map((function(e){return{code:e,option:t.providers[e].name}}),t)})),this.txtIframe=ko.observable(""),this.txtIframe.subscribe(this.deconstructIframe,this),this.errIframe=ko.observable(""),this.hasError=ko.pureComputed((function(){return this.errIframe().length>0}),this),this.optProvider=ko.observable(x),this.optProvider.subscribe(this.injectProviderTemplate,this),this.providerTemplate=ko.observable(i[this.providers[x].template]),this.providerImgUrl=ko.pureComputed((function(){return"https://neonwilderness.de/public/images/videoload/".concat(t.optProvider(),".png")})),this.labelProvider=ko.observable("".concat(this.providers[this.optProvider()].name,"-ID:")),this.selWidth=ko.observable("full"),this.txtPixel=ko.observable("").extend(e),this.txtPixelEnabled=ko.pureComputed((function(){return"pixel"===t.selWidth()})),this.selRatio=ko.observable(k),this.txtRatio=ko.observable(k).extend(e),this.txtRatioEnabled=ko.pureComputed((function(){return"custom"===t.selRatio()})),this.txtElementID=ko.observable("").extend(e),this.txtStart=ko.observable("").extend(e),this.txtEndat=ko.observable("").extend(e),this.chkAsImage=ko.observable(!1),this.txtAlt=ko.observable("").extend(e),this.txtSlide=ko.observable("").extend(e),this.chkStripe=ko.observable(!1),this.txtColor=ko.observable("ff5500").extend(e),this.chkHtml=ko.observable(!0),this.chkCss=ko.observable(!0),this.chkJs=ko.observable(!0),this.chkResult=ko.observable(!0),this.colorOptions=[{colorText:"dark",colorValue:"333333"},{colorText:"light",colorValue:"ffffff"}],this.optColor=ko.observable(this.colorOptions[0].colorValue),this.layoutOptions=Object.keys(T),this.optLayout=ko.observable(this.layoutOptions[0]),this.optLayout.subscribe(this.changeOfLayout,this);var o=T[this.layoutOptions[0]];this.artworkOptions=ko.observableArray(o),this.optArtwork=ko.observable(o[0]),this.txtBgColor=ko.observable(this.colorOptions[1].colorValue),this.txtLinks=ko.observable("0687f5").extend(e),this.chkTracklist=ko.observable(!1),this.txtTracks=ko.observable(""),this.chkPoster=ko.observable(!1),this.selPoster=ko.observable("jpg"),this.chkAutoplay=ko.observable(!0),this.chkLang=ko.observable(!1),this.$fldOptions=$("#fldOptions"),this.$fldIframe=$("#fldIframe"),this.optionsVisible=ko.observable(!1),this.showAspectRow=ko.observable(!0),this.$errMsg=$("#errMsg"),this.$fldElementCode=$("#fldElementCode"),this.$fldElementDisplay=$("#fldElementDisplay");var r=location.search.length>0?decodeURIComponent(location.search).slice(1).split("&"):[];for(var n in r.length>0&&this.initFromQueryString(r),this)if(this.hasOwnProperty(n)&&!(["txtIframe","errIframe","optProvider","labelProvider","providerTemplate","optLayout","artworkOptions","optionsVisible","showAspectRow"].indexOf(n)>=0)){var s=this[n];ko.isObservable(s)&&!ko.isComputed(s)&&(console.log(n,"extended."),s.subscribe(this.subscribeExtender,this))}}return t.prototype.subscribeExtender=function(t){console.log("subscribeExtender: newValue=".concat(t)),this.generateHtml()},t.prototype.changeOfLayout=function(t){console.log("changeOfLayout: newLayout=".concat(t,", options=").concat(T[t])),this.artworkOptions(T[t]),this.optArtwork(this.artworkOptions()[0])},t.prototype.initFromQueryString=function(t){var e=this;$.each(t,(function(t,o){var i=o.split("=");if(i.length<2)return!0;var n=i[1].split(" ");switch(i[0]){case"provider":e.optProvider(n[0]);for(var s=1;s<n.length;s++){var a=r(n[s].split("-"),2),l=a[0],c=a[1],p=void 0===c?"":c;switch(console.log("init:",l,"with",p),l){case"alt":e.txtAlt(p);break;case"artwork":e.optArtwork(p);break;case"asimage":e.chkAsImage(!0);break;case"autoplay":e.chkAutoplay(!0);break;case"bgcol":e.txtBgColor("ffffff"===p?p:"333333");break;case"color":e.optColor("light"===p?"ffffff":"333333");break;case"endat":e.txtEndat(p);break;case"image":e.selPoster(p);break;case"lang":e.chkLang(!0);break;case"layout":e.optLayout(p),e.artworkOptions(T[p]);break;case"linkcol":"bandcamp"!==n[0]?e.txtColor(p):e.txtLinks(p);break;case"poster":e.chkPoster(!0);break;case"ratio":e.selRatio("custom"),e.txtRatio(p);break;case"scope":var u=p.split(",");e.chkHtml(u.indexOf("html")>=0),e.chkCss(u.indexOf("css")>=0),e.chkJs(u.indexOf("js")>=0),e.chkResult(u.indexOf("result")>=0);break;case"start":e.txtStart(p);break;case"slide":e.txtSlide(p);break;case"stripe":e.chkStripe(!0);break;case"tracklist":e.chkTracklist(!0),e.txtTracks(p);break;case"width":e.selWidth("pixel"),e.txtPixel(p)}}break;case"id":case"videoid":e.txtElementID(i[1])}})),this.injectProviderTemplate(this.optProvider()),$("html,body").animate({scrollTop:_.offset().top-20},"slow")},t.prototype.deconstructIframe=function(t){var e=this;if(0!==t.length){var o=$("<div>").html(t),r=o.find("iframe").eq(0);r.length||(r=o.find("script").eq(0));var i=r.attr("src")||"";this.$tag=r;var n=!1;$.each(this.providers,(function(t,o){if(o.id.length>0&&i.indexOf(o.id)>=0){n=!0,e.prevProvider="",e.optProvider(t);var r=i.match(new RegExp(o.vmatch,""))||[];return r.length>1&&e.txtElementID(r[r.length-1]),console.log("providerID:",e.txtElementID(),"from matchID:",r),!1}})),n||this.errIframe("Der iframe-Einbettungscode konnte nicht interpretiert werden (unbekannter Anbieter)!")}else this.$tag=null},t.prototype.generateHtml=function(){var t=this.optProvider();if(console.log("generateHtml: currProv=",t,"lastProv=",this.prevProvider,"tag=",this.$tag||"null"),t!==this.prevProvider){switch(t){case"bandcamp":this.providerHandler=new s.ToolBandcamp(this);break;case"dailymotion":this.providerHandler=new a.ToolDailymotion(this);break;case"dctptv":this.providerHandler=new l.ToolDctptv(this);break;case"giphy":this.providerHandler=new c.ToolGiphy(this);break;case"jsfiddle":this.providerHandler=new p.ToolJsFiddle(this);break;case"slides":this.providerHandler=new u.ToolSlides(this);break;case"slideshare":this.providerHandler=new h.ToolSlideshare(this);break;case"speakerdeck":this.providerHandler=new f.ToolSpeakerdeck(this);break;case"soundcloud":this.providerHandler=new d.ToolSoundcloud(this);break;case"ted":this.providerHandler=new v.ToolTed(this);break;case"vimeo":this.providerHandler=new m.ToolVimeo(this);break;case"youtube":this.providerHandler=new y.ToolYoutube(this);break;case"other":this.providerHandler=new b.ToolOther(this);break;default:this.providerHandler=new n.ToolProvider(this)}this.prevProvider=t}this.providerHandler.initParam();var e=this.providerHandler.generateDiv();console.log("generateDIVresult: ".concat(e,", hasError: ").concat(this.hasError())),this.hasError()?(this.$fldElementCode.empty(),this.$fldElementDisplay.empty(),this.scrollToFirstVisible(this.$errMsg)):(this.$fldElementCode.html('<pre class="html">'.concat(e,"</pre>")).find(".html").snippet("html",{style:"golden",showNum:!1}),this.$fldElementDisplay.html(e.replace(/&lt;/g,"<").replace(/&gt;/g,">")),video2day.run({addFlexVideoClass:!0,debug:!0}))},t.prototype.injectProviderTemplate=function(t){console.log("injectProviderTemplate: newProvider=".concat(t));var e=this.providers[t];this.showAspectRow(e.aspect),this.providerTemplate(i[e.template]),this.labelProvider("other"===t?"MP4-Datei-URL:":"".concat(e.name,"-ID:")),this.generateHtml(),this.triggerColorPickerInputs()},t.prototype.triggerColorPickerInputs=function(){$(".jscolor").length>0&&window.jscolor&&jscolor.init()},t.prototype.resetOptions=function(){this.$fldOptions.hide(300),this.$fldIframe.show(300),this.optionsVisible(!1),this.$tag=null,this.txtIframe(""),this.prevProvider="",this.optProvider(x),this.selWidth("full"),this.txtPixel(""),this.selRatio(k),this.txtRatio(k),this.txtElementID(""),this.txtStart(""),this.txtEndat(""),this.chkAsImage(!1),this.txtAlt(""),this.txtSlide(""),this.chkStripe(!1),this.txtColor("ff5500"),this.chkHtml(!0),this.chkCss(!0),this.chkJs(!0),this.chkResult(!0),this.optColor(this.colorOptions[0].colorValue),this.optLayout(this.layoutOptions[0]),this.artworkOptions(T[this.layoutOptions[0]]),this.optArtwork(this.artworkOptions()[0]),this.txtBgColor(this.colorOptions[1].colorValue),this.txtLinks("0687f5"),this.chkTracklist(!1),this.txtTracks(""),this.chkPoster(!1),this.selPoster("jpg"),this.chkAutoplay(!0),this.chkLang(!1),this.$fldElementCode.empty(),this.$fldElementDisplay.empty()},t.prototype.setRatio=function(){var t=this.selRatio();return"custom"===t?(this.txtRatio(""),$("#txtRatio").focus()):this.txtRatio(t),!0},t.prototype.scrollToFirstVisible=function(t,e,o){void 0===e&&(e=600),void 0===o&&(o=50);var r=t.filter(":visible").eq(0);r.length&&$("html,body").animate({scrollTop:r.offset().top-o},e)},t.prototype.toggle=function(t,e,o){void 0===e&&(e=600),void 0===o&&(o=50),this.optionsVisible(!this.optionsVisible());var r=$(t);r.toggle(e),this.scrollToFirstVisible(r,e,o)},t}();!function(t){t((function(){var e=t(".sidebarItem:first");e.length&&"neonwilderness"===location.host.split(".")[0]&&t.get("/topics/Sch%C3%B6ner+Bloggen/",(function(o){var r="";t(o).find(".storyTitle").each((function(){r+='<div class="sideHistoryItem clearfix"><div class="sideHistoryTitle">{tip}</div></div>'.replace("{tip}",t(this).html().replace("Twoday-",""))})),r.length>0&&(e.find("h4").text("Twoday-Tipps"),e.find(".sidebarItemBody").html(r),t(".sidebarItem:gt(0)").hide(0))}));var o=t("#prependStory");o.closest(".story").prepend(o.html());var r=new w;ko.applyBindings(r,document.getElementById("videotool2")),g("https://cdnjs.cloudflare.com/ajax/libs/jscolor/".concat("2.5.1","/jscolor.min.js")).catch((function(t){console.log(">>>Error: jscolor could not be loaded [".concat(t,"]."))}))}))}(jQuery)}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={id:r,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.nc=void 0;o(3691)})();