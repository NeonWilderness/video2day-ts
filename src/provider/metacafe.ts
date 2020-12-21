/*
 Metacafe-Plugin
 */

import { Provider } from './generic';

export class Metacafe extends Provider {

    source = 'https://www.metacafe.com/embed/{_id}/';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('metacafe');
    }

}