/*
 Funnyordie-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Funnyordie extends Provider {

    source: string = 'https://www.funnyordie.com/embed/{_id}';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('funnyordie');
    }

}