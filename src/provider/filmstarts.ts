/*
 Filmstarts-Plugin
 */

import { frameTemplate, IInstanceOptions, Provider } from './generic';

export class Filmstarts extends Provider {

    source: string = 'http://www.filmstarts.de/_video/iblogvision.aspx?cmedia={_id}';

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('filmstarts');
    }

    init(options: IInstanceOptions){
        super.init(options);
    }

    generate(options: IInstanceOptions) : string {
        this.init(options);
        return this.fillParams(frameTemplate.replace('_src', this.source));
    }

}