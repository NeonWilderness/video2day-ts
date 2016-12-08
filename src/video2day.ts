'use strict';

import { IInstanceOptions, FixedHeightAttribute, FixedWidthAttribute, FixedRatioAttribute, Provider } from './provider/generic';
import { Bandcamp } from './provider/bandcamp';
import { Dailymotion } from './provider/dailymotion';
import { Dctptv } from './provider/dctptv';
import { Funnyordie } from './provider/funnyordie';
import { Giphy } from './provider/giphy';
import { Jsfiddle } from './provider/jsfiddle';
import { Liveleak } from './provider/liveleak';
import { Metacafe } from './provider/metacafe';
import { Slideshare } from './provider/slideshare';
import { Soundcloud } from './provider/soundcloud';
import { Speakerdeck } from './provider/speakerdeck';
import { Vevo } from './provider/vevo';
import { Vimeo } from './provider/vimeo';
import { Vine } from './provider/vine';
import { Youtube } from './provider/youtube';
import { Other } from './provider/other';

import { ClassListPolyfill } from './classlistpolyfill';
import extend = require('extend-shallow');
import loadscript = require('load-script');

const flex: string = 'flex-video';
const useVideoJsRelease = '5.12.6';

export interface IGeneratorDefaults {
    addFlexVideoClass?: boolean;
    contentClass?: string;
    debug?: boolean;
    maxWidth?: number;
    position?: string;
    posterSize?: string;
    selector?: string;
    useVideoJS?: boolean;
}

export interface IProviders {
    bandcamp: any;
    dailymotion: any;
    dctptv: any;
    funnyordie: any;
    giphy: any;
    jsfiddle: any;
    liveleak: any;
    metacafe: any;
    slideshare: any;
    soundcloud: any;
    speakerdeck: any;
    vevo: any;
    vimeo: any;
    vine: any;
    youtube: any;
    other: any;
}

export class Framedispatcher {
    version: string = '2.0.1';
    defaults: IGeneratorDefaults = {
        addFlexVideoClass: false,
        contentClass: 'storyContent',
        debug: false,
        maxWidth: -1,
        position: 'bottom',
        posterSize: 'cover',
        selector: '.html5video',
        useVideoJS: true
    };
    options: IGeneratorDefaults;
    providers: IProviders = {
        bandcamp: new Bandcamp,
        dailymotion: new Dailymotion,
        dctptv: new Dctptv,
        funnyordie: new Funnyordie,
        giphy: new Giphy,
        jsfiddle: new Jsfiddle,
        liveleak: new Liveleak,
        metacafe: new Metacafe,
        slideshare: new Slideshare,
        soundcloud: new Soundcloud,
        speakerdeck: new Speakerdeck,
        vevo: new Vevo,
        vimeo: new Vimeo,
        vine: new Vine,
        youtube: new Youtube,
        other: new Other
    };
    providerNames: string[];
    instances: any;

    constructor(){
        this.providerNames = Object.keys(this.providers);
    }

    private errorMessage(text: string, element: any) : void {
        element.innerHTML = `<p class="message">${text}</p>`;
    }

    private log(item: any) : void {
        if (this.options.debug) console.log(item);
    }

    private listProviders(){
        console.log(`Available Providers(#${this.providerNames.length}):`);
        this.providerNames.forEach(providerName => {
            let provider = <Provider>this.providers[providerName];
            provider.log();
        });
    }

    private dispatch(instanceOptions: IInstanceOptions) : void {
        let element = instanceOptions.instance;
        if (!instanceOptions.hasOwnProperty('provider')) {
            this.errorMessage(`Bitte einen gültigen Typ (${this.providerNames.join(", ")}) im class-Parameter ergänzen!`, element);
            return;
        }
        if (!instanceOptions.hasOwnProperty('id')) {
            this.errorMessage('Bitte die ID bzw. -URL des Anzeigeobjekts im Parameter "id" ergänzen!', element);
            return;
        }
        let result:string = this.providers[instanceOptions.provider].generate(instanceOptions);
        this.log(result);
        let html = (result.substr(0, 1) === '<' ? result : this.errorMessage(result, element));
        if (this.options.position === 'bottom') {
            element.innerHTML += html;
        } else {
            element.innerHTML = html + element.innerHTML;
        }
        if (this.options.addFlexVideoClass) {
            this.resizeElement(element);
        }
    }

    private getWidth(element: any) : number {
        return element.getBoundingClientRect().width;
        //return parseFloat(window.getComputedStyle(element).width);
    }

    private getContentWidth(element: any) : number {
        let parent = element.parentNode;
        let classList = (parent.hasOwnProperty('classList') ? parent.classList : new ClassListPolyfill(parent.className));
        while(!(classList.contains(this.options.contentClass) || parent.nodeName==="BODY")) parent = parent.parentNode;
        return (parent.nodeName==="BODY" ? 0 : this.getWidth(parent));
    }

