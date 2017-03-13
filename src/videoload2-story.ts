/**
 * Videoload-Version2-Story: support script for the Videoload2 documentation story
 */
require('./videoload2-story.less');
import {IProviders} from './video2day';
import {} from 'jquery';
import {} from 'knockout';

class Videoload2StoryViewmodel {

    providers: IProviders;
    // Fields for decoding a short-url (e.g. Vevo)
    shortLink: KnockoutObservable<string>;
    userHasPasted: KnockoutObservable<boolean>;
    isValidLink: KnockoutObservable<boolean>;
    userMessage: KnockoutObservable<string>;
    hasMessage: KnockoutObservable<boolean>;

    constructor(){
        this.providers = {
            bandcamp: 'http://bandcamp.com/',
            dailymotion: 'http://www.dailymotion.com/',
            dctptv: 'http://www.dctp.tv/',
            funnyordie: 'http://www.funnyordie.com/',
            giphy: 'http://giphy.com/',
            jsfiddle: 'https://jsfiddle.net/',
            liveleak: 'http://www.liveleak.com/',
            metacafe: 'http://www.metacafe.com/',
            slideshare: 'http://de.slideshare.net/',
            soundcloud: 'https://soundcloud.com/',
            speakerdeck: 'https://speakerdeck.com/',
            vevo: 'http://www.vevo.com/',
            vimeo: 'https://vimeo.com/',
            vine: 'https://vine.co/',
            youtube: 'https://www.youtube.com/',
            other: 'http://videojs.com/'
        };
        this.shortLink = ko.observable('');
        this.userMessage = ko.observable('');
        this.userHasPasted = ko.computed(function() {
    	    return (this.shortLink().length>0);
        }, this);
        this.isValidLink = ko.computed(function() {
    	    return (this.userHasPasted() && this.shortLink().substr(0,15)==='http://vevo.ly/');
        }, this);
        this.hasMessage = ko.computed(function() {
    	    return (this.userMessage().length>0);
        }, this);
    }

    getVevoID(): void {
        let xml: string = 'https://cdn.rawgit.com/NeonWilderness/video2day-ts/master/dist/'; // rawgit github reference
        let link: string = this.shortLink().replace('vevo.ly', 'prod.vevo.ly');
        let query: string = encodeURIComponent(`use "${xml}posturl.xml" as htmlpost;select * from htmlpost where url="http://urlex.org" and postdata="s=${link}" and xpath="//td/a"`);
        let queryStr: string = `https://query.yahooapis.com/v1/public/yql?q=${query}`;
        $.ajax({
            type: 'GET',
            url: queryStr,
            dataType: 'xml',
            context: this,
            success: function(response) {
                let vevoLink = $(response).find("a[href*='www.vevo.com']");
                if (vevoLink.length > 0) {
                    this.userMessage(`Die gesuchte ID ist:&emsp;<b>${vevoLink.eq(0).attr('href').split('?')[0].split('/').pop()}</b>`);
                } else {
                    this.userMessage('Fehler: Die Short-URL konnte leider nicht dekodiert werden.');
                }
            }
        });
    }

    isError(): string {
        return (this.userMessage().substr(0,1)==='F' ? 'alert' : '');
    }

    providerNames(): string[] {
        return Object.keys(this.providers);
    }

    providerUrl(provider: string): string {
        return this.providers[provider];
    }

    providerImgUrl(provider: string): string {
        return `http://www.s522667522.online.de/public/images/videoload/${provider}.png`;
    }

    resetForm(): void {
        this.shortLink('');
        this.userMessage('');
        $('#shortLink').focus();
    }

    private scrollToFirst(jqElements: any, duration: number = 600, offset: number = 50) {
        $('html,body').animate({ scrollTop: (jqElements.eq(0).offset().top - offset)}, duration);
    }

    scrollTo(selector: string, duration: number = 600, offset: number = 50) {
        let $el = $(selector);
        this.scrollToFirst($el, duration, offset);
    }

    toggle(selector: string, duration: number = 600, offset: number = 50) {
        let $el = $(selector);
        $el.toggle(duration);
        this.scrollToFirst($el, duration, offset);
    }
}

(function($){

    $(function() {

        // create viewmodel from class
        let vm = new Videoload2StoryViewmodel();

        // and link to knockout bindings
        ko.applyBindings( vm );

        // on each click of a tab button
        $('ul.tabs>li').click( function() {
            // scroll to the beginning of the tab element
            vm.scrollTo(`#${this.parentNode.id}`);
            // and close all open "how to find ID"-sections
            let providers = vm.providerNames();
            for(let i=0, len=providers.length; i<len; i++){
                let el = document.getElementById(`${providers[i]}-id`);
                if (el) el.style.display = 'none';
            }
        });

    });

})(jQuery);