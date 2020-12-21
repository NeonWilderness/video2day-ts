/*
 Generic Plugin Class for the videotool
 */

/**
 *
 * @param ratio An aspect ratio floating number
 * @returns {number} Ratio rounded to the 5th decimal place
 */
export function round5th(ratio: number): number {
    return Math.round(ratio * 100000) / 100000;
}

export function isValidColor(color: string): boolean {
    return /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(color);
}

export const n169: number = round5th(16 / 9); // 16:9 ratio default = 1.77778
export const n43: number = round5th(4 / 3);   // 4:3 ratio = 1.33333

const lowRange169: number = n169 * 0.99; // low 1% range of 16:9
const highRange169: number = n169 * 1.01; // high 1% range of 16:9

const lowRange43: number = n43 * 0.99; // low 1% range of 4:3
const highRange43: number = n43 * 1.01; // high 1% range of 4:3

export class ToolProvider {

    params = '';
    src = '';

    constructor(public vm: any) {

        // exit early if no iframe source
        if (!vm.$tag) return;

        // isolate src attribute
        this.src = vm.$tag.attr('src') || '';

        // extract ratio if available (e.g. in Speakerdeck script tag)
        const ratioX: string = vm.$tag.attr('data-ratio');
        let ratioN: number;
        // tag has a data-ratio attribute?
        if (ratioX !== undefined) {
            // then round this ratio value to the 5th decimal place
            ratioN = round5th(parseFloat(ratioX));
        } else {
            // otherwise extract width if available
            const width = vm.$tag.attr('width') || '%';
            // extract height if available
            const height = vm.$tag.attr('height') || '%';
            // calculate ratio unless width or height feature percentage dimensions; in that case use 16:9 default
            ratioN = (width.indexOf('%') < 0 && height.indexOf('%') < 0 ?
                round5th((parseInt(width) / parseInt(height))) :
                n169);
        }

        // inspect ratio 1% ranges and normalize value
        if (ratioN >= lowRange169 && ratioN <= highRange169) ratioN = n169;
        else if (ratioN >= lowRange43 && ratioN <= highRange43) ratioN = n43;
        // set viewmodel accordingly
        if (ratioN === n169 || ratioN === n43) {
            this.vm.selRatio(ratioN.toString());
        } else {
            this.vm.selRatio('custom');
        }
        this.vm.txtRatio(ratioN.toString());
    }

    initParam(): void {
        this.params = '';
        this.vm.errIframe('');
    }

    generateDiv(): string {
        // build width param
        if (this.vm.selWidth() === 'pixel') {
            const pixel: string = this.vm.txtPixel();
            if (!$.isNumeric(pixel)) {
                this.vm.errIframe('Bitte geben Sie eine gültige (numerische) Breite in Pixel sein!')
            } else {
                // validate minimum pixel widths @ bandcamp
                if (this.vm.optProvider() === 'bandcamp') {
                    const minWidth = (this.vm.optLayout() === 'standard' && this.vm.optArtwork() === 'small' ? 250 : 170);
                    const nWidth = parseInt(pixel);
                    if (nWidth < minWidth) {
                        this.vm.errIframe('Bandcamp erfordert eine Mindestbreite von 170 Pixel - bei Layout=standard und Artwork=small sogar 250 Pixel!')
                    }
                    if (nWidth > 700) {
                        this.vm.errIframe('Bandcamp begrenzt die maximale Anzeigebreite auf 700 Pixel!')
                    }
                }
                this.params += ` width-${pixel}`;
            }
        }
        // build ratio param
        if (this.vm.selRatio() !== n169.toString()) {
            let ratio: string = this.vm.txtRatio().replace(/,/g, '.');
            if (!$.isNumeric(ratio)) {
                this.vm.errIframe('Bitte machen Sie eine gültige Angabe für das gewünschte Aspektverhältnis!')
            } else {
                ratio = round5th(parseFloat(ratio)).toString();
                this.params += ` ratio-${ratio}`;
            }
        }
        // check id
        if (this.vm.txtElementID().length === 0) {
            const id = this.vm.labelProvider();
            this.vm.errIframe(`Bitte geben Sie eine gültige ${id.substr(0, id.length - 1)} ein!`)
        }
        // assemble div clause
        return `&lt;div class="html5video ${this.vm.optProvider()}${this.params}" id="${this.vm.txtElementID()}"&gt;&lt;/div&gt;`;
    }

    validateNumber(property: string, description: string, param: string): void {
        // validate/build numeric param (start or slide)
        const value: string = this.vm[property]();
        if (value.length > 0) {
            if (!$.isNumeric(value)) {
                this.vm.errIframe(`Bitte geben Sie einen gültigen (numerischen) Wert für die ${description} ein!`);
            } else {
                this.params += ` ${param}-${value}`;
            }
        }
    }

    validateColor(property: string, description: string, param: string, standard: string): void {
        // validate/build color param
        const value: string = this.vm[property]();
        if (value.length > 0) {
            if (!isValidColor(value)) {
                this.vm.errIframe(`Bitte geben Sie einen gültigen Wert (hexadezimal, 3- oder 6-stellig) für die ${description}farbe ein!`);
            } else {
                if (value !== standard) this.params += ` ${param}-${value}`;
            }
        }
    }

}