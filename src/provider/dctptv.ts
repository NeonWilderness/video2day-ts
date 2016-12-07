/*
 dctptv-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Dctptv extends Provider {

    source: string = 'http://www.dctp.tv/filme/{_id}/embed/?t={_starttime}';
    _starttime: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('dctptv');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._starttime = (options.hasOwnProperty('start') ? this.formatTime(parseInt(options.start)) : '');
    }

    formatTime(seconds: number): string {
        return `${Math.floor(seconds/60)}m${seconds%60}s`;
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return this.fillParams(frameTemplate.replace('_src', this.source));
    }

}