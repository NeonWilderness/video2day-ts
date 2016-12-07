/*
 Dailymotion-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Dailymotion extends Provider {

    source: string = '//www.dailymotion.com/embed/video/{_id}?start={_starttime}';
    _starttime: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('dailymotion');
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