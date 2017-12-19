/*
 Vevo-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Vevo extends Provider {

    source: string = 'https://embed.vevo.com?isrc={_id}';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('vevo');
    }

}