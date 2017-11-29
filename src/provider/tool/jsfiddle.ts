/*
 JsFiddle Plugin Class for the videotool
 */
import { ToolProvider } from './generic';

export class ToolJsFiddle extends ToolProvider {

    constructor(public vm: any) {

        super(vm);

        // exit early if no iframe source
        if (!vm.$tag) return;

        // extract url params
        let params = this.src.match(/embedded\/(.*)\//);
        if (params) {
            let param = params[1].split('/');
            let scope = param[0].split(',');
            this.vm.chkHtml(scope.indexOf('html')>=0);
            this.vm.chkCss(scope.indexOf('css')>=0);
            this.vm.chkJs(scope.indexOf('js')>=0);
            this.vm.chkResult(scope.indexOf('result')>=0);
            this.vm.optColor(param.length>1 ? (param[1]==='light' ? 'ffffff' : '333333'): 'ffffff');
        } else {
            this.vm.chkHtml(true);
            this.vm.chkCss(true);
            this.vm.chkJs(true);
            this.vm.chkResult(true);
            this.vm.optColor('333333');
        }

    }

    generateDiv() : string {
        // build scope param
        if (!(this.vm.chkHtml() && this.vm.chkCss() && this.vm.chkJs() && this.vm.chkResult())) {
            let scope: string[] = [];
            if (this.vm.chkHtml()) scope.push('html');
            if (this.vm.chkCss()) scope.push('css');
            if (this.vm.chkJs()) scope.push('js');
            if (this.vm.chkResult()) scope.push('result');
            if (scope.length===0) {
                this.vm.errIframe('Bitte selektieren Sie wenigstens eine Auswahlbox beim jsFiddle-Umfang!');
            } else {
                this.params = ` scope-${scope.join(',')}`;
            }
        }
        // build color param
        let color = this.vm.optColor();
        if (color!=='333333') this.params += ` color-light`;
        // build html tag
        return super.generateDiv();
    }

}