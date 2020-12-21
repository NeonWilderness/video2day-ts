/*
 Funnyordie-Plugin
 */

import { Provider } from './generic';

export class Funnyordie extends Provider {

    source = 'https://www.funnyordie.com/embed/{_id}';

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('funnyordie');
    }

}