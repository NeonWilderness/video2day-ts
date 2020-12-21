/*
 Bandcamp Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

const stardardThemeColor = 'ffffff';
const stardardLinksColor = '0687f5';

export class ToolBandcamp extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'width' param
        const width: string = vm.$tag.attr('style') || '';
        const pixel: RegExpMatchArray = width.match(/width:\s([0-9]*)/);
        if (pixel && width.indexOf('%')<0) {
            this.vm.selWidth('pixel');
            this.vm.txtPixel(pixel[1]);
        }

        // look for 'bgcol' param
        const bgcol: RegExpMatchArray = this.src.match(/bgcol=([0-9a-f]*)/);
        this.vm.txtBgColor(bgcol ? bgcol[1] : stardardThemeColor);

        // look for 'linkcol' param
        const linkcol: RegExpMatchArray = this.src.match(/linkcol=([0-9a-f]*)/);
        this.vm.txtLinks(linkcol ? linkcol[1] : stardardLinksColor);

        // look for 'size' param
        const sizeMatch: RegExpMatchArray = this.src.match(/size=([a-z]*)/);
        const size: string = (sizeMatch ? sizeMatch[1] : 'big');

        // look for 'artwork' param
        const artworkMatch: RegExpMatchArray = this.src.match(/artwork=([a-z]*)/);
        const artwork: string = (artworkMatch ? artworkMatch[1] : 'big');

        // look for 'minimal' param
        const minimalMatch: RegExpMatchArray = this.src.match(/minimal=true/);
        const minimal = !!minimalMatch;

        switch (size) {
            case 'small':
                vm.optLayout('slim');
                vm.optArtwork(artwork==='none' ? 'none' : 'show');
                break;
            case 'large':
                if (minimal) {
                    vm.optLayout('artworkonly');
                    vm.optArtwork('big');
                } else {
                    vm.optLayout('standard');
                    vm.optArtwork(artwork);
                    // look for 'tracklist' param only in standard layout (slim/artworkonly don't support tracklist)
                    const noTracklist: RegExpMatchArray = this.src.match(/tracklist=false/);
                    this.vm.chkTracklist(!noTracklist);
                }
                break;
        }

    }

    generateDiv() : string {
        // build layout & artwork param
        this.params = ` layout-${this.vm.optLayout()} artwork-${this.vm.optArtwork()}`;
        // build bgcol param
        this.validateColor('txtBgColor', 'Hintergrund', 'bgcol', stardardThemeColor);
        // build linkcol param
        this.validateColor('txtLinks', 'Link', 'linkcol', stardardLinksColor);
        // build tracklist param
        if (this.vm.chkTracklist()) {
            const tracks = this.vm.txtTracks();
            if (tracks.length>0) {
                this.validateNumber('txtTracks', 'Trackanzahl', 'tracklist');
                if (!this.vm.hasError() && (parseInt(tracks)<2)) {
                    this.vm.errIframe('Die Tracklist-Anzeige muss mindestens 2 Tracks umfassen!');
                }
            } else {
                this.params += ' tracklist';
            }
        }
        $('.jscolor').css('background-color', `#${this.vm.txtLinks()}`);
        // build html tag
        return super.generateDiv();
    }

}