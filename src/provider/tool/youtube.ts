/*
 Youtube Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolYoutube extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'start' param
        let start = this.src.match(/start=([0-9]*)/);
        if (start) this.vm.txtStart(start[1]); else this.vm.txtStart('');

        // look for 'endat' param
        let endat = this.src.match(/end=([0-9]*)/);
        if (endat) this.vm.txtEndat(endat[1]); else this.vm.txtEndat('');

    }

    generateDiv() : string {
        // build start param
        this.validateNumber('txtStart', 'Startsekunde', 'start');
        // build endat param
        this.validateNumber('txtEndat', 'Endsekunde', 'endat');
        // build html tag
        return super.generateDiv();
    }

}