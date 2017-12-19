/*
 Slides-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

enum StyleValues {
    light,
    dark
}

export class Slides extends Provider {

    source: string = 'https://slid.es/{_id}/embed{_slide}?style={_style}';
    _slide: string;
    _style: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('slides');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._slide = (options.hasOwnProperty('slide') ? '/#/'+(options.slide-1) : '');
        this._style = (options.hasOwnProperty('color') ? options.color : 'dark');
        if (typeof StyleValues[StyleValues[this._style]]==='undefined')
            this.badParam = `Ungültiger Wert "${this._style}" für Parameter color. Erlaubt sind: light, dark.`;
    }

}