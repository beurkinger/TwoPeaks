const webpack = require('webpack');

const production = false;

var plugins = [];
var outputFilename = 'public/js/transformed.js';
var outputPath = __dirname + '/';

module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    filename: outputFilename,
    path: outputPath
  },
  plugins: plugins
};
