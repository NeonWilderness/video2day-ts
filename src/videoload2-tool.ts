/**
 * Videoload-Version2-Tool: analyze and transpile a provider's iframe command to the appropriate videoload2 html
 */

import './videoload2-tool.less';
import { IProviders } from './video2day';
import { ToolProvider } from './provider/tool/generic';
import { ToolBandcamp } from './provider/tool/bandcamp';
import { ToolDailymotion } from './provider/tool/dailymotion';
import { ToolDctptv } from './provider/tool/dctptv';
import { ToolGiphy } from './provider/tool/giphy';
import { ToolJsFiddle } from './provider/tool/jsfiddle';
import { ToolSlides } from './provider/tool/slides';
import { ToolSlideshare } from './provider/tool/slideshare';
import { ToolSoundcloud } from './provider/tool/soundcloud';
import { ToolSpeakerdeck } from './provider/tool/speakerdeck';
import { ToolTed } from './provider/tool/ted';
import { ToolVimeo } from './provider/tool/vimeo';
import { ToolYoutube } from './provider/tool/youtube';
import { ToolOther } from './provider/tool/other';

import loadscript = require('load-script2');
declare const video2day: any;
declare const jscolor: any;

const c169 = '1.77778';
const codeAnchor = $('a[name="codedemo"]');
const initProvider = 'youtube';
const jscolorVersion = '2.5.1'; // prev. 2.4.5 

interface IProviderSelectOption {
  code: string;
  option: string;
}

interface IColorSelectOption {
  colorText: string;
  colorValue: string;
}

const artworkOptionValues = {
  standard: ['small', 'big', 'none'],
  slim: ['show', 'none'],
  artworkonly: ['big']
};

enum TemplateTypes {
  NoTemplate = 0,
  TmplBandcamp,
  TmplVideoStart,
  TmplVideoStartEndat,
  TmplGiphy,
  TmplFiddle,
  TmplSlide,
  TmplSlides,
  TmplSoundcloud,
  TmplTed,
  TmplVimeo,
  TmplOther
}

class Videoload2ToolViewmodel {

  $tag: JQuery = null;                        // iframe or script tag if pasted into input text field
  providers: IProviders;                      // all valid provider names
  providerOptions: KnockoutSubscribable<IProviderSelectOption[]>; // select code/option sets for all providers
  providerHandler: ToolProvider;              // object class to handle provider specific processing
  providerTemplate: KnockoutObservable<string>; // provider template enum: serves additional html based on selected provider
  txtIframe: KnockoutObservable<string>;      // pasted iFrame embed code of a desired provider element
  errIframe: KnockoutObservable<string>;      // error message
  hasError: KnockoutComputed<boolean>;        // true=data is not yet valid
  optProvider: KnockoutObservable<string>;    // selected provider name
  prevProvider = '';                          // remember last provider (on change)
  providerImgUrl: KnockoutComputed<string>;   // icon img url of the selected provider
  labelProvider: KnockoutObservable<string>;  // label (name) of the selected provider
  selWidth: KnockoutObservable<string>;       // selected width id: full or pixel
  txtPixel: KnockoutObservable<string>;       // pixel number if selWidth is pixel
  txtPixelEnabled: KnockoutComputed<boolean>; // true=pixel edit enabled
  selRatio: KnockoutObservable<string>;       // selected ratio id: 1.77778 or 1.33333 or custom
  txtRatio: KnockoutObservable<string>;       // ratio value if selRatio is custom
  txtRatioEnabled: KnockoutComputed<boolean>; // true=ratio edit enabled
  txtElementID: KnockoutObservable<string>;   // provider's element id
  txtStart: KnockoutObservable<string>;       // start position in number of seconds
  txtEndat: KnockoutObservable<string>;       // stop position in number of seconds
  chkAsImage: KnockoutObservable<boolean>;    // true=inject Giphy-Element as <img> tag
  txtAlt: KnockoutObservable<string>;         // alt-Parameter for Giphy-Element
  txtSlide: KnockoutObservable<string>;       // start slide of a presentation element
  chkStripe: KnockoutObservable<boolean>;     // true=inject Soundcloud-Element as smaller stripe
  txtColor: KnockoutObservable<string>;       // color code of Soundcloud link
  chkHtml: KnockoutObservable<boolean>;       // true=show html box in fiddle element
  chkCss: KnockoutObservable<boolean>;        // true=show css box in fiddle element
  chkJs: KnockoutObservable<boolean>;         // true=show js box in fiddle element
  chkResult: KnockoutObservable<boolean>;     // true=show result box in fiddle element
  colorOptions: IColorSelectOption[];         // available color scheme options for jsFiddle/bandcamp
  optColor: KnockoutObservable<string>;       // selected color scheme name
  layoutOptions: string[];                    // available layout options for bandcamp
  optLayout: KnockoutObservable<string>;      // selected layout name
  artworkOptions: KnockoutObservableArray<string>; // available artwork options for bandcamp
  optArtwork: KnockoutObservable<string>;     // selected artwork name
  txtBgColor: KnockoutObservable<string>;     // hex code of background color
  txtLinks: KnockoutObservable<string>;       // hex code of links color
  chkTracklist: KnockoutObservable<boolean>;  // true=display a tracklist
  txtTracks: KnockoutObservable<string>;      // number of tracks to show in the tracklist
  chkPoster: KnockoutObservable<boolean>;     // true=display a poster image before mp4 video starts
  selPoster: KnockoutObservable<string>;      // selected filetype extension of poster image
  chkAutoplay: KnockoutObservable<boolean>;   // true=immediately start mp4 video
  chkLang: KnockoutObservable<boolean>;       // true=inject subtitle language German for TED Talks
  $fldIframe: JQuery;                         // fieldset #fldIframe
  $fldOptions: JQuery;                        // fieldset #fldOptions
  optionsVisible: KnockoutObservable<boolean>; // true=$fldOptions are visible
  showAspectRow: KnockoutObservable<boolean>; // true=aspect options are visible
  $errMsg: JQuery;                            // error message in #errMsg
  $fldElementCode: JQuery;                    // snippet code in #fldElementCode
  $fldElementDisplay: JQuery;                 // element's display in #fldElementDisplay

