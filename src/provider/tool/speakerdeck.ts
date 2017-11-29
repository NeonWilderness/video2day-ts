/*
 Speakerdeck Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolSpeakerdeck extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'id' param
        let id: string = vm.$tag.attr('data-id') || '';
        this.vm.txtElementID(id);

        // look for 'slide' param
        let slide: string = vm.$tag.attr('data-slide') || '';
        this.vm.txtSlide(slide);

    }

    generateDiv() : string {
        // build start param
        this.validateNumber('txtSlide', 'Startseite', 'slide');
        // build html tag
        return super.generateDiv();
    }

}