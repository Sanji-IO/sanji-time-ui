'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');

config.devtool = 'source-map';
config.entry = {
  'sanji-ui': './component/index.js'
};
config.output.filename = 'sanji-time-ui.js';
config.output.libraryTarget = 'umd';
config.output.library = 'sjTime';
config.externals = [
  'angular',
  'sanji-core-ui'
];

config.module.loaders = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass?includePaths[]=' + bourbon)
  }
].concat(config.module.loaders);

config.postcss = [ autoprefixer({ browsers: ['last 2 versions'] }) ];

config.plugins.push(
  new ExtractTextPlugin('sanji-time-ui.css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    quiet: true
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    }
  })
);
module.exports = config;
