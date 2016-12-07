var bytediff = require('gulp-bytediff');
var cheerio = require('cheerio');
var del = require('del');
var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var htmlmin = require('gulp-htmlmin');
var modifyFile = require('gulp-modify-file');
var rename = require('gulp-rename');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

//- gulp parameter --production or -p initiates webpack's production version (no source maps, minified JS)
var production = gutil.env.production || gutil.env.p || false;

gulp.task( 'default', ['webpack', 'htmlmin', 'deploy'], function(){
});

gulp.task('webpack', function(callback) {

    if (production){
        // minimize js
        webpackConfig.plugins.push( new webpack.optimize.UglifyJsPlugin() );
        // no source maps
        webpackConfig.devtool = '';
        // issue log message
        console.log(gutil.colors.inverse.cyan('--- Production version in progress ---'));
    } else {
        // generate source maps
        webpackConfig.devtool = 'source-map';
    }

    webpack( webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({}));
        callback();
    });
});

gulp.task( 'htmlmin', function(){
    return gulp.src(['./dist/teststory.html', './dist/testtool.html'])
        .pipe(bytediff.start())
        .pipe(htmlmin({collapseWhitespace: true, decodeEntities: false}))
        .pipe(modifyFile(function(content, path, file) {
            var $ = cheerio.load(content, {decodeEntities: false});
            var providerDocumentation = $('#providerDocumentation').html();
            if (providerDocumentation) {
                var len = providerDocumentation.length;
                if (len) {
                    fs.writeFileSync('./dist/videoload2-extract.html', providerDocumentation, 'utf8');
                    console.log(gutil.colors.blue('Extracted provider documentation: ' + len + ' bytes to separate file.'));
                    $('#providerDocumentation').html('Einen Moment bitte, die Dokumentation wird geladen...');
                }
            }
            return $('.storyContent').html();
        }))
        .pipe(bytediff.stop(function(data) {
            var difference = '% ' + (data.savings > 0 ? 'smaller.' : 'larger.');
            return data.fileName+', was: '+data.startSize+', now: '+data.endSize+' (='+(data.endSize/1024).toFixed(1)+' kb), '+
                   (100-data.percent*100).toFixed(2)+difference;
        }))
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('test', 'videoload2-');
        }))
        .pipe(gulp.dest('dist'));
});

//-- Copy bundled entry files to a public Dropbox folder
gulp.task( 'deploy', ['webpack', 'htmlmin'], function(){

    var targetDir = 'D:/Dokumente/Dropbox/Public/js/videoload2/';
    var entries = [];
    var keys = Object.keys(webpackConfig.entry);

    // rename posturl.html to .xml
    gulp.src('./dist/posturl.html')
        .pipe(rename('posturl.xml'))
        .pipe(gulp.dest('./dist'));
    del('./dist/posturl.html');
    entries.push('./dist/posturl.xml');

    if (production) del(['./dist/*.map']);

    for (var i=0, len=keys.length; i<len; i++) {
        var name = './dist/' + keys[i];
        entries.push( name + '.js');
        if (!production) entries.push( name + '.js.map');
    }

    return gulp.src( entries ).pipe(gulp.dest(targetDir));

});