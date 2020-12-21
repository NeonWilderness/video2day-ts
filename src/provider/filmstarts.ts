/*
 Filmstarts-Plugin
 */

import { Provider } from './generic';

export class Filmstarts extends Provider {

    source = 'http://player.filmstarts.de/{_id}.html';

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('filmstarts');
    }

}