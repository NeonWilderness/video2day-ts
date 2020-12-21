/*
 Bandcamp-Plugin
 */

import { FixedWidthAttribute, FixedRatioAttribute, IInstanceOptions, Provider } from './generic';

export enum ArtworkValues {
    none,
    show,
    big,
    small
}

export class Bandcamp extends Provider {

    source: string = 'https://bandcamp.com/EmbeddedPlayer/album={_id}/' +
        'size={_size}/bgcol={_bgcol}/linkcol={_linkcol}/tracklist={_tracklist}' +
        '/artwork={_artwork}/minimal={_minimal}/transparent={_transparent}/';

    _size: string;
    _bgcol: string;
    _linkcol: string;
    _tracklist: boolean;
    _artwork: string;
    _minimal: boolean;
    _transparent: boolean;

    /**
     * Initialize the plugin ID
     */
    constructor() {
        super('bandcamp');
    }

    sanitizeWidth(minWidth: number, width: number): number {
        return Math.max(minWidth, Math.min(700, width));
    }

    tailorSize(options: IInstanceOptions): void {
        let height: number;
        let { width } = options;
        const { tracklist } = options;
        if (options.artwork === 'big') {
            if (this._tracklist) {
                height = Math.max(362, width + 106 + 20 * Number(width < 300) + tracklist * 33);
            } else {
                height = width + 120 + 25 * Number(width < 300);
            }
        } else {
            width = Math.max(250, width);
            this.setData(options.instance, FixedWidthAttribute, width.toString());
            if (this._tracklist) {
                height = Math.max(208, 142 + tracklist * 33 + 25 * Number(width < 400));
            } else {
                height = 120;
            }
        }
        this.setFixedHeight(options, height);
    }

    init(options: IInstanceOptions): void {
        options.width = this.sanitizeWidth(170, options.width);
        super.init(options);
        this._bgcol = (options.hasOwnProperty('bgcol') ? options.bgcol : 'ffffff');
        this._linkcol = (options.hasOwnProperty('linkcol') ? options.linkcol : '0687f5');
        this._minimal = false;
        this._transparent = true;
        if (!options.hasOwnProperty('layout')) options.layout = 'standard';
        switch (options.layout) {
            case 'slim':
                this._size = 'small';
                this.setFixedHeight(options, 42);
                this._artwork = (options.hasOwnProperty('artwork') && options.artwork === 'none' ? 'none' : 'show');
                this._tracklist = false;
                break;
            case 'artworkonly':
                this._size = 'large';
                options.height = options.width;
                this._height = options.height.toString();
                this.setData(options.instance, FixedRatioAttribute, '1');
                this._artwork = 'big';
                this._minimal = true;
                this._tracklist = false;
                break;
            case 'standard':
                this._size = 'large';
                this._artwork = (options.hasOwnProperty('artwork') ? options.artwork : 'small');
                this._tracklist = options.hasOwnProperty('tracklist');
                this.tailorSize(options);
                if (typeof ArtworkValues[ArtworkValues[this._artwork]] === 'undefined')
                    this.badParam = `Ungültiger Wert "${this._artwork}" für Parameter artwork. Erlaubt sind: none, show, big, small.`;
                break;
            default:
                this.badParam = `Ungültiger Wert "${options.layout}" für Parameter layout. Erlaubt sind: slim, artworkonly, standard.`;
        }
    }

}