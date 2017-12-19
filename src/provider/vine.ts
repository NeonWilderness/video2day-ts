/*
 Vine-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Vine extends Provider {

    source: string = 'https://vine.co/v/{_id}/embed/simple';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('vine');
    }

}