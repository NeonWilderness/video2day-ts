/*
 Giphy Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolGiphy extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

    }

    generateDiv() : string {
        // build asimage param
        if (this.vm.chkAsImage()) {
            this.params = ' asimage';
            // build alt param if render type is image
            const alt: string = $.trim(this.vm.txtAlt()).replace(/\s/g, '_');
            if (alt.length>0) this.params += ` alt-${alt}`;
        }
        // build html tag
        return super.generateDiv();
    }

}