    private getInstanceOptions(instance: HTMLElement) : IInstanceOptions {
        let options: IInstanceOptions = {};
        let classList = new ClassListPolyfill(
                        instance.hasOwnProperty('classList') ?
                        instance.classList :
                        instance.className
                        ).classList;
        for (let item of classList) {
            let [option, value] = item.split('-');
            value = value || '';
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
                    if (this.providerNames.indexOf(option)>=0) options.provider = option;
            }
        }
        if (!options.hasOwnProperty('ratio')) options.ratio = 16/9;
        if (!options.hasOwnProperty('width')){
            let storyWidth = this.getContentWidth(instance);
            let containerWidth = this.getWidth(instance);
            options.width = (storyWidth!==0 && storyWidth<containerWidth ? storyWidth : containerWidth);
        }
        if (this.options.maxWidth>0 && options.width>this.options.maxWidth) options.width = this.options.maxWidth;
        options.height = Math.round(options.width/options.ratio);
        options.id = instance.id;
        options.instance = instance;
        return options;
    }

    private setPosterSize(): void {
        for (let el of <Node[]><any>document.querySelectorAll('.vjs-poster')) {
            (<HTMLElement>el).style.backgroundSize = this.options.posterSize;
        }
    }

    private getAttribute(el: HTMLElement, attr: string): number {
        let value: string = el.getAttribute(`data-${attr}`) || '0';
        return (attr==='ratio' ? parseFloat(value) : parseInt(value));
    }

    private resizeElement(el: HTMLElement): void {
        // size of surrounding container
        let containerWidth = el.clientWidth;
        // size of element (as defined by user)
        let elementWidth: number = this.getAttribute(el, FixedWidthAttribute);
        // fixed height in case of special providers, e.g. bandcamp, soundcloud (elements with a fixed height)
        let fixheight: number = this.getAttribute(el, FixedHeightAttribute);
        // smaller or exactly fitting element?
        if (elementWidth <= containerWidth) {
            // yes, then flex class and padding-bottom percentage is unnecessary
            el.className = el.className.replace(/\s*flex-video/, '');
            el.style.paddingBottom = '';
        } else {
            // no, then make element responsive by adding flex class and a padding-bottom percentage
            if (el.className.indexOf(flex)<0) el.className += ` ${flex}`;
            let ratio: number = (fixheight
                ? Math.round(fixheight / containerWidth * 100000) / 100000
                : this.getAttribute(el, FixedRatioAttribute));
            if ( ratio !== 9/16 ) el.style.paddingBottom = (ratio * 100) + '%';
        }
        this.log(`height: ${fixheight}, width: ${elementWidth}, containerWidth: ${containerWidth}`);
        this.log(`id: ${el.id}, padding-bottom: ${el.style.paddingBottom}`);
    }

    private specialResize(): void {
        for (let el of this.instances) {
            this.resizeElement(el);
        }
    }

    run(useroptions: IGeneratorDefaults){
        this.options = extend({}, this.defaults, useroptions || {});
        this.log(`Video2day version ${this.version}`);
        this.log(this.options);

        if (this.options.debug) this.listProviders();

        this.instances = document.querySelectorAll(this.options.selector);
        this.log(`#${this.instances.length} instance${(this.instances.length>1 ? 's' : '')} found.`);

        if (this.instances.length<1) return;

        if (this.options.addFlexVideoClass) {
            this.log('Added resize-event.');
            window.addEventListener('resize', this.specialResize.bind(this));
        }

        let html5Videoplayer: boolean = false;
        for (let instance of this.instances) {
            let instanceOptions = this.getInstanceOptions(instance);
            this.dispatch(instanceOptions);
            this.log(instanceOptions);
            html5Videoplayer = html5Videoplayer || (instanceOptions.provider==='other');
        }

        if (html5Videoplayer && this.options.useVideoJS) {
            if (typeof <any>window['videojs']==='undefined') {
                let self = this;
                loadscript(`//vjs.zencdn.net/${useVideoJsRelease}/video.min.js`, function (err) {
                    if (err) {
                        console.log('>>>Error: videojs could not be loaded.');
                    }
                    else {
                        let styleSheet = document.createElement('link');
                        styleSheet.rel = 'stylesheet';
                        styleSheet.href = `//vjs.zencdn.net/${useVideoJsRelease}/video-js.min.css`;
                        document.getElementsByTagName('head')[0].appendChild(styleSheet);
                        self.setPosterSize();
                        self.log('Videojs/css successfully loaded.');
                    }
                });
            } else {
                // re-generate all videojs instances
                for (let el of <Node[]><any>document.querySelectorAll('.video-js')) {
                    window['videojs'](el, {});
                }
                this.setPosterSize();
            }
        }
    }

}