'use strict';

var path = require('path');
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var NODE_ENV = process.env.NODE_ENV;
var BASE_PATH = process.env.BASE_PATH;
var nodeRoot = path.join(__dirname, 'node_modules');
var appRoot = path.join(__dirname, 'app');
var config = {
  context: appRoot,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sanji-time-ui.js'
  },
  resolve: {
    root: [nodeRoot],
    // npm-linked packages can locate missing dependencies in app's node_modules
    fallback: nodeRoot,
    alias: {
      'angular-clock.css': nodeRoot + '/angular-clock/dist/angular-clock.css',
      'angular-material.css': nodeRoot + '/angular-material/angular-material.css',
      'angular-material-icons.css': nodeRoot + '/angular-material-icons/angular-material-icons.css',
      'angular-material-data-table.css': nodeRoot + '/angular-material-data-table/dist/md-data-table.css',
      'angular-sanji-window.css': nodeRoot + '/angular-sanji-window/dist/angular-sanji-window.css',
      'toastr.css': nodeRoot + '/toastr/build/toastr.css'
    },
    extensions: ['', '.js', '.json', 'html', 'scss', 'css']
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint', exclude: /(node_modules)/}
    ],
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]', exclude: [/node_modules/, path.join(__dirname, '/app/index.html')] }
    ],
    noParse: []
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new webpack.DefinePlugin({
      __TEST__: 'test' === NODE_ENV,
      __DEV__: 'development' === NODE_ENV,
      __RELEASE__: 'production' === NODE_ENV,
      __BASE_PATH__: JSON.stringify(BASE_PATH) || '"http://localhost:8000"'
    }),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
