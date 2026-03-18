/*
 Tenor-Plugin
 */
declare let __TENURL__: string;
import { imageTemplate, IInstanceOptions, Provider } from './generic';

export class Tenor extends Provider {
  _alt: string;

  /**
   * Initialize the plugin ID
   */
  constructor() {
    super('tenor');
  }

  init(options: IInstanceOptions): void {
    delete options.height;
    delete options.ratio;
    super.init(options);
    this._alt = `tenor-${options.id}`;
    this.source = '';
  }

  async generate(options: IInstanceOptions, position: string, exportRun: boolean): Promise<void> {
    this.init(options);
    try {
      const json = await fetch(__TENURL__.replace('{id}', options.id)).then(res => res.json());
      this.source = json.results[0]['media_formats']['gif'].url;
      if (!options.width) {
        const [width, height] = json.results[0]['media_formats']['gif'].dims;
        this._width = width;
        this._height = height;
      }
      this.render(this.fillParams(imageTemplate.replace('_src', this.source)), exportRun, position);
    } catch (err) {
      console.error(`Error while rendering Tenor imageTemplate for id "${options.id}": ${err}`);
    }
  }
}
