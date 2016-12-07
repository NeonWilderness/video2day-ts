'use strict';

export type tClassListUnion = string | DOMTokenList;
export class ClassListPolyfill {
    classList: string[] = [];

    constructor(classes: tClassListUnion){
        if (typeof classes==='string') {
            if(!String.prototype.trim){
                String.prototype.trim = function(): string {
                    return this.replace(/^\s+|\s+$/g, '');
                };
            }
            this.splitClasses(classes);
        } else {
            this.copyClasses(classes);
        }
    }

    splitClasses(classnames: string){
        this.classList = classnames.trim().toLowerCase().split(/\s+/);
    }

    copyClasses(classlist: DOMTokenList){
        for (let i=0; i<classlist.length; i++) this.classList.push(classlist.item(i));
    }

    contains(classname: string): boolean {
        return this.classList.indexOf(classname)>=0;
    }
}