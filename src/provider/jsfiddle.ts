/*
 Jsfiddle-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

enum ColorValues {
    light,
    dark
}

export class Jsfiddle extends Provider {

    source: string = 'https://jsfiddle.net/{_id}/embedded/{_scope}/{_color}/';
    _scope: string;
    _color: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('jsfiddle');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._scope = (options.hasOwnProperty('scope') ? options.scope : 'js,html,css,result');
        this._color = (options.hasOwnProperty('color') ? options.color : 'dark');
        if (typeof ColorValues[ColorValues[this._color]]==='undefined')
            this.badParam = `Ungültiger Wert "${this._color}" für Parameter color. Erlaubt sind: light, dark.`;

    }

}