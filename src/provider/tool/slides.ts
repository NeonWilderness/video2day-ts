/*
 Slides Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolSlides extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'style' param
        const style = this.src.match(/\?style=(.*)/);
        if (style) this.vm.optColor(style[1]==='light' ? 'ffffff' : '333333'); else this.vm.optColor('333333');

    }

    generateDiv() : string {
        // build color param
        const color = this.vm.optColor();
        if (color!=='333333') this.params += ` color-light`;
        // build html tag
        return super.generateDiv();
    }

}