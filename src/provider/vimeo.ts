/*
 Vimeo-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Vimeo extends Provider {

    source: string = '//player.vimeo.com/video/{_id}';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('vimeo');
    }

    init(options: IInstanceOptions){
        super.init(options);
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return this.fillParams(frameTemplate.replace('_src', this.source));
    }

}