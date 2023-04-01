'use strict';

import {
  IInstanceOptions,
  ErrorMessage,
  FixedHeightAttribute,
  FixedWidthAttribute,
  FixedRatioAttribute,
  Provider
} from './provider/generic';
import { Bandcamp } from './provider/bandcamp';
import { Dailymotion } from './provider/dailymotion';
import { Dctptv } from './provider/dctptv';
import { Filmstarts } from './provider/filmstarts';
import { Giphy } from './provider/giphy';
import { Jsfiddle } from './provider/jsfiddle';
import { Itemfix } from './provider/itemfix';
import { Slides } from './provider/slides';
import { Slideshare } from './provider/slideshare';
import { Soundcloud } from './provider/soundcloud';
import { Speakerdeck } from './provider/speakerdeck';
import { Ted } from './provider/ted';
import { Vimeo } from './provider/vimeo';
import { Vine } from './provider/vine';
import { Youtube } from './provider/youtube';
import { Other } from './provider/other';

import { ClassListPolyfill } from './classlistpolyfill';
import loadscript = require('load-script2');
import lozad = require('lozad');
import toolVersion from './version';

const flex = 'flex-video';
const useVideoJsRelease = '7.11.0'; // 7.2.3

export interface IGeneratorDefaults {
  addFlexVideoClass?: boolean;
  contentClass?: string;
  debug?: boolean;
  exportRun?: boolean;
  lazyLoad?: boolean;
  maxWidth?: number;
  position?: string;
  posterSize?: string;
  rootMargin?: string;
  selector?: string;
  treshold?: number;
  useVideoJS?: boolean;
}

export interface IProviders {
  bandcamp: any;
  dailymotion: any;
  dctptv: any;
  filmstarts: any;
  giphy: any;
  itemfix: any;
  jsfiddle: any;
  slides: any;
  slideshare: any;
  soundcloud: any;
  speakerdeck: any;
  ted: any;
  vimeo: any;
  vine: any;
  youtube: any;
  other: any;
}

export class Framedispatcher {
  version: string = toolVersion;
  defaults: IGeneratorDefaults = {
    addFlexVideoClass: false,
    contentClass: 'storyContent',
    debug: false,
    exportRun: false,
    lazyLoad: false,
    maxWidth: -1,
    position: 'bottom',
    posterSize: 'cover',
    rootMargin: '20px 0px',
    selector: '.html5video',
    treshold: 0.05,
    useVideoJS: true
  };
  options: IGeneratorDefaults;
  providers: IProviders = {
    bandcamp: new Bandcamp,
    dailymotion: new Dailymotion,
    dctptv: new Dctptv,
    filmstarts: new Filmstarts,
    giphy: new Giphy,
    itemfix: new Itemfix,
    jsfiddle: new Jsfiddle,
    slides: new Slides,
    slideshare: new Slideshare,
    soundcloud: new Soundcloud,
    speakerdeck: new Speakerdeck,
    ted: new Ted,
    vimeo: new Vimeo,
    vine: new Vine,
    youtube: new Youtube,
    other: new Other
  };
  providerNames: string[];
  instances: any;

  constructor() {
    this.providerNames = Object.keys(this.providers);
  }

  private log(item: any): void {
    if (this.options.debug) console.log(item);
  }

  private listProviders() {
    console.log(`Available Providers(#${this.providerNames.length}):`);
    this.providerNames.forEach(providerName => {
      const provider = <Provider>this.providers[providerName];
      provider.log();
    });
  }

  private dispatch(instanceOptions: IInstanceOptions): void {
    const element = instanceOptions.instance;
    if (!instanceOptions.hasOwnProperty('provider')) {
      ErrorMessage(`Bitte einen gültigen Typ (${this.providerNames.join(", ")}) im class-Parameter ergänzen!`, element);
      return;
    }
    if (!instanceOptions.hasOwnProperty('id')) {
      ErrorMessage('Bitte die ID bzw. -URL des Anzeigeobjekts im Parameter "id" ergänzen!', element);
      return;
    }
    const provider = this.providers[instanceOptions.provider];
    if (instanceOptions.provider !== 'other' && provider.hasHttpSourceInSecureMode()) {
      ErrorMessage(`Im aktuellen https-Browsermodus kann kein ${instanceOptions.provider}-Element angezeigt werden, da dieser Anbieter keinen https-Zugriff anbietet.`, element);
      return;
    }
    instanceOptions.lazyload = this.options.lazyLoad;
    provider.generate(instanceOptions, this.options.position, this.options.exportRun);

    if (this.options.addFlexVideoClass) {
      this.resizeElement(element);
    }
  }

  private getWidth(element: any): number {
    return element.getBoundingClientRect().width;
  }

  private getContentWidth(element: any): number {
    let parent = element.parentNode;
    const classList = (parent.hasOwnProperty('classList') ? parent.classList : new ClassListPolyfill(parent.className));
    while (!(classList.contains(this.options.contentClass) || parent.nodeName === "BODY")) parent = parent.parentNode;
    return (parent.nodeName === "BODY" ? 0 : this.getWidth(parent));
  }