  constructor() {
    const koTextEditOptions: any = { rateLimit: { method: 'notifyWhenChangesStop', timeout: 400 } };
    this.providers = {
      bandcamp: {
        name: 'Bandcamp',
        template: TemplateTypes.TmplBandcamp,
        aspect: false,
        id: 'bandcamp.com',
        vmatch: '\\/album=([0-9]*)'
      },
      dailymotion: {
        name: 'DailyMotion',
        template: TemplateTypes.TmplVideoStart,
        aspect: true,
        id: 'dailymotion.com',
        vmatch: '\\/video\\/([0-9a-z]*)'
      },
      dctptv: {
        name: 'DCTPtv',
        template: TemplateTypes.TmplVideoStart,
        aspect: true,
        id: 'dctp.tv',
        vmatch: '\\/filme\\/(.*)\\/embed'
      },
      filmstarts: {
        name: 'Filmstarts',
        template: TemplateTypes.NoTemplate,
        aspect: true,
        id: 'filmstarts.de',
        vmatch: '\\/([0-9]*)\\.'
      },
      giphy: {
        name: 'Giphy',
        template: TemplateTypes.TmplGiphy,
        aspect: true,
        id: 'giphy.com',
        vmatch: '\\/embed\\/(.*)'
      },
      jsfiddle: {
        name: 'JsFiddle',
        template: TemplateTypes.TmplFiddle,
        aspect: true,
        id: 'jsfiddle.net',
        vmatch: '.net\\/(.*)\\/embedded'
      },
      itemfix: {
        name: 'Itemfix',
        template: TemplateTypes.TmplVideoStart,
        aspect: true,
        id: 'itemfix.com',
        vmatch: '\\/e\\/(.*)'
      },
      slides: {
        name: 'Slides',
        template: TemplateTypes.TmplSlides,
        aspect: true,
        id: 'slides.com',
        vmatch: 'com\\/(.*?)\\/embed'
      },
      slideshare: {
        name: 'Slideshare',
        template: TemplateTypes.TmplSlide,
        aspect: true,
        id: 'slideshare.net',
        vmatch: '\\/embed_code\\/key\\/([0-9a-zA-Z]*)'
      },
      soundcloud: {
        name: 'Soundcloud',
        template: TemplateTypes.TmplSoundcloud,
        aspect: false,
        id: 'soundcloud.com',
        vmatch: 'com\\/tracks\\/(.*?)&'
      },
      speakerdeck: {
        name: 'Speakerdeck',
        template: TemplateTypes.TmplSlide,
        aspect: true,
        id: 'speakerdeck.com',
        vmatch: 'data-id="([0-9a-z]*)'
      },
      ted: {
        name: 'Ted',
        template: TemplateTypes.TmplTed,
        aspect: true,
        id: 'ted.com',
        vmatch: '(\\/talks\\/lang\\/[a-z]{2}\\/|\\/talks\\/)([a-z0-9_]*)'
      },
      vimeo: {
        name: 'Vimeo',
        template: TemplateTypes.TmplVimeo,
        aspect: true,
        id: 'vimeo.com',
        vmatch: '\\/video\\/([0-9]*)'
      },
      vine: {
        name: 'Vine',
        template: TemplateTypes.NoTemplate,
        aspect: true,
        id: 'vine.co',
        vmatch: '\\/v\\/(.*)\\/embed'
      },
      youtube: {
        name: 'Youtube',
        template: TemplateTypes.TmplVideoStartEndat,
        aspect: true,
        id: 'youtube.com',
        vmatch: '\\/embed\\/([A-Za-z0-9_\\-]{11})'
      },
      other: {
        name: 'Other (MP4-Datei)',
        template: TemplateTypes.TmplOther,
        aspect: true,
        id: '',
        vmatch: ''
      }
    };
    this.providerOptions = ko.pureComputed(() => {
      return Object.keys(this.providers).map(option => {
        return { code: option, option: this.providers[option].name };
      }, this);
    });
    this.txtIframe = ko.observable('');
    this.txtIframe.subscribe(this.deconstructIframe, this);
    this.errIframe = ko.observable('');
    this.hasError = ko.pureComputed(function () { return this.errIframe().length > 0 }, this);
    this.optProvider = ko.observable(initProvider);
    this.optProvider.subscribe(this.injectProviderTemplate, this);
    this.providerTemplate = ko.observable(TemplateTypes[this.providers[initProvider].template]);
    this.providerImgUrl = ko.pureComputed(() => `https://neonwilderness.de/public/images/videoload/${this.optProvider()}.png`);
    this.labelProvider = ko.observable(`${this.providers[this.optProvider()].name}-ID:`);
    this.selWidth = ko.observable('full');
    this.txtPixel = ko.observable('').extend(koTextEditOptions);
    this.txtPixelEnabled = ko.pureComputed(() => this.selWidth() === 'pixel');
    this.selRatio = ko.observable(c169);
    this.txtRatio = ko.observable(c169).extend(koTextEditOptions);
    this.txtRatioEnabled = ko.pureComputed(() => this.selRatio() === 'custom');
    this.txtElementID = ko.observable('').extend(koTextEditOptions);
    /* ----- provider/template individual params ----- */
    this.txtStart = ko.observable('').extend(koTextEditOptions);
    this.txtEndat = ko.observable('').extend(koTextEditOptions);
    this.chkAsImage = ko.observable(false);
    this.txtAlt = ko.observable('').extend(koTextEditOptions);
    this.txtSlide = ko.observable('').extend(koTextEditOptions);
    this.chkStripe = ko.observable(false);
    this.txtColor = ko.observable('ff5500').extend(koTextEditOptions);
    this.chkHtml = ko.observable(true);
    this.chkCss = ko.observable(true);
    this.chkJs = ko.observable(true);
    this.chkResult = ko.observable(true);
    this.colorOptions = [
      { colorText: 'dark', colorValue: '333333' },
      { colorText: 'light', colorValue: 'ffffff' }
    ];
    this.optColor = ko.observable(this.colorOptions[0].colorValue);
    this.layoutOptions = Object.keys(artworkOptionValues);
    this.optLayout = ko.observable(this.layoutOptions[0]);
    this.optLayout.subscribe(this.changeOfLayout, this);
    const options: string[] = artworkOptionValues[this.layoutOptions[0]];
    this.artworkOptions = ko.observableArray(options);
    this.optArtwork = ko.observable(options[0]);
    this.txtBgColor = ko.observable(this.colorOptions[1].colorValue);
    this.txtLinks = ko.observable('0687f5').extend(koTextEditOptions);
    this.chkTracklist = ko.observable(false);
    this.txtTracks = ko.observable('');
    this.chkPoster = ko.observable(false);
    this.selPoster = ko.observable('jpg');
    this.chkAutoplay = ko.observable(true);
    this.chkLang = ko.observable(false);

    /* ----- source fields ----- */
    this.$fldOptions = $('#fldOptions');
    this.$fldIframe = $('#fldIframe');
    this.optionsVisible = ko.observable(false);
    this.showAspectRow = ko.observable(true);

    /* ----- result fields ----- */
    this.$errMsg = $('#errMsg');
    this.$fldElementCode = $('#fldElementCode');
    this.$fldElementDisplay = $('#fldElementDisplay');

    /* ----- analyze url querystring for any given params ----- */
    const params: string[] = (location.search.length > 0 ? decodeURIComponent(location.search).substr(1).split('&') : []); // ?provider=youtube&videoid=12345678
    if (params.length > 0) this.initFromQueryString(params);

    /* ----- add generic subscribe function to react to user changes ----- */
    for (const propName in this) {
      if (!this.hasOwnProperty(propName)) continue;
      if (['txtIframe', 'errIframe', 'optProvider', 'labelProvider', 'providerTemplate', 'optLayout', 'artworkOptions', 'optionsVisible', 'showAspectRow'].indexOf(propName) >= 0) continue;
      const observable = this[propName];
      if (ko.isObservable(observable) && !ko.isComputed(observable)) {
        console.log(propName, 'extended.');
        observable.subscribe(this.subscribeExtender, this);
      }
    }

  }

