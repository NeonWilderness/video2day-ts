/*
 Embed code variants for each provider (work in progress!)
 */

export interface IEmbedCode {
    id: string;
    code: string;
    expect: {
        vid: string;
        param: string;
    }
}

export const embedCodes: IEmbedCode[] = [
    //----- Bandcamp
    {
        id: 'Slim+show artwork',
        code: '<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
        expect: { vid: '456865727', param: 'html5video bandcamp layout-slim artwork-show' }
    },
    {
        id: 'Slim+no artwork',
        code: '<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
        expect: { vid: '456865727', param: 'html5video bandcamp layout-slim artwork-none'}
    },
    {
        id: 'Artwork only',
        code: '<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
        expect: { vid: '456865727', param: 'html5video bandcamp layout-artworkonly artwork-big width-350'}
    },
    {
        id: 'Standard/no Artwork/no Tracklist',
        code: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
        expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-none'}

    },
    {
        id: 'Standard/Artwork Big/no Tracklist',
        code: '<iframe style="border: 0; width: 100%; height: 312px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
        expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-big'}
    },
    {
        id: 'Standard/Artwork Big/Tracklist',
        code: '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
        expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-big tracklist width-350'}
    },
    {
        id: 'Standard/Artwork Small/no Tracklist/Light Theme',
        code: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
        expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-small'}
    },
    {
        id: 'Standard/Artwork Small/no Tracklist/Dark Theme',
        code: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
        expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-small bgcol-333333 linkcol-0f91ff'}
    },
    {
        id: 'Standard/Artwork Small/Tracklist',
        code: '<iframe style="border: 0; width: 400px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/" seamless><a href="http://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
        expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-small tracklist width-400'}
    },
    //------ Dailymotion
    {
        id: 'Dailymotion/no starttime',
        code: '<iframe frameborder="0" width="480" height="270" src="//www.dailymotion.com/embed/video/x44m1c5" allowfullscreen></iframe><br /><a href="http://www.dailymotion.com/video/x44m1c5_1-004-the-architecture-of-an-angular-2-application_school" target="_blank">1- 004 The Architecture of an Angular 2...</a> <i>von <a href="http://www.dailymotion.com/tutstrainning" target="_blank">tutstrainning</a></i>',
        expect: { vid: 'x44m1c5', param: 'html5video dailymotion'}
    },
    {
        id: 'Dailymotion/with starttime',
        code: '<iframe frameborder="0" width="560" height="315" src="//www.dailymotion.com/embed/video/x4ik5tb?start=11" allowfullscreen></iframe><br /><a href="http://www.dailymotion.com/video/x4ik5tb_coldplay-glastonbury-2016-up-up-with-kids-live-full-version_music?start=11" target="_blank">Coldplay Glastonbury 2016 - Up &amp; Up - with Kids...</a> <i>von <a href="http://www.dailymotion.com/jon-chew" target="_blank">jon-chew</a></i>',
        expect: { vid: 'x4ik5tb', param: 'html5video dailymotion start-11'}
    },
    //------ DCTP.tv
    {
        id: 'DCTP.tv/with starttime',
        code: '<iframe width="640" scrolling="no" height="360" frameborder="0" src="http://www.dctp.tv/filme/erdbeben-und-todeswelle/embed/?t=0m10s" name="dctp-embed" marginwidth="0" marginheight="0"><br></iframe>',
        expect: { vid: 'erdbeben-und-todeswelle', param: 'html5video dctptv start-10'}
    },
    //------ Slideshare
    {
        id: 'Slideshare with slide',
        code: '<iframe src="//www.slideshare.net/slideshow/embed_code/key/vYUBnUYL3JbBmP?startSlide=8" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MelissaPerri/the-build-trap-66849122" title="The Build Trap" target="_blank">The Build Trap</a> </strong> de <strong><a target="_blank" href="//www.slideshare.net/MelissaPerri">Melissa Perri</a></strong> </div>',
        expect: { vid: 'vYUBnUYL3JbBmP', param: 'html5video slideshare slide-8 ratio-1.2268'}
    },
    //------ Speakerdeck
    {
        id: 'Speakerdeck with slide',
        code: '<script async class="speakerdeck-embed" data-slide="11" data-id="704d7f2694fa43559e0afc488a0c810c" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>',
        expect: { vid: '704d7f2694fa43559e0afc488a0c810c', param: 'html5video speakerdeck slide-11'}
    },
    //------ Vine
    {
        id: 'Vine',
        code: '<iframe src="https://vine.co/v/5XwKTtq777Q/embed/simple" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>',
        expect: { vid: '5XwKTtq777Q', param: 'html5video vine ratio-1'}
    },
    //------ Slides
    {
        id: 'Slides/light',
        code: '<iframe src="//slides.com/news/custom-fonts/embed?style=light" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        expect: { vid: 'news/custom-fonts', param: 'html5video slides color-light ratio-1.37143'}
    },
    {
        id: 'Slides/dark/slide 4',
        code: '<iframe src="//slides.com/news/custom-fonts/embed/#/4?style=dark" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
        expect: { vid: 'news/custom-fonts', param: 'html5video slides slide-4 ratio-1.37143'}
    }
];
