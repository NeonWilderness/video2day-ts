/*
 Soundcloud-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export const
    bigArtwork: number = 450,   // Pixel height for big artwork
    smallArtwork: number = 166, // Pixel height for smaller artwork (stripe)
    standardPlaybuttonColor: string = 'ff5500';

export class Soundcloud extends Provider {

    source: string = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/{_id}&amp;'+
                     'color=%23{_linkcol}&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;'+
                     'show_user=true&amp;show_reposts=false&amp;show_teaser=false&amp;visual={_visual}';
    _visual: boolean;
    _linkcol: string;

    /**
     * Initialize the plugin ID
     */
    constructor(){
        super('soundcloud');
    }

    init(options: IInstanceOptions){
        super.init(options);
        this._visual = !options.hasOwnProperty('stripe');
        this._linkcol = (options.hasOwnProperty('linkcol') ? options.linkcol : standardPlaybuttonColor);
        this.setFixedHeight(options, smallArtwork + Number(this._visual)*(bigArtwork-smallArtwork));
    }

}