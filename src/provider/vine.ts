/*
 Vine-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Vine extends Provider {

    source: string = 'https://vine.co/v/{_id}/embed/simple';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('vine');
    }

    init(options: IInstanceOptions){
        super.init(options);
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return this.fillParams(frameTemplate.replace('_src', this.source));
    }

}