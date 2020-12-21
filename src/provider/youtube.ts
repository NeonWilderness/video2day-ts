/*
 YouTube-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Youtube extends Provider {

    source = 'https://www.youtube.com/embed/{_id}?start={_starttime}&end={_endtime}';
    _starttime: string;
    _endtime: string;

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('youtube');
        this._addAttr = ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"';
    }

    init(options: IInstanceOptions): void {
        super.init(options);
        this._starttime = (options.hasOwnProperty('start') ? parseInt(options.start).toString() : '');
        this._endtime = (options.hasOwnProperty('endat') ? parseInt(options.endat).toString() : '');
    }

}