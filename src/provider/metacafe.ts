/*
 Metacafe-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Metacafe extends Provider {

    source: string = 'http://www.metacafe.com/embed/{_id}/';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('metacafe');
    }

}