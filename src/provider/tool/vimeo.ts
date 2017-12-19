/*
 Vimeo Plugin Class for the videotool
 */
import {} from 'jquery';
import { ToolProvider } from './generic';

const standardPlaybuttonColor: string = '00adef';

export class ToolVimeo extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'color' param
        let color = this.src.match(/color=([0-9a-f]*)/);
        if (color) this.vm.txtColor(color[1]); else this.vm.txtColor(standardPlaybuttonColor);

    }

    generateDiv() : string {
        // build linkcol param (does only work with stripe-format)
        this.validateColor('txtColor', 'Link', 'linkcol', standardPlaybuttonColor);
        $('.jscolor').css('background-color', `#${this.vm.txtColor()}`);
        // build html tag
        return super.generateDiv();
    }

}