/**
 * uploadStories: updates the relevant stories (html) on twoday
 * ============================================================
 * /stories/videoload2 (from ./dist/videoload2-story.html)
 * /stories/providerdocumentation (from ./dist/videoload2-extract.html)
 * /stories/videotool2 (from ./dist/videoload2-tool.html)
 */

var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request-promise');

//request.debug = true; // uncomment to activate debugging
require('dotenv-safe').load();

// set some defaults
var req = request.defaults({
    followAllRedirects: true,
    jar: true,
    simple: false,
    rejectUnauthorized: false,
    resolveWithFullResponse: true
});

const loginUrl = 'https://www.twoday.net/members/login';
const blogUrl = 'http://neonwilderness.twoday.net/stories/';

/**
 * Returns a GETs secretKey to be used in a subsequent POST
 */
var getSecretKey = function(body, response, resolveWithFullResponse){
    var $ = cheerio.load(body);
    return $('[name="secretKey"]').val();
};

/**
 * Returns GET story input field values to be used in a subsequent POST
 */
var getIncomingData = function(body, response, resolveWithFullResponse){
    var $ = cheerio.load(body);
    return { 
        secretKey: $('[name="secretKey"]').val(),
        content_title: $('[name="content_title"]').val(),
        modNiceUrls_urlid: $('[name="modNiceUrls_urlid"]').val(),
        addToFront: $('[name="addToFront"]').val(),
        checkbox_addToFront: $('[name="checkbox_addToFront"]').val(),
        addToTopic: $('[name="addToTopic"]').val(),
        topic: $('[name="topic"]').val(),
        editableby: $('[name="editableby"]').val(),
        discussions: $('[name="discussions"]').val(),
        checkbox_discussions: $('[name="checkbox_discussions"]').val(),
        createtime: $('[name="createtime"]').val(),
        publish: $('[name="publish"]').val()
    };
};

/**
 * Files to be uploaded
 * name: the story's niceurl name
 * src:  the appropriate dist-file to be copied into the story
 */
var uploadFiles = [
    { name: 'videoload2', src: 'videoload2-story.html' },
    { name: 'providerdocumentation', src: 'videoload2-extract.html' },
    { name: 'videotool2', src: 'videoload2-tool.html' }
];

/**
 * Request-Promise sequence to update one file
 */
var updateStory = function(story, fileIndex){
    var storyEditUrl = `${blogUrl}${story.name}/edit`;
    console.log('Preparing to edit story:', storyEditUrl);
    req.get({
        uri: storyEditUrl,
        transform: getIncomingData
    })
    .then( function(incoming){
        console.log('Updating story:', storyEditUrl);
        return req.post({
            uri: storyEditUrl,
            form: {
                'secretKey': incoming.secretKey,
                'content_title': incoming.content_title,
                'modNiceUrls_urlid': incoming.modNiceUrls_urlid,
                'content_text': fs.readFileSync(`${__dirname}/../dist/${story.src}`, 'utf8'),
                'addToFront': incoming.addToFront,
                'checkbox_addToFront': incoming.checkbox_addToFront,
                'addToTopic': incoming.addToTopic,
                'topic': incoming.topic,
                'editableby': incoming.editableby,
                'discussions': incoming.discussions,
                'checkbox_discussions': incoming.checkbox_discussions,
                'createtime': incoming.createtime,
                'publish': incoming.publish
            }
        });
    })
    .then( function(){
        console.log(`Update completed for story #${fileIndex+1}: ${story.name} (${story.src}).`);
    })
    .catch( function(err){
        console.log('Update ***failed*** for story:', story.src, 'with Error', err);
    });
};

/**
 * Login to Twoday to establish auth cookie
 */
req.get({
    url: loginUrl,
    transform: getSecretKey
})
.then( function(secretKey){
    return req.post({
        url: loginUrl,
        form: {
            'secretKey': secretKey,
            'popup': '',
            'step': '',
            'isuser': 1,
            'name': process.env.USER,
            'password': process.env.PASSWORD,
            'remember': 1,
            'modSoruaAuthServerAuthUri': 'http://www.sorua.net/typekey',
            'login': 'Anmelden'
        }
    });
})
// process story/file list to be uploaded
.then( function(){
    return uploadFiles.map( updateStory );
})
.catch( function(err){
    console.log('Update failed with error: ', err);
});