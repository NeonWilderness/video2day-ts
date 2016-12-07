/*
 Funnyordie-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Funnyordie extends Provider {

    source: string = 'http://www.funnyordie.com/embed/{_id}';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('funnyordie');
    }

    init(options: IInstanceOptions){
        super.init(options);
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return this.fillParams(frameTemplate.replace('_src', this.source));
    }

}