/*
 Generic Plugin Class
 */

export interface IInstanceOptions {
  alt?: string;
  artwork?: string;
  asimage?: boolean;
  autoplay?: boolean;
  bgcol?: string;
  color?: string;
  endat?: string;
  height?: number;
  id?: string;
  image?: string;
  instance?: HTMLElement;
  lang?: boolean;
  layout?: string;
  lazyload?: boolean;
  linkcol?: string;
  poster?: boolean;
  provider?: string;
  ratio?: number;
  scope?: string;
  slide?: number;
  start?: string;
  stripe?: boolean;
  tracklist?: number;
  width?: number;
}

export const frameTemplate = '<iframe class="generated{_llClass}" width="{_width}" height="{_height}" {_llPrefix}src="_src"{_addAttr} frameborder="0" allowfullscreen></iframe>';
export const imageTemplate = '<img class="generated{_llClass}" alt="{_alt}" width="{_width}" height="{_height}" {_llPrefix}src="_src" />';
export const playerTemplate = '<video class="video-js vjs-fluid vjs-default-skin{_autoplay}" controls preload="auto" width="{_width}" height="{_height}" data-setup="{}" poster="{_poster}"><source src="{_id}" type="video/mp4"></video>';

export const FixedHeightAttribute = 'height';
export const FixedWidthAttribute = 'width';
export const FixedRatioAttribute = 'ratio';

export function ErrorMessage(text: string, element: HTMLElement): void {
  element.innerHTML = `<p class="message">${text}</p>`;
}

export class Provider {

  _addAttr: string;
  _id: string;
  _width: string;
  _height: string;
  _llClass: string;
  _llPrefix: string;
  _ratio: string;
  badParam: string;
  element: HTMLElement;
  source: string;

  constructor(public pluginID: string) {
    this._addAttr = '';
    this._llClass = '';
    this._llPrefix = '';
    this.badParam = '';
  }

  fillParams(template: string): string {
    let html = template;
    Object.keys(this).forEach(property => {
      if (property.substr(0, 1) === '_') html = html.replace(new RegExp(`{${property}}`, 'g'), this[property]);
    });
    return html;
  }

  generate(options: IInstanceOptions, position: string, exportRun: boolean): void {
    this.init(options);
    this.render(this.fillParams(frameTemplate.replace('_src', this.source)), exportRun, position);
  }

  getID(): string {
    return this.pluginID;
  }

  hasHttpSourceInSecureMode(): boolean {
    return (location.protocol === 'https:' && this.source.substr(0, 7) === 'http://');
  }

  init(options: IInstanceOptions): void {
    this._id = options.id;
    this._height = options.height.toString();
    if (options.lazyload) {
      this._llClass = ' lozad';
      this._llPrefix = 'data-';
    }
    this.setData(options.instance, FixedWidthAttribute, options.width.toString());
    this.setData(options.instance, FixedRatioAttribute, (1 / options.ratio).toString());
    this.element = options.instance;
    if (options.provider === 'other') this.element.style.width = `${this._width}px`;
  }

  log(): void {
    console.log(`${this.getID()} plugin registered.`);
  }

  render(code: string, exportRun: boolean, position?: string): void {
    console.log(code);
    let content = '';
    if (code[0] !== '<') {
      ErrorMessage(code, this.element)
    } else {
      if (position === 'bottom')
        content = this.element.innerHTML + code;
      else
        content = code + this.element.innerHTML;
      if (exportRun)
        this.element.dataset.content = content;
      else
        this.element.innerHTML = content;
    }
  }

  setData(instance: HTMLElement, property: string, value: string): void {
    this[`_${property}`] = value;
    instance.setAttribute(`data-${property}`, value);
  }

  setFixedHeight(options: IInstanceOptions, height: number): void {
    options.height = height;
    this.setData(options.instance, FixedHeightAttribute, height.toString());
  }

}