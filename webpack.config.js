const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: {
    videoload2: './src/videoload2.ts',
    'videoload2-story': './src/videoload2-story.ts',
    'videoload2-tool': './src/videoload2-tool.ts',
    'videoload2-spec': './test/videoload2-spec.ts',
    'videoload2-lazy': './test/videoload2-lazy.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  externals: {
    jquery: 'jQuery'
  },
  resolve: {
    extensions: ['.less', '.js', '.ts'],
    fallback: { util: false }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  }
};
