/**
 * upload2cdn: uploads following files to the twoday CDN
 * =====================================================
 * videoload2-min-js      (from ./dist/videoload2.js)
 * videoload2-tool-min-js (from ./dist/videoload2-tool.js)
 * videoload2-story       (from ./dist/videoload2-story.js)
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

var loginUrl = 'https://www.twoday.net/members/login';
var fileCreateUrl = 'http://cdn.twoday.net/files/create';

/**
 * Returns a GETs secretKey to be used in a subsequent POST
 */
var getSecretKey = function(body, response, resolveWithFullResponse){
    var $ = cheerio.load(body);
    return $('[name="secretKey"]').val();
};

/**
 * Returns a GETs secretKey and uri to be used in a subsequent POST
 */
var getSecretKeyAndUri = function(body, response, resolveWithFullResponse){
    return { 
        secretKey: getSecretKey(body, response, resolveWithFullResponse),
        uri: this.uri
    }
};

/**
 * Script files to be uploaded
 * name: script name utilized in Twoday /files
 * src:  the appropriate dist-scriptfile to be uploaded
 * desc: short description to be inserted
 */
var uploadFiles = [
    { name: 'videoload2-min-js', src: 'videoload2.js', desc: 'Videoload Version 2: ermöglicht in Twoday die Einbindung von iframe-Elementen von verschiedensten Plattformen.' },
    { name: 'videoload2-tool-min-js', src: 'videoload2-tool.js', desc: 'Story-Script für den Beitrag stories/videotool2' },
    { name: 'videoload2-story', src: 'videoload2-story.js', desc: 'Story-Script für den Beitrag stories/videoload2' }
];

/**
 * Request-Promise sequence to update one file (file needs to be deleted and re-inserted)
 */
var updateCDNFile = function(cdnFile, fileIndex){
    var fileDeleteUrl = `http://cdn.twoday.net/files/${cdnFile.name}/delete`;
    console.log('Preparing to delete file url:', fileDeleteUrl);
    req.get({
        uri: fileDeleteUrl,
        transform: getSecretKeyAndUri
    })
    .then( function(incoming){
        console.log('Deleting file url:', incoming.uri);
        return req.post({
            uri: incoming.uri,
            form: {
                'secretKey': incoming.secretKey,
                'remove': 'Löschen'
            }
        });
    })
    /* Init file upload */
    .then( function(){
        console.log('Delete completed. Prep to recreate.');  
        return req.get({
            uri: fileCreateUrl,
            transform: getSecretKey
        });
    })
    /* Conduct file upload */
    .then( function(secretKey){
        return req.post({
            uri: fileCreateUrl,
            formData: {
                'secretKey': secretKey,
                'rawfile': { 
                    value: fs.createReadStream(__dirname + '/../dist/' + cdnFile.src),
                    options: {
                        filename: cdnFile.src,
                        contentType: 'application/javascript'
                    }
                },
                'alias': cdnFile.name,
                'description': cdnFile.desc,
                'save': 'Sichern'
            },
        });
    })
    .then( function(){
        console.log(`Update completed for file #${fileIndex+1}: ${cdnFile.name} (${cdnFile.src}).`);
    })
    .catch( function(err){
        console.log('Upload ***failed*** for file:', cdnFile.src, 'with Error', err);
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
// process script file list to be uploaded
.then( function(){
    return uploadFiles.map( updateCDNFile );
})
.catch( function(err){
    console.log('Upload failed with error: ', err);
});