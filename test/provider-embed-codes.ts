/*
 Embed code variants for each provider
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
    id: 'Bandcamp Slim+show artwork',
    code: '<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=small/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=show/minimal=false/transparent=true/" seamless><a href="https://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
    expect: { vid: '456865727', param: 'html5video bandcamp layout-slim artwork-show' }
  },
  {
    id: 'Bandcamp Slim+no artwork',
    code: '<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=small/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/minimal=false/transparent=true/" seamless><a href="https://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
    expect: { vid: '456865727', param: 'html5video bandcamp layout-slim artwork-none' }
  },
  {
    id: 'Bandcamp Artwork only',
    code: '<iframe style="border: 0; width: 350px; height: 350px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=big/minimal=true/transparent=true/" seamless><a href="https://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
    expect: { vid: '456865727', param: 'html5video bandcamp layout-artworkonly artwork-big width-350' }
  },
  {
    id: 'Bandcamp Standard/no Artwork/no Tracklist',
    code: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=none/minimal=false/transparent=true/" seamless><a href="https://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
    expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-none' }

  },
  {
    id: 'Bandcamp Standard/Artwork Big/no Tracklist',
    code: '<iframe style="border: 0; width: 100%; height: 312px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=big/minimal=false/transparent=true/" seamless><a href="https://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
    expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-big' }
  },
  {
    id: 'Bandcamp Standard/Artwork Big/Tracklist',
    code: '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=big/minimal=false/transparent=true/" seamless><a href="https://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
    expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-big tracklist width-350' }
  },
  {
    id: 'Bandcamp Standard/Artwork Small/no Tracklist/Light Theme',
    code: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/minimal=false/transparent=true/" seamless><a href="https://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
    expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-small' }
  },
  {
    id: 'Bandcamp Standard/Artwork Small/no Tracklist/Dark Theme',
    code: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/artwork=small/minimal=false/transparent=true/" seamless><a href="https://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
    expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-small bgcol-333333 linkcol-0f91ff' }
  },
  {
    id: 'Bandcamp Standard/Artwork Small/Tracklist',
    code: '<iframe style="border: 0; width: 400px; height: 472px;" src="https://bandcamp.com/EmbeddedPlayer/album=456865727/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=true/artwork=small/minimal=false/transparent=true/" seamless><a href="https://terriblyyours.bandcamp.com/album/a-bloom-beyond">A Bloom Beyond by Terribly Yours</a></iframe>',
    expect: { vid: '456865727', param: 'html5video bandcamp layout-standard artwork-small tracklist width-400' }
  },
  //------ Dailymotion
  {
    id: 'Dailymotion/no starttime',
    code: '<iframe frameborder="0" width="480" height="270" src="https://www.dailymotion.com/embed/video/x44m1c5?start=" allowfullscreen></iframe><br /><a href="https://www.dailymotion.com/video/x44m1c5_1-004-the-architecture-of-an-angular-2-application_school" target="_blank">1- 004 The Architecture of an Angular 2...</a> <i>von <a href="https://www.dailymotion.com/tutstrainning" target="_blank">tutstrainning</a></i>',
    expect: { vid: 'x44m1c5', param: 'html5video dailymotion' }
  },
  {
    id: 'Dailymotion/with starttime',
    code: '<iframe frameborder="0" width="560" height="315" src="https://www.dailymotion.com/embed/video/x4ik5tb?start=11" allowfullscreen></iframe><br /><a href="https://www.dailymotion.com/video/x4ik5tb_coldplay-glastonbury-2016-up-up-with-kids-live-full-version_music?start=11" target="_blank">Coldplay Glastonbury 2016 - Up &amp; Up - with Kids...</a> <i>von <a href="https://www.dailymotion.com/jon-chew" target="_blank">jon-chew</a></i>',
    expect: { vid: 'x4ik5tb', param: 'html5video dailymotion start-11' }
  },
  //------ DCTP.tv
  {
    id: 'DCTP.tv/with starttime',
    code: '<iframe width="640" scrolling="no" height="360" frameborder="0" src="https://www.dctp.tv/filme/erdbeben-und-todeswelle/embed/?t=0m10s" name="dctp-embed" marginwidth="0" marginheight="0"><br></iframe>',
    expect: { vid: 'erdbeben-und-todeswelle', param: 'html5video dctptv start-10' }
  },
  //------ Filmstarts
  {
    id: 'Filmstarts',
    code: '<div id="blogvision">    <iframe src="https://player.filmstarts.de/19561243.html" style="width:480px; height:270px">    </iframe>    <br />    <a href="http://www.filmstarts.de/kritiken/204833.html" target="_blank" rel="noopener noreferrer">Zwischen zwei Leben - The Mountain Between Us</a>    <br/>    <a href="http://www.filmstarts.de/kritiken/204833/trailer/19561243.html"><strong>Zwischen zwei Leben - The Mountain Between Us</strong> Trailer DF</a>  </div>',
    expect: { vid: '19561243', param: 'html5video filmstarts' }
  },
  //------ Giphy as iframe
  {
    id: 'Giphy as iframe',
    code: '<iframe src="https://giphy.com/embed/5GoVLqeAOo6PK" width="480" height="375" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/excited-screaming-jonah-hill-5GoVLqeAOo6PK">via GIPHY</a></p>',
    expect: { vid: '5GoVLqeAOo6PK', param: 'html5video giphy ratio-1.28' }
  },
  //------ Giphy as image
  {
    id: 'Giphy as image',
    code: '<iframe src="https://i.giphy.com/5GoVLqeAOo6PK.gif" width="480" height="375" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/excited-screaming-jonah-hill-5GoVLqeAOo6PK">via GIPHY</a></p>',
    expect: { vid: '5GoVLqeAOo6PK', param: 'html5video giphy asimage ratio-1.28' }
  },
  //------ Itemfix (former Liveleak)
  {
    id: 'Itemfix',
    code: '<iframe width="640" height="360" src="https://www.itemfix.com/e/okhms0" frameborder="0" allowfullscreen></iframe>',
    expect: { vid: 'okhms0', param: 'html5video itemfix' }
  },
  //------ JsFiddle
  {
    id: 'JsFiddle',
    code: '<iframe width="100%" height="300" src="https://jsfiddle.net/foreyez/vdk7guob/embedded/js,html,css,result/dark/" allowpaymentrequest allowfullscreen="allowfullscreen" frameborder="0"></iframe>',
    expect: { vid: 'foreyez/vdk7guob', param: 'html5video jsfiddle' }
  },
  //------ Slides/dark
  {
    id: 'Slides/dark',
    code: '<iframe src="https://slides.com/javascriptla/guide-to-es6/embed?style=dark" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    expect: { vid: 'javascriptla/guide-to-es6', param: 'html5video slides ratio-1.37143' }
  },
  //------ Slides/light
  {
    id: 'Slides/light',
    code: '<iframe src="https://slides.com/javascriptla/guide-to-es6/embed?style=light" width="576" height="420" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    expect: { vid: 'javascriptla/guide-to-es6', param: 'html5video slides color-light ratio-1.37143' }
  },
  //------ Slideshare
  {
    id: 'Slideshare with slide',
    code: '<iframe src="https://www.slideshare.net/slideshow/embed_code/key/vYUBnUYL3JbBmP?startSlide=8" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/MelissaPerri/the-build-trap-66849122" title="The Build Trap" target="_blank">The Build Trap</a> </strong> de <strong><a target="_blank" href="//www.slideshare.net/MelissaPerri">Melissa Perri</a></strong> </div>',
    expect: { vid: 'vYUBnUYL3JbBmP', param: 'html5video slideshare slide-8 ratio-1.2268' }
  },
  //------ Soundcloud as stripe
  {
    id: 'Soundcloud/stripe',
    code: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1093647757&color=%2327275b&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"></iframe>',
    expect: { vid: '1093647757', param: 'html5video soundcloud stripe linkcol-27275b' }
  },
  {
    id: 'Soundcloud/big/color',
    code: '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1093647757&color=%2327275b&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"></iframe>',
    expect: { vid: '1093647757', param: 'html5video soundcloud linkcol-27275b' }
  },
  //------ Speakerdeck first slide
  {
    id: 'Speakerdeck/no slide',
    code: '<iframe width="720" height="405" src="https://speakerdeck.com/player/4ab3c53d71fd4434a87934b8600888fb?slide=" frameborder="0" allowfullscreen=""></iframe>',
    expect: { vid: '4ab3c53d71fd4434a87934b8600888fb', param: 'html5video speakerdeck' }
  },
  //------ Speakerdeck slide number
  {
    id: 'Speakerdeck with slide number',
    code: '<iframe width="720" height="405" src="https://speakerdeck.com/player/704d7f2694fa43559e0afc488a0c810c?slide=11" frameborder="0" allowfullscreen=""></iframe>',
    expect: { vid: '704d7f2694fa43559e0afc488a0c810c', param: 'html5video speakerdeck slide-11' }
  },
  //------ TED
  {
    id: 'TED',
    code: '<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/sarah_corbett_activism_needs_introverts" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>',
    expect: { vid: 'sarah_corbett_activism_needs_introverts', param: 'html5video ted' }
  },
  //------ TED/Subtitles
  {
    id: 'TED with German subtitles',
    code: '<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/lang/de/paul_tasner_how_i_became_an_entrepreneur_at_66" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>',
    expect: { vid: 'paul_tasner_how_i_became_an_entrepreneur_at_66', param: 'html5video ted lang' }
  },
  //------ Vimeo/Standard
  {
    id: 'Vimeo/Standard',
    code: '<iframe src="https://player.vimeo.com/video/125947740" width="640" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="https://vimeo.com/125947740">WILDERNESS</a> from <a href="https://vimeo.com/user10257701">Ivan Friedman - MAYA PICTURES</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
    expect: { vid: '125947740', param: 'html5video vimeo ratio-2.37037' }
  },
  {
    id: 'Vimeo/Color',
    code: '<iframe src="https://player.vimeo.com/video/125947740?color=c9ff23" width="640" height="270" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    expect: { vid: '125947740', param: 'html5video vimeo linkcol-c9ff23 ratio-2.37037' }
  },
  //------ Vine
  {
    id: 'Vine',
    code: '<iframe src="https://vine.co/v/5XwKTtq777Q/embed/simple" width="600" height="600" frameborder="0"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script>',
    expect: { vid: '5XwKTtq777Q', param: 'html5video vine ratio-1' }
  },
  //------ YouTube
  {
    id: 'YouTube',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DyfM7oLIlp0?start=&end=" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    expect: { vid: 'DyfM7oLIlp0', param: 'html5video youtube' }
  },
  {
    id: 'YouTube/start',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DyfM7oLIlp0?start=10&end=" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    expect: { vid: 'DyfM7oLIlp0', param: 'html5video youtube start-10' }
  },
  {
    id: 'YouTube/new-ID-regex',
    code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9Y-SvufmB2E?start=&end=" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    expect: { vid: '9Y-SvufmB2E', param: 'html5video youtube' }
  }
];