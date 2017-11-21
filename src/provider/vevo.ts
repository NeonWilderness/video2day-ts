/*
 Vevo-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Vevo extends Provider {

    source: string = 'https://embed.vevo.com?isrc={_id}';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('vevo');
    }

    init(options: IInstanceOptions){
        super.init(options);
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return this.fillParams(frameTemplate.replace('_src', this.source));
    }

}