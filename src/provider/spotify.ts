/*
 Spotify-Plugin
 */

import { IInstanceOptions, Provider } from './generic';

export const bigArtwork = 352,
  smallArtwork = 152;

export class Spotify extends Provider {
  source = 'https://open.spotify.com/embed/track/{_id}?utm_source=generator&theme={_theme}';
  _theme: number;

  /**
   * Initialize the plugin ID
   */
  constructor() {
    super('spotify');
    this._addAttr =
      ' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"';
  }

  init(options: IInstanceOptions): void {
    super.init(options);
    this._theme = Number(!options.hasOwnProperty('dark'));
    const stripe = options.hasOwnProperty('stripe');
    this.setFixedHeight(options, smallArtwork + Number(!stripe) * (bigArtwork - smallArtwork));
  }
}
