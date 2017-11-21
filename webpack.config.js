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
        extensions: ['.css', '.less', '.js', '.json', '.ts']
    },
    plugins: [
        /* new UglifyJsPlugin({
            sourceMap: false,
            compress: { warnings: false }
         }) */
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: {
                    loader: 'jshint-loader',
                    options: { asi: true, esversion: 6, sub: true }
                  }
            },
			{
				test: /\.json$/,
				use: 'json-loader'
			},
            {
                test: /\.less$/, 
                use: [
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader' }, 
                    { loader: 'less-loader', options: {compress: true} }
                ]
            },
            {
                test: /\.css$/, 
                use: [
                    { loader: 'style-loader' }, 
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/, 
                loader: 'ts-loader'
            }
        ]
    }
};