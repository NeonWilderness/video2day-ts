/*
 Dailymotion-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Dailymotion extends Provider {

    source: string = 'https://www.dailymotion.com/embed/video/{_id}?start={_starttime}';
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

}