  subscribeExtender(newValue): void {
    console.log(`subscribeExtender: newValue=${newValue}`);
    this.generateHtml();
  }

  changeOfLayout(newLayout: string): void {
    console.log(`changeOfLayout: newLayout=${newLayout}, options=${artworkOptionValues[newLayout]}`);
    this.artworkOptions(artworkOptionValues[newLayout]);
    this.optArtwork(this.artworkOptions()[0]);
  }

  initFromQueryString(params: string[]): void {
    $.each(params, (index, param) => {
      const part = param.split('=');
      if (part.length < 2) return true;
      const provClasses: string[] = part[1].split(' ');
      switch (part[0]) {
        case 'provider':
          this.optProvider(provClasses[0]);
          for (let i = 1; i < provClasses.length; i++) {
            const [key, value = ''] = provClasses[i].split('-');
            console.log('init:', key, 'with', value);
            switch (key) {
              case 'alt':
                this.txtAlt(value);
                break;
              case 'artwork':
                this.optArtwork(value);
                break;
              case 'asimage':
                this.chkAsImage(true);
                break;
              case 'autoplay':
                this.chkAutoplay(true);
                break;
              case 'bgcol': // value is 333333 or ffffff
                this.txtBgColor(value === 'ffffff' ? value : '333333');
                break;
              case 'color': // value is dark or light
                this.optColor(value === 'light' ? 'ffffff' : '333333');
                break;
              case 'endat':
                this.txtEndat(value);
                break;
              case 'image':
                this.selPoster(value);
                break;
              case 'lang':
                this.chkLang(true);
                break;
              case 'layout':
                this.optLayout(value);
                this.artworkOptions(artworkOptionValues[value]);
                break;
              case 'linkcol':
                if (provClasses[0] !== 'bandcamp')
                  this.txtColor(value);
                else
                  this.txtLinks(value);
                break;
              case 'poster':
                this.chkPoster(true);
                break;
              case 'ratio':
                this.selRatio('custom');
                this.txtRatio(value);
                break;
              case 'scope':
                const fiddleScope = value.split(',');
                this.chkHtml(fiddleScope.indexOf('html') >= 0);
                this.chkCss(fiddleScope.indexOf('css') >= 0);
                this.chkJs(fiddleScope.indexOf('js') >= 0);
                this.chkResult(fiddleScope.indexOf('result') >= 0);
                break;
              case 'start':
                this.txtStart(value);
                break;
              case 'slide':
                this.txtSlide(value);
                break;
              case 'stripe':
                this.chkStripe(true);
                break;
              case 'tracklist':
                this.chkTracklist(true);
                this.txtTracks(value);
                break;
              case 'width':
                this.selWidth('pixel');
                this.txtPixel(value);
                break;
            }
          }
          break;
        case 'id':
        case 'videoid':
          this.txtElementID(part[1]);
          break;
      }
    });
    this.injectProviderTemplate(this.optProvider());
    $('html,body').animate({ scrollTop: codeAnchor.offset().top - 20 }, 'slow');
  }

