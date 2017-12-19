/*
 Filmstarts-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export class Filmstarts extends Provider {

    source: string = 'http://www.filmstarts.de/_video/iblogvision.aspx?cmedia={_id}';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('filmstarts');
    }

}