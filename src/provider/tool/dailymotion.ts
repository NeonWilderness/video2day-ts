/*
 Dailymotion Plugin Class for the videotool
 */
import {} from 'jquery';
import { ToolProvider } from './generic';

export class ToolDailymotion extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'start' param
        let start = this.src.match(/start=([0-9]*)/);
        if (start) this.vm.txtStart(start[1]); else this.vm.txtStart('');

    }

    generateDiv() : string {
        // build start param
        this.validateNumber('txtStart', 'Startsekunde', 'start');
        // build html tag
        return super.generateDiv();
    }

}