  deconstructIframe(newIframe: string): void {
    if (newIframe.length === 0) {
      this.$tag = null;
      return;
    }
    // make code jQuery accessible
    const $code: JQuery = $('<div>').html(newIframe);
    // try to find/isolate the iframe part
    let $tag: JQuery = $code.find('iframe').eq(0);
    // not found? then try to find a script tag (e.g. used by e.g. Speakerdeck)
    if (!$tag.length) $tag = $code.find('script').eq(0);
    // extract the src attribute from either iframe or script tag
    const src: string = $tag.attr('src') || '';
    // save $tag as a property
    this.$tag = $tag;
    // loop at provider table
    let providerFound = false;
    $.each(this.providers, (key, provider) => {
      // if provider id tag was recognized
      if (provider.id.length > 0 && src.indexOf(provider.id) >= 0) {
        // then remember that provider is valid
        providerFound = true;
        // reset previous provider name to cause rebuild of provider handler
        this.prevProvider = '';
        // set the new provider and init the handler
        this.optProvider(key);
        // and find the provider element's ID
        const matchID = src.match(new RegExp(provider.vmatch, '')) || [];
        // remember element ID if found
        if (matchID.length > 1) this.txtElementID(matchID[matchID.length - 1]);
        console.log('providerID:', this.txtElementID(), 'from matchID:', matchID);
        // stop loop once found
        return false;
      }
    });
    if (!providerFound) {
      this.errIframe('Der iframe-Einbettungscode konnte nicht interpretiert werden (unbekannter Anbieter)!');
    }
  }

