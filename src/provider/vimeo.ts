/*
 Vimeo-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Vimeo extends Provider {

    source = `https://player.vimeo.com/video/{_id}{_linkcol}`;
    _linkcol: string;
    
    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('vimeo');
        this._addAttr = ' allow="autoplay; fullscreen; picture-in-picture"';
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._linkcol = (options.hasOwnProperty('linkcol') ? `?color=${options.linkcol}` : '');
    }

}