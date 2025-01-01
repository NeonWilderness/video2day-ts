/*
 Spotify Plugin Class for the videotool
 */
import { ToolProvider } from './generic';
import { bigArtwork } from '../spotify';

export class ToolSpotify extends ToolProvider {
  constructor(public vm: any) {
    super(vm);

    // exit early if no iframe source
    if (!vm.$tag) return;

    // look for 'stripe' param
    const height = parseInt(vm.$tag.attr('height'));
    this.vm.chkStripe(height < bigArtwork);

    // look for 'dark' param
    const dark = /theme=0/.test(this.src);
    this.vm.chkDark(dark);
  }

  generateDiv(): string {
    // build stripe param
    if (this.vm.chkStripe()) this.params = ' stripe';
    // build dark param
    if (this.vm.chkDark()) this.params += ' dark';
    // build html tag
    return super.generateDiv();
  }
}
