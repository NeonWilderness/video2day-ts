/*
 Speakerdeck-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Speakerdeck extends Provider {

    source = 'https://speakerdeck.com/player/{_id}?slide={_slide}';
    _slide: string;

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('speakerdeck');
    }

    init(options: IInstanceOptions): void {
        super.init(options);
        this._slide = (options.hasOwnProperty('slide') ? options.slide.toString() : '');
    }

}