var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        'videoload2':       './src/videoload2.ts',
        'videoload2-story': './src/videoload2-story.ts',
        'videoload2-tool':  './src/videoload2-tool.ts',
        'videoload2-spec':  './test/videoload2-spec.ts'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js'
    },
    externals: [
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        /* new webpack.optimize.UglifyJsPlugin() */
    ],
    module: {
        preloaders: [
            {test: /\.js$/, loader: 'jshint', exclude: '/node_modules'}
        ],
        loaders: [
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader?compress'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
};