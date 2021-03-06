/*
 Slideshare-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Slideshare extends Provider {

    source = 'https://www.slideshare.net/slideshow/embed_code/key/{_id}?startSlide={_slide}';
    _slide: string;

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('slideshare');
    }

    init(options: IInstanceOptions): void {
        super.init(options);
        this._slide = (options.hasOwnProperty('slide') ? options.slide.toString() : '');
    }

}