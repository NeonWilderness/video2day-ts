/*
 Soundcloud Plugin Class for the videotool
 */
import {} from 'jquery';
import { ToolProvider } from './generic';
import { bigArtwork } from '../soundcloud';

const standardPlaybuttonColor: string = 'ff5500';

export class ToolSoundcloud extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'stripe' param
        let height = parseInt(vm.$tag.attr('height') || '450');
        this.vm.chkStripe(height < bigArtwork);

        // look for 'color' param
        let color = this.src.match(/color=([0-9a-f]*)/);
        if (color) this.vm.txtColor(color[1]); else this.vm.txtColor(standardPlaybuttonColor);

    }

    generateDiv() : string {
        // build stripe param
        if (this.vm.chkStripe()) {
            this.params = ' stripe';
            // build linkcol param (does only work with stripe-format)
            this.validateColor('txtColor', 'Playbutton', 'linkcol', standardPlaybuttonColor);
        }
        $('.jscolor').css('background-color', `#${this.vm.txtColor()}`);
        // build html tag
        return super.generateDiv();
    }

}