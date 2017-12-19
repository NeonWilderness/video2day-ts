/*
 Videojs-Player-Plugin
 */

import { playerTemplate, IInstanceOptions, Provider } from './generic';

export class Other extends Provider {

    _image: string;
    _poster: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('other');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._image = (options.hasOwnProperty('image') ? options.image : 'jpg');
        this._poster = (options.hasOwnProperty('poster') ? this._id.substr(0,this._id.lastIndexOf('.')+1) + this._image : '');
    }

    generate(options: IInstanceOptions, position: string) : void {
        this.init(options);
        this.render(this.fillParams(playerTemplate), position);
    }

}