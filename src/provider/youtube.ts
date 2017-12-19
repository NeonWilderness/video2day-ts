/*
 YouTube-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Youtube extends Provider {

    source: string = 'https://www.youtube.com/embed/{_id}?start={_starttime}&end={_endtime}';
    _starttime: string;
    _endtime: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('youtube');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._starttime = (options.hasOwnProperty('start') ? parseInt(options.start).toString() : '');
        this._endtime = (options.hasOwnProperty('endat') ? parseInt(options.endat).toString() : '');
    }

}