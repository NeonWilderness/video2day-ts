!function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";i(1);var r=i(5);!function(){window.video2day=new r.Framedispatcher}()},function(t,e,i){var r=i(2);"string"==typeof r&&(r=[[t.id,r,""]]);i(4)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,i){e=t.exports=i(3)(),e.push([t.id,".flex-video{position:relative;height:0;margin-bottom:1rem;overflow:hidden;padding-bottom:56.25%;padding-top:0}.flex-video iframe{position:absolute;height:100%;width:100%;top:0;left:0}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var n=this[o][0];"number"==typeof n&&(r[n]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(t,e,i){function r(t,e){for(var i=0;i<t.length;i++){var r=t[i],o=d[r.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](r.parts[n]);for(;n<r.parts.length;n++)o.parts.push(l(r.parts[n],e))}else{for(var s=[],n=0;n<r.parts.length;n++)s.push(l(r.parts[n],e));d[r.id]={id:r.id,refs:1,parts:s}}}}function o(t){for(var e=[],i={},r=0;r<t.length;r++){var o=t[r],n=o[0],s=o[1],a=o[2],c=o[3],l={css:s,media:a,sourceMap:c};i[n]?i[n].parts.push(l):e.push(i[n]={id:n,parts:[l]})}return e}function n(t,e){var i=y(),r=w[w.length-1];if("top"===t.insertAt)r?r.nextSibling?i.insertBefore(e,r.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",n(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",n(t,e),e}function l(t,e){var i,r,o;if(e.singleton){var n=g++;i=v||(v=a(e)),r=p.bind(null,i,n,!1),o=p.bind(null,i,n,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=c(e),r=u.bind(null,i),o=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(e),r=h.bind(null,i),o=function(){s(i)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function p(t,e,i,r){var o=i?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var n=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(n,s[e]):t.appendChild(n)}}function h(t,e){var i=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function u(t,e){var i=e.css,r=e.sourceMap;r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([i],{type:"text/css"}),n=t.href;t.href=URL.createObjectURL(o),n&&URL.revokeObjectURL(n)}var d={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},m=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,w=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=m()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=o(t);return r(i,e),function(t){for(var n=[],s=0;s<i.length;s++){var a=i[s],c=d[a.id];c.refs--,n.push(c)}if(t){var l=o(t);r(l,e)}for(var s=0;s<n.length;s++){var c=n[s];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete d[c.id]}}}};var _=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e,i){"use strict";var r=i(6),o=i(7),n=i(8),s=i(9),a=i(10),c=i(11),l=i(12),p=i(13),h=i(14),u=i(15),d=i(16),f=i(17),m=i(18),y=i(19),v=i(20),g=i(21),w=i(22),_=i(23),b=i(24),P=i(26),k="flex-video",O="5.12.6",x=function(){function t(){this.version="2.0.1",this.defaults={addFlexVideoClass:!1,contentClass:"storyContent",debug:!1,maxWidth:-1,position:"bottom",posterSize:"cover",selector:".html5video",useVideoJS:!0},this.providers={bandcamp:new o.Bandcamp,dailymotion:new n.Dailymotion,dctptv:new s.Dctptv,funnyordie:new a.Funnyordie,giphy:new c.Giphy,jsfiddle:new l.Jsfiddle,liveleak:new p.Liveleak,metacafe:new h.Metacafe,slideshare:new u.Slideshare,soundcloud:new d.Soundcloud,speakerdeck:new f.Speakerdeck,vevo:new m.Vevo,vimeo:new y.Vimeo,vine:new v.Vine,youtube:new g.Youtube,other:new w.Other},this.providerNames=Object.keys(this.providers)}return t.prototype.errorMessage=function(t,e){e.innerHTML='<p class="message">'+t+"</p>"},t.prototype.log=function(t){this.options.debug&&console.log(t)},t.prototype.listProviders=function(){var t=this;console.log("Available Providers(#"+this.providerNames.length+"):"),this.providerNames.forEach(function(e){var i=t.providers[e];i.log()})},t.prototype.dispatch=function(t){var e=t.instance;if(!t.hasOwnProperty("provider"))return void this.errorMessage("Bitte einen gültigen Typ ("+this.providerNames.join(", ")+") im class-Parameter ergänzen!",e);if(!t.hasOwnProperty("id"))return void this.errorMessage('Bitte die ID bzw. -URL des Anzeigeobjekts im Parameter "id" ergänzen!',e);var i=this.providers[t.provider].generate(t);this.log(i);var r="<"===i.substr(0,1)?i:this.errorMessage(i,e);"bottom"===this.options.position?e.innerHTML+=r:e.innerHTML=r+e.innerHTML,this.options.addFlexVideoClass&&this.resizeElement(e)},t.prototype.getWidth=function(t){return t.getBoundingClientRect().width},t.prototype.getContentWidth=function(t){for(var e=t.parentNode,i=e.hasOwnProperty("classList")?e.classList:new _.ClassListPolyfill(e.className);!i.contains(this.options.contentClass)&&"BODY"!==e.nodeName;)e=e.parentNode;return"BODY"===e.nodeName?0:this.getWidth(e)},t.prototype.getInstanceOptions=function(t){for(var e={},i=new _.ClassListPolyfill(t.hasOwnProperty("classList")?t.classList:t.className).classList,r=0,o=i;r<o.length;r++){var n=o[r],s=n.split("-"),a=s[0],c=s[1];switch(c=c||"",a){case"alt":case"artwork":case"bgcol":case"color":case"endat":case"image":case"layout":case"linkcol":case"scope":case"start":e[a]=c;break;case"asimage":case"poster":case"stripe":e[a]=!0;break;case"tracklist":e[a]=c?parseInt(c):2;break;case"slide":case"width":e[a]=parseInt(c);break;case"ratio":e[a]=parseFloat(c);break;default:this.providerNames.indexOf(a)>=0&&(e.provider=a)}}if(e.hasOwnProperty("ratio")||(e.ratio=16/9),!e.hasOwnProperty("width")){var l=this.getContentWidth(t),p=this.getWidth(t);e.width=0!==l&&l<p?l:p}return this.options.maxWidth>0&&e.width>this.options.maxWidth&&(e.width=this.options.maxWidth),e.height=Math.round(e.width/e.ratio),e.id=t.id,e.instance=t,e},t.prototype.setPosterSize=function(){for(var t=0,e=document.querySelectorAll(".vjs-poster");t<e.length;t++){var i=e[t];i.style.backgroundSize=this.options.posterSize}},t.prototype.getAttribute=function(t,e){var i=t.getAttribute("data-"+e)||"0";return"ratio"===e?parseFloat(i):parseInt(i)},t.prototype.resizeElement=function(t){var e=t.clientWidth,i=this.getAttribute(t,r.FixedWidthAttribute),o=this.getAttribute(t,r.FixedHeightAttribute);if(i<=e)t.className=t.className.replace(/\s*flex-video/,""),t.style.paddingBottom="";else{t.className.indexOf(k)<0&&(t.className+=" "+k);var n=o?Math.round(o/e*1e5)/1e5:this.getAttribute(t,r.FixedRatioAttribute);n!==9/16&&(t.style.paddingBottom=100*n+"%")}this.log("height: "+o+", width: "+i+", containerWidth: "+e),this.log("id: "+t.id+", padding-bottom: "+t.style.paddingBottom)},t.prototype.specialResize=function(){for(var t=0,e=this.instances;t<e.length;t++){var i=e[t];this.resizeElement(i)}},t.prototype.run=function(t){if(this.options=b({},this.defaults,t||{}),this.log("Video2day version "+this.version),this.log(this.options),this.options.debug&&this.listProviders(),this.instances=document.querySelectorAll(this.options.selector),this.log("#"+this.instances.length+" instance"+(this.instances.length>1?"s":"")+" found."),!(this.instances.length<1)){this.options.addFlexVideoClass&&(this.log("Added resize-event."),window.addEventListener("resize",this.specialResize.bind(this)));for(var e=!1,i=0,r=this.instances;i<r.length;i++){var o=r[i],n=this.getInstanceOptions(o);this.dispatch(n),this.log(n),e=e||"other"===n.provider}if(e&&this.options.useVideoJS)if("undefined"==typeof window.videojs){var s=this;P("//vjs.zencdn.net/"+O+"/video.min.js",function(t){if(t)console.log(">>>Error: videojs could not be loaded.");else{var e=document.createElement("link");e.rel="stylesheet",e.href="//vjs.zencdn.net/"+O+"/video-js.min.css",document.getElementsByTagName("head")[0].appendChild(e),s.setPosterSize(),s.log("Videojs/css successfully loaded.")}})}else{for(var a=0,c=document.querySelectorAll(".video-js");a<c.length;a++){var l=c[a];window.videojs(l,{})}this.setPosterSize()}}},t}();e.Framedispatcher=x},function(t,e){"use strict";e.frameTemplate='<iframe class="generated" width="{_width}" height="{_height}" src="_src" frameborder="0" allowfullscreen></iframe>',e.imageTemplate='<img class="generated" alt="{_alt}" width="{_width}" height="{_height}" src="_src" />',e.playerTemplate='<video class="video-js vjs-fluid vjs-default-skin" controls preload="auto" width="{_width}" height="{_height}" data-setup="{}" poster="{_poster}"><source src="{_id}" type="video/mp4"></video>',e.FixedHeightAttribute="height",e.FixedWidthAttribute="width",e.FixedRatioAttribute="ratio";var i=function(){function t(t){this.pluginID=t}return t.prototype.init=function(t){this._id=t.id,this._height=t.height.toString(),this.setData(t.instance,e.FixedWidthAttribute,t.width.toString()),this.setData(t.instance,e.FixedRatioAttribute,(1/t.ratio).toString()),this.badParam=""},t.prototype.getID=function(){return this.pluginID},t.prototype.fillParams=function(t){var e=this,i=t;return Object.keys(this).forEach(function(t){"_"===t.substr(0,1)&&(i=i.replace(new RegExp("{"+t+"}","g"),e[t]))}),i},t.prototype.log=function(){console.log(this.getID()+" plugin registered.")},t.prototype.setData=function(t,e,i){this["_"+e]=i,t.setAttribute("data-"+e,i)},t.prototype.setFixedHeight=function(t,i){t.height=i,this.setData(t.instance,e.FixedHeightAttribute,i.toString())},t}();e.Provider=i},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6);!function(t){t[t.none=0]="none",t[t.show=1]="show",t[t.big=2]="big",t[t.small=3]="small"}(e.ArtworkValues||(e.ArtworkValues={}));var n=e.ArtworkValues,s=function(t){function e(){t.call(this,"bandcamp"),this.source="https://bandcamp.com/EmbeddedPlayer/album={_id}/size={_size}/bgcol={_bgcol}/linkcol={_linkcol}/tracklist={_tracklist}/artwork={_artwork}/minimal={_minimal}/transparent={_transparent}/"}return r(e,t),e.prototype.sanitizeWidth=function(t,e){return Math.max(t,Math.min(700,e))},e.prototype.tailorSize=function(t){var e,i=t.width,r=t.tracklist;"big"===t.artwork?e=this._tracklist?Math.max(362,i+106+20*Number(i<300)+33*r):i+120+25*Number(i<300):(i=Math.max(250,i),this.setData(t.instance,o.FixedWidthAttribute,i.toString()),e=this._tracklist?Math.max(208,142+33*r+25*Number(i<400)):120),this.setFixedHeight(t,e)},e.prototype.init=function(e){switch(e.width=this.sanitizeWidth(170,e.width),t.prototype.init.call(this,e),this._bgcol=e.hasOwnProperty("bgcol")?e.bgcol:"ffffff",this._linkcol=e.hasOwnProperty("linkcol")?e.linkcol:"0687f5",this._minimal=!1,this._transparent=!0,e.hasOwnProperty("layout")||(e.layout="standard"),e.layout){case"slim":this._size="small",this.setFixedHeight(e,42),this._artwork=e.hasOwnProperty("artwork")&&"none"===e.artwork?"none":"show",this._tracklist=!1;break;case"artworkonly":this._size="large",e.height=e.width,this._height=e.height.toString(),this.setData(e.instance,o.FixedRatioAttribute,"1"),this._artwork="big",this._minimal=!0,this._tracklist=!1;break;case"standard":this._size="large",this._artwork=e.hasOwnProperty("artwork")?e.artwork:"small",this._tracklist=e.hasOwnProperty("tracklist"),this.tailorSize(e),"undefined"==typeof n[n[this._artwork]]&&(this.badParam='Ungültiger Wert "'+this._artwork+'" für Parameter artwork. Erlaubt sind: none, show, big, small.');break;default:this.badParam='Ungültiger Wert "'+e.layout+'" für Parameter layout. Erlaubt sind: slim, artworkonly, standard.'}},e.prototype.generate=function(t){return this.init(t),this.badParam.length?this.badParam:this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Bandcamp=s},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"dailymotion"),this.source="//www.dailymotion.com/embed/video/{_id}?start={_starttime}"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this._starttime=e.hasOwnProperty("start")?parseInt(e.start).toString():""},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Dailymotion=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"dctptv"),this.source="http://www.dctp.tv/filme/{_id}/embed/?t={_starttime}"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this._starttime=e.hasOwnProperty("start")?this.formatTime(parseInt(e.start)):""},e.prototype.formatTime=function(t){return Math.floor(t/60)+"m"+t%60+"s"},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Dctptv=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"funnyordie"),this.source="http://www.funnyordie.com/embed/{_id}"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e)},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Funnyordie=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"giphy"),this.source="//giphy.com/embed/{_id}",this.sourceimg="https://media.giphy.com/media/{_id}/giphy.gif"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this._alt=e.hasOwnProperty("alt")?e.alt.replace(/_/g," "):"Giphy-"+e.id,this._asimage=e.hasOwnProperty("asimage")},e.prototype.generate=function(t){this.init(t);var e=this._asimage?o.imageTemplate.replace("_src",this.sourceimg):o.frameTemplate.replace("_src",this.source);return this.fillParams(e)},e}(o.Provider);e.Giphy=n},function(t,e,i){"use strict";var r,o=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},n=i(6);!function(t){t[t.light=0]="light",t[t.dark=1]="dark"}(r||(r={}));var s=function(t){function e(){t.call(this,"jsfiddle"),this.source="//jsfiddle.net/{_id}/embedded/{_scope}/{_color}/"}return o(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this._scope=e.hasOwnProperty("scope")?e.scope:"js,html,css,result",this._color=e.hasOwnProperty("color")?e.color:"dark","undefined"==typeof r[r[this._color]]&&(this.badParam='Ungültiger Wert "'+this._color+'" für Parameter color. Erlaubt sind: light, dark.')},e.prototype.generate=function(t){return this.init(t),this.badParam.length?this.badParam:this.fillParams(n.frameTemplate.replace("_src",this.source))},e}(n.Provider);e.Jsfiddle=s},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"liveleak"),this.source="http://www.liveleak.com/ll_embed?f={_id}&start={_starttime}"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this._starttime=e.hasOwnProperty("start")?parseInt(e.start).toString():""},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Liveleak=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"metacafe"),this.source="http://www.metacafe.com/embed/{_id}/"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e)},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Metacafe=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"slideshare"),this.source="//www.slideshare.net/slideshow/embed_code/key/{_id}?startSlide={_slide}"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this._slide=e.hasOwnProperty("slide")?e.slide.toString():""},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Slideshare=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6);e.bigArtwork=450,e.smallArtwork=166;var n=function(t){function i(){t.call(this,"soundcloud"),this.source="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{_id}&amp;color={_linkcol}&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual={_visual}"}return r(i,t),i.prototype.init=function(i){t.prototype.init.call(this,i),this._visual=!i.hasOwnProperty("stripe"),this._linkcol=i.hasOwnProperty("linkcol")?i.linkcol:"ff5500",this.setFixedHeight(i,e.smallArtwork+Number(this._visual)*(e.bigArtwork-e.smallArtwork))},i.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},i}(o.Provider);e.Soundcloud=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"speakerdeck"),this.source="//speakerdeck.com/player/{_id}?slide={_slide}"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this._slide=e.hasOwnProperty("slide")?e.slide.toString():""},e.prototype.generate=function(t){return this.init(t),this.badParam.length?this.badParam:this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Speakerdeck=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"vevo"),this.source="http://cache.vevo.com/assets/html/embed.html?video={_id}&autoplay=0"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e)},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Vevo=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"vimeo"),this.source="//player.vimeo.com/video/{_id}"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e)},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Vimeo=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"vine"),this.source="https://vine.co/v/{_id}/embed/simple"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e)},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Vine=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"youtube"),this.source="//www.youtube.com/embed/{_id}?start={_starttime}&end={_endtime}"}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this._starttime=e.hasOwnProperty("start")?parseInt(e.start).toString():"",this._endtime=e.hasOwnProperty("endat")?parseInt(e.endat).toString():""},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.frameTemplate.replace("_src",this.source))},e}(o.Provider);e.Youtube=n},function(t,e,i){"use strict";var r=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},o=i(6),n=function(t){function e(){t.call(this,"other")}return r(e,t),e.prototype.init=function(e){t.prototype.init.call(this,e),this._image=e.hasOwnProperty("image")?e.image:"jpg",this._poster=e.hasOwnProperty("poster")?this._id.substr(0,this._id.lastIndexOf(".")+1)+this._image:""},e.prototype.generate=function(t){return this.init(t),this.fillParams(o.playerTemplate)},e}(o.Provider);e.Other=n},function(t,e){"use strict";var i=function(){function t(t){this.classList=[],"string"==typeof t?(String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),this.splitClasses(t)):this.copyClasses(t)}return t.prototype.splitClasses=function(t){this.classList=t.trim().toLowerCase().split(/\s+/)},t.prototype.copyClasses=function(t){for(var e=0;e<t.length;e++)this.classList.push(t.item(e))},t.prototype.contains=function(t){return this.classList.indexOf(t)>=0},t}();e.ClassListPolyfill=i},function(t,e,i){"use strict";function r(t,e){for(var i in e)o(e,i)&&(t[i]=e[i])}function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var n=i(25);t.exports=function(t){n(t)||(t={});for(var e=arguments.length,i=1;i<e;i++){var o=arguments[i];n(o)&&r(t,o)}return t}},function(t,e){/*!
	 * is-extendable <https://github.com/jonschlinkert/is-extendable>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
"use strict";t.exports=function(t){return"undefined"!=typeof t&&null!==t&&("object"==typeof t||"function"==typeof t)}},function(t,e){function i(t,e){for(var i in e)t.setAttribute(i,e[i])}function r(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function o(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,n){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof e&&(n=e,e={}),e=e||{},n=n||function(){},a.type=e.type||"text/javascript",a.charset=e.charset||"utf8",a.async=!("async"in e)||!!e.async,a.src=t,e.attrs&&i(a,e.attrs),e.text&&(a.text=""+e.text);var c="onload"in a?r:o;c(a,n),a.onload||r(a,n),s.appendChild(a)}}]);