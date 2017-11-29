/*
 DCTP.tv Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolDctptv extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'start' param (?t=0m30s)
        let start = this.src.match(/t=([0-9]*m[0-9]*s)/);
        if (start) {
            let time = start[1].split('m');
            this.vm.txtStart((parseInt(time[0])*60 + parseInt(time[1])).toString());
        } else this.vm.txtStart('');

    }

    generateDiv() : string {
        // build start param
        this.validateNumber('txtStart', 'Startsekunde', 'start');
        // build html tag
        return super.generateDiv();
    }

}