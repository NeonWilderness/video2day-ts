/*
 Metacafe-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Metacafe extends Provider {

    source: string = 'http://www.metacafe.com/embed/{_id}/';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('metacafe');
    }

    init(options: IInstanceOptions){
        super.init(options);
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return this.fillParams(frameTemplate.replace('_src', this.source));
    }

}