/*
 Slideshare Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolSlideshare extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'slide' param
        let slide = this.src.match(/startSlide=([0-9]*)/);
        if (slide) this.vm.txtSlide(slide[1]); else this.vm.txtSlide('');

    }

    generateDiv() : string {
        // build start param
        this.validateNumber('txtSlide', 'Startseite', 'slide');
        // build html tag
        return super.generateDiv();
    }

}