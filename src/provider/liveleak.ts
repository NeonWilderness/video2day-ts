/*
 Liveleak-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Liveleak extends Provider {

    source: string = 'https://www.liveleak.com/ll_embed?f={_id}&start={_starttime}';
    _starttime: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('liveleak');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._starttime = (options.hasOwnProperty('start') ? parseInt(options.start).toString() : '');
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return this.fillParams(frameTemplate.replace('_src', this.source));
    }

}