/*
 Itemfix-Plugin
 */

import { Provider } from './generic';

export class Itemfix extends Provider {

    source = 'https://www.itemfix.com/e/{_id}';

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('itemfix');
    }

}