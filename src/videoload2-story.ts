/**
 * Videoload-Version2-Story: support script for the Videoload2 documentation story
 */
import './videoload2-story.less';
import { IProviders } from './video2day';

class Videoload2StoryViewmodel {

  providers: IProviders;
  userMessage: KnockoutObservable<string>;
  hasMessage: KnockoutComputed<boolean>;

  constructor() {
    this.providers = {
      bandcamp: 'https://bandcamp.com/',
      dailymotion: 'https://www.dailymotion.com/',
      dctptv: 'https://www.dctp.tv/',
      filmstarts: 'http://www.filmstarts.de/',
      funnyordie: 'https://www.funnyordie.com/',
      giphy: 'https://giphy.com/',
      jsfiddle: 'https://jsfiddle.net/',
      itemfix: 'https://www.itemfix.com/',
      metacafe: 'https://www.metacafe.com/',
      slides: 'https://slides.com/',
      slideshare: 'https://de.slideshare.net/',
      soundcloud: 'https://soundcloud.com/',
      speakerdeck: 'https://speakerdeck.com/',
      strawpoll: 'https://strawpoll.me/',
      ted: 'https://ted.com/',
      vimeo: 'https://vimeo.com/',
      vine: 'https://vine.co/',
      youtube: 'https://youtube.com/',
      other: 'https://videojs.com/'
    };
    this.userMessage = ko.observable('');
    this.hasMessage = ko.pureComputed(() => !!this.userMessage().length);
  }

  isError = (): string => this.userMessage().substr(0, 1) === 'F' ? 'alert' : '';

  providerNames = (): string[] => Object.keys(this.providers);

  providerUrl = (provider: string): string => this.providers[provider];

  providerImgUrl = (provider: string): string => `https://neonwilderness.de/public/images/videoload/${provider}.png`;

  private scrollToFirst(jqElements: any, duration = 600, offset = 50) {
    $('html,body').animate({ scrollTop: (jqElements.eq(0).offset().top - offset) }, duration);
  }

  scrollTo = (selector: string, duration = 600, offset = 50) => {
    const $el = $(selector);
    this.scrollToFirst($el, duration, offset);
  }

  toggle = (selector: string, duration = 600, offset = 50) => {
    const $el = $(selector);
    $el.toggle(duration);
    this.scrollToFirst($el, duration, offset);
  }
}

(function ($) {

  $(function () {

    // create viewmodel from class
    const vm = new Videoload2StoryViewmodel();

    // and link to knockout bindings
    ko.applyBindings(vm, document.getElementById('videoload2'));

    // on each click of a tab button
    $('ul.tabs>li').on('click', function () {
      // scroll to the beginning of the tab element
      vm.scrollTo('#providerTabs');
      // and close all open "how to find ID"-sections
      const providers = vm.providerNames();
      for (let i = 0, len = providers.length; i < len; i++) {
        const el = document.getElementById(`${providers[i]}-id`);
        if (el) el.style.display = 'none';
      }
    });

  });

})(jQuery);