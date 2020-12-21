/*
 dctptv-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Dctptv extends Provider {

    source = 'https://www.dctp.tv/filme/{_id}/embed/?t={_starttime}';
    _starttime: string;

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('dctptv');
    }

    init(options: IInstanceOptions): void {
        super.init(options);
        this._starttime = (options.hasOwnProperty('start') ? this.formatTime(parseInt(options.start)) : '');
    }

    formatTime(seconds: number): string {
        return `${Math.floor(seconds / 60)}m${seconds % 60}s`;
    }

}