  private parseInstanceOptions(instance: HTMLElement): IInstanceOptions {
    const options: IInstanceOptions = {};
    const classList = new ClassListPolyfill(
      instance.hasOwnProperty('classList') ?
        instance.classList :
        instance.className
    ).classList;
    for (const item of classList) {
      const [option, value = ''] = item.split('-');
      switch (option) {
        case 'alt':
        case 'artwork':
        case 'bgcol':
        case 'color':
        case 'endat':
        case 'image':
        case 'layout':
        case 'linkcol':
        case 'scope':
        case 'start':
          options[option] = value;
          break;
        case 'asimage':
        case 'autoplay':
        case 'lang':
        case 'poster':
        case 'stripe':
          options[option] = true;
          break;
        case 'tracklist':
          options[option] = (value ? parseInt(value) : 2);
          break;
        case 'slide':
        case 'width':
          options[option] = parseInt(value);
          break;
        case 'ratio':
          options[option] = parseFloat(value);
          break;
        default:
          if (this.providerNames.indexOf(option) >= 0) options.provider = option;
      }
    }
    if (!options.hasOwnProperty('ratio')) options.ratio = 16 / 9;
    if (!options.hasOwnProperty('width')) {
      const storyWidth = this.getContentWidth(instance);
      const containerWidth = this.getWidth(instance);
      options.width = (storyWidth !== 0 && storyWidth < containerWidth ? storyWidth : containerWidth);
    }
    if (this.options.maxWidth > 0 && options.width > this.options.maxWidth) options.width = this.options.maxWidth;
    options.height = Math.round(options.width / options.ratio);
    options.id = instance.id;
    options.instance = instance;
    return options;
  }

  private setPosterSize(): void {
    for (const el of <Node[]><any>document.querySelectorAll('.vjs-poster')) {
      (<HTMLElement>el).style.backgroundSize = this.options.posterSize;
    }
  }

  private getAttribute(el: HTMLElement, attr: string): number {
    const value: string = el.getAttribute(`data-${attr}`) || '0';
    return (attr === 'ratio' ? parseFloat(value) : parseInt(value));
  }

  private resizeElement(el: HTMLElement): void {
    // size of surrounding container
    const containerWidth = el.clientWidth;
    // size of element (as defined by user)
    const elementWidth: number = this.getAttribute(el, FixedWidthAttribute);
    // fixed height in case of special providers, e.g. bandcamp, soundcloud (elements with a fixed height)
    const fixheight: number = this.getAttribute(el, FixedHeightAttribute);
    // smaller or exactly fitting element?
    if (elementWidth <= containerWidth) {
      // yes, then flex class and padding-bottom percentage is unnecessary
      el.className = el.className.replace(/\s*flex-video/, '');
      el.style.paddingBottom = '';
    } else {
      // no, then make element responsive by adding flex class and a padding-bottom percentage
      if (el.className.indexOf(flex) < 0) el.className += ` ${flex}`;
      const ratio: number = (fixheight
        ? Math.round(fixheight / containerWidth * 100000) / 100000
        : this.getAttribute(el, FixedRatioAttribute));
      if (ratio !== 9 / 16) el.style.paddingBottom = (ratio * 100) + '%';
    }
    this.log(`height: ${fixheight}, width: ${elementWidth}, containerWidth: ${containerWidth}`);
    this.log(`id: ${el.id}, padding-bottom: ${el.style.paddingBottom}`);
  }

  private specialResize(): void {
    for (const el of this.instances) {
      this.resizeElement(el);
    }
  }

  private forceAutoplay(): void {
    setTimeout(() => {
      for (const el of <Node[]><any>document.querySelectorAll('.autoplay>video')) {
        const vid = window['videojs'](el, null);
        vid.autoplay('muted');
        vid.loop(true);
        vid.play();
      }
    }, 500);
  }

  run(useroptions: IGeneratorDefaults): void {
    this.options = Object.assign({}, this.defaults, useroptions || {});
    this.log(`Video2day version ${this.version}`);
    this.log(JSON.stringify(this.options, null, 2));

    if (this.options.debug) this.listProviders();

    this.instances = document.querySelectorAll(this.options.selector);
    this.log(`#${this.instances.length} instance${(this.instances.length > 1 ? 's' : '')} found.`);

    if (this.instances.length < 1) return;

    if (this.options.addFlexVideoClass) {
      this.log('Added resize-event.');
      window.addEventListener('resize', this.specialResize.bind(this));
    }

    this.options.lazyLoad = this.options.lazyLoad && !!window['IntersectionObserver'];
    if (this.options.lazyLoad) this.log('LazyLoad is active.');

    let html5Videoplayer = false;
    for (const instance of this.instances) {
      const instanceOptions = this.parseInstanceOptions(instance);
      this.dispatch(instanceOptions);
      this.log(instanceOptions);
      html5Videoplayer = html5Videoplayer || (instanceOptions.provider === 'other');
    }

    if (this.options.lazyLoad) {
      const observer = lozad('.lozad', {
        rootMargin: this.options.rootMargin,
        threshold: this.options.treshold
      });
      observer.observe();
    }

    if (html5Videoplayer && this.options.useVideoJS) {
      if (typeof <any>window['videojs'] === 'undefined') {
        // load videojs script & css if not yet loaded
        loadscript(`https://vjs.zencdn.net/${useVideoJsRelease}/video.min.js`)
          .then(() => {
            const styleSheet = document.createElement('link');
            styleSheet.rel = 'stylesheet';
            styleSheet.href = `https://vjs.zencdn.net/${useVideoJsRelease}/video-js.min.css`;
            document.getElementsByTagName('head')[0].appendChild(styleSheet);
            this.setPosterSize();
            this.log('Videojs/css successfully loaded.');
            this.forceAutoplay();
          })
          .catch(err => {
            console.log(`>>>Error: Videojs could not be loaded [${err}].`);
          });
      } else {
        // re-generate all videojs instances
        for (const el of <Node[]><any>document.querySelectorAll('.video-js')) {
          window['videojs'](el, {});
        }
        this.setPosterSize();
        this.forceAutoplay();
      }
    }
  }

}