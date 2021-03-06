/*
 Other (MP4-file) Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolOther extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

    }

    generateDiv() : string {
        // build poster param
        if (this.vm.chkPoster()) {
            this.params = ' poster';
            // build image param if type is not equal 'jpg'
            const imagetype: string = this.vm.selPoster();
            if (imagetype!=='jpg') this.params += ` image-${imagetype}`;
        }
        if (this.vm.chkAutoplay()) {
            this.params += ' autoplay';
        }
        // build html tag
        return super.generateDiv();
    }

}