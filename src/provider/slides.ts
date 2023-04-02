/*
 Slides-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

enum StyleValues {
    light,
    dark
}

export class Slides extends Provider {

    source = 'https://slides.com/{_id}/embed?style={_style}';
    _style: string;

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('slides');
    }

    init(options: IInstanceOptions): void {
        super.init(options);
        this._style = (options.hasOwnProperty('color') ? options.color : 'dark');
        if (typeof StyleValues[StyleValues[this._style]] === 'undefined')
            this.badParam = `Ungültiger Wert "${this._style}" für Parameter color. Erlaubt sind: light, dark.`;
    }

}