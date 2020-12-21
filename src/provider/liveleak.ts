/*
 Liveleak-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Liveleak extends Provider {

    source = 'https://www.liveleak.com/e/{_id}&start={_starttime}';
    _starttime: string;

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('liveleak');
    }

    init(options: IInstanceOptions): void {
        super.init(options);
        this._starttime = (options.hasOwnProperty('start') ? parseInt(options.start).toString() : '');
    }

}