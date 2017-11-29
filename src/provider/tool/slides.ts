/*
 Slides Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolSlides extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'slide' param
        let slide = this.src.match(/\/#\/([0-9]*)/);
        if (slide) this.vm.txtSlide(slide[1]); else this.vm.txtSlide('');

        // look for 'style' param
        let style = this.src.match(/\?style=(.*)/);
        if (style) this.vm.optColor(style[1]==='light' ? 'ffffff' : '333333'); else this.vm.optColor('333333');

    }

    generateDiv() : string {
        // build start param
        this.validateNumber('txtSlide', 'Startseite', 'slide');
        // build color param
        let color = this.vm.optColor();
        if (color!=='333333') this.params += ` color-light`;
        // build html tag
        return super.generateDiv();
    }

}