/*
 Giphy-Plugin
 */

import { frameTemplate, imageTemplate, IInstanceOptions, Provider } from './generic';

export class Giphy extends Provider {

    source: string = 'https://giphy.com/embed/{_id}';
    sourceimg: string = 'https://media.giphy.com/media/{_id}/giphy.gif';
    _alt: string;
    _asimage: boolean;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('giphy');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._alt = (options.hasOwnProperty('alt') ? options.alt.replace(/_/g, ' ') : `Giphy-${options.id}`);
        this._asimage = options.hasOwnProperty('asimage');
    }

    generate(options: IInstanceOptions, position: string, exportRun: boolean) : void {
        this.init(options);
        let template: string = (
            this._asimage ?
            imageTemplate.replace('_src', this.sourceimg) :
            frameTemplate.replace('_src', this.source)
        );
        this.render(this.fillParams(template), exportRun, position);
    }

}