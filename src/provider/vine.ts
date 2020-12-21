/*
 Vine-Plugin
 */

import { Provider } from './generic';

export class Vine extends Provider {

    source = 'https://vine.co/v/{_id}/embed/simple';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('vine');
    }

}