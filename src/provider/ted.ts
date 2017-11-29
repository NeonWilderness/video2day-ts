/*
 TED-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Ted extends Provider {

    source: string = 'https://embed.ted.com/talks/{_lang}{_id}';
    _lang: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('slideshare');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._lang = (options.hasOwnProperty('lang') ? 'lang/de/' : '');
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return this.fillParams(frameTemplate.replace('_src', this.source));
    }

}