/*
 Speakerdeck-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Speakerdeck extends Provider {

    source: string = '//speakerdeck.com/player/{_id}?slide={_slide}';
    _slide: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('speakerdeck');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._slide = (options.hasOwnProperty('slide') ? options.slide.toString() : '');
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return (this.badParam.length ? this.badParam : this.fillParams(frameTemplate.replace('_src', this.source)));
    }

}