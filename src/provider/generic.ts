/*
 Generic Plugin Class
 */

export interface IInstanceOptions {
    alt?: string;
    artwork?: string;
    asimage?: boolean;
    bgcol?: string;
    color?: string;
    endat?: string;
    height?: number;
    id?: string;
    image?: string;
    instance?: any;
    lang?: boolean;
    layout?: string;
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

export const frameTemplate: string = '<iframe class="generated" width="{_width}" height="{_height}" src="_src" frameborder="0" allowfullscreen></iframe>';
export const imageTemplate: string = '<img class="generated" alt="{_alt}" width="{_width}" height="{_height}" src="_src" />';
export const playerTemplate: string = '<video class="video-js vjs-fluid vjs-default-skin" controls preload="auto" width="{_width}" height="{_height}" '+
                                      'data-setup="{}" poster="{_poster}"><source src="{_id}" type="video/mp4"></video>';

export const FixedHeightAttribute = 'height';
export const FixedWidthAttribute  = 'width';
export const FixedRatioAttribute  = 'ratio';

export function ErrorMessage(text: string, element: any) : void {
    element.innerHTML = `<p class="message">${text}</p>`;
}

export class Provider {

    _id: string;
    _width: string;
    _height: string;
    _ratio: string;
    badParam: string;
    element: any;
    source: string;

    constructor(public pluginID: string) {
    }

    fillParams(template: string) : string {
        let html = template;
        Object.keys(this).forEach(property => {
            if (property.substr(0,1) === '_') html = html.replace(new RegExp(`{${property}}`, 'g'), this[property]);
        });
        return html;
    }

    generate(options: IInstanceOptions, position: string) : void {
        this.init(options);
        this.render(this.fillParams(frameTemplate.replace('_src', this.source)), position);
    }

    getID() : string {
        return this.pluginID;
    }

    hasHttpSourceInSecureMode() : boolean {
        return (location.protocol==='https:' && this.source.substr(0,7)==='http://');
    }

    init(options: IInstanceOptions) : void {
        this._id = options.id;
        this._height = options.height.toString();
        this.setData(options.instance, FixedWidthAttribute, options.width.toString());
        this.setData(options.instance, FixedRatioAttribute, (1 / options.ratio).toString());
        this.badParam = '';
        this.element = options.instance;
    }

    log(): void {
        console.log( `${this.getID()} plugin registered.` );
    }

    render(code: string, position?: string) : void {
        console.log(code);
        if (code[0] !== '<') {
            ErrorMessage(code, this.element)
        } else {    
            if (position === 'bottom') {
                this.element.innerHTML += code;
            } else {
                this.element.innerHTML = code + this.element.innerHTML;
            }
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