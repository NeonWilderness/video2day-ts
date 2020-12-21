/*
 TED-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Ted extends Provider {

    source = 'https://embed.ted.com/talks/{_lang}{_id}';
    _lang: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('ted');
    }

    init(options: IInstanceOptions): void {
        super.init(options);
        this._lang = (options.hasOwnProperty('lang') ? 'lang/de/' : '');
    }

}