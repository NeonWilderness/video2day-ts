/*
 TED Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolTed extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // look for 'lang/de' in src which indicates the request for German subtitles
        this.vm.chkLang(!!this.src.match(/lang\/de/));
        
    }

    generateDiv() : string {
        // build asimage param
        if (this.vm.chkLang()) {
            this.params = ' lang';
        }
        // build html tag
        return super.generateDiv();
    }

}