  generateHtml() {
    const currProvider = this.optProvider();
    // set up a new provider handler if provider has changed
    console.log('generateHtml: currProv=', currProvider, 'lastProv=', this.prevProvider, 'tag=', this.$tag || 'null');
    if (currProvider !== this.prevProvider) {
      switch (currProvider) {
        case 'bandcamp': this.providerHandler = new ToolBandcamp(this); break;
        case 'dailymotion': this.providerHandler = new ToolDailymotion(this); break;
        case 'dctptv': this.providerHandler = new ToolDctptv(this); break;
        case 'giphy': this.providerHandler = new ToolGiphy(this); break;
        case 'jsfiddle': this.providerHandler = new ToolJsFiddle(this); break;
        case 'slides': this.providerHandler = new ToolSlides(this); break;
        case 'slideshare': this.providerHandler = new ToolSlideshare(this); break;
        case 'speakerdeck': this.providerHandler = new ToolSpeakerdeck(this); break;
        case 'soundcloud': this.providerHandler = new ToolSoundcloud(this); break;
        case 'ted': this.providerHandler = new ToolTed(this); break;
        case 'vimeo': this.providerHandler = new ToolVimeo(this); break;
        case 'youtube': this.providerHandler = new ToolYoutube(this); break;
        case 'other': this.providerHandler = new ToolOther(this); break;
        default: this.providerHandler = new ToolProvider(this); break;
      }
      this.prevProvider = currProvider;
    }
    // generate provider specific html code
    this.providerHandler.initParam();
    const code = this.providerHandler.generateDiv();
    console.log(`generateDIVresult: ${code}, hasError: ${this.hasError()}`);
    // inject code into element view and re-run video2day script if there was no data validation error
    if (this.hasError()) {
      this.$fldElementCode.empty();
      this.$fldElementDisplay.empty();
      this.scrollToFirstVisible(this.$errMsg);
    } else {
      // show code in snippet view
      this.$fldElementCode.html(`<pre class="html">${code}</pre>`)
        .find('.html')
        .snippet('html', { style: 'golden', showNum: false });
      // hot loading of actual element to let the user view the chosen design
      this.$fldElementDisplay.html(code.replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
      video2day.run({ addFlexVideoClass: true, debug: true });
    }
  }

  injectProviderTemplate(newProvider: string): void {
    console.log(`injectProviderTemplate: newProvider=${newProvider}`);
    const provInfo = this.providers[newProvider];
    this.showAspectRow(provInfo.aspect);
    this.providerTemplate(TemplateTypes[provInfo.template]);
    this.labelProvider(newProvider === 'other' ? 'MP4-Datei-URL:' : `${provInfo.name}-ID:`);
    this.generateHtml();
    this.triggerColorPickerInputs();
  }

  triggerColorPickerInputs(): void {
    if ($('.jscolor').length > 0 && window['jscolor']) jscolor.init();
  }

  resetOptions(): void {
    this.$fldOptions.hide(300);
    this.$fldIframe.show(300);
    this.optionsVisible(false);
    this.$tag = null;
    this.txtIframe('');
    this.prevProvider = '';
    this.optProvider(initProvider);
    this.selWidth('full');
    this.txtPixel('');
    this.selRatio(c169);
    this.txtRatio(c169);
    this.txtElementID('');
    this.txtStart('');
    this.txtEndat('');
    this.chkAsImage(false);
    this.txtAlt('');
    this.txtSlide('');
    this.chkStripe(false);
    this.txtColor('ff5500');
    this.chkHtml(true);
    this.chkCss(true);
    this.chkJs(true);
    this.chkResult(true);
    this.optColor(this.colorOptions[0].colorValue);
    this.optLayout(this.layoutOptions[0]);
    this.artworkOptions(artworkOptionValues[this.layoutOptions[0]]);
    this.optArtwork(this.artworkOptions()[0]);
    this.txtBgColor(this.colorOptions[1].colorValue);
    this.txtLinks('0687f5');
    this.chkTracklist(false);
    this.txtTracks('');
    this.chkPoster(false);
    this.selPoster('jpg');
    this.chkAutoplay(true);
    this.chkLang(false);
    this.$fldElementCode.empty();
    this.$fldElementDisplay.empty();
  }

  setRatio(): boolean {
    const ratio = this.selRatio();
    if (ratio === 'custom') {
      this.txtRatio('');
      $('#txtRatio').focus();
    } else
      this.txtRatio(ratio);
    return true;
  }

  private scrollToFirstVisible(jqElements: JQuery, duration = 600, offset = 50) {
    const el: JQuery = jqElements.filter(':visible').eq(0);
    if (el.length) $('html,body').animate({ scrollTop: (el.offset().top - offset) }, duration);
  }

  toggle(selector: string, duration = 600, offset = 50) {
    this.optionsVisible(!this.optionsVisible());
    const $el: JQuery = $(selector);
    $el.toggle(duration);
    this.scrollToFirstVisible($el, duration, offset);
  }

}

(function ($) {

  $(function () {

    // display all existing twoday tipps in the top sidebar item
    const $item: JQuery = $(".sidebarItem:first");
    if ($item.length && location.host.split('.')[0] === 'neonwilderness') {
      $.get("/topics/Sch%C3%B6ner+Bloggen/", function (data) {
        let html = '';
        const wrapTipp = '<div class="sideHistoryItem clearfix"><div class="sideHistoryTitle">{tip}</div></div>';
        $(data).find('.storyTitle').each(function () {
          html += wrapTipp.replace('{tip}', $(this).html().replace('Twoday-', ''));
        });
        if (html.length > 0) {
          $item.find('h4').text('Twoday-Tipps');
          $item.find('.sidebarItemBody').html(html);
          $('.sidebarItem:gt(0)').hide(0);
        }
      });
    }

    // prepend the backlink to the videos tip to the top right of the story
    const $prep: JQuery = $('#prependStory');
    $prep.closest('.story').prepend($prep.html());

    // create viewmodel from class
    const vm: Videoload2ToolViewmodel = new Videoload2ToolViewmodel();
    // and link to knockout bindings
    ko.applyBindings(vm, document.getElementById('videotool2'));

    // load colorpicker helper script
    loadscript(`https://cdnjs.cloudflare.com/ajax/libs/jscolor/${jscolorVersion}/jscolor.min.js`)
      .catch(err => {
        console.log(`>>>Error: jscolor could not be loaded [${err}].`);
      });

  });

})(jQuery);