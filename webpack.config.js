const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
const BASE_PATH = process.env.BASE_PATH;
const API_TOKEN = process.env.API_TOKEN;
const nodeRoot = path.join(__dirname, 'node_modules');
const appRoot = path.join(__dirname, 'src');
const config = {
  context: appRoot,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sanji-time-ui.js'
  },
  resolve: {
    alias: {
      'angular-clock.css': nodeRoot + '/angular-clock/dist/angular-clock.css',
      'angular-material.css': nodeRoot + '/angular-material/angular-material.css',
      'angular-material-icons.css': nodeRoot + '/angular-material-icons/angular-material-icons.css',
      'angular-material-data-table.css': nodeRoot + '/angular-material-data-table/dist/md-data-table.css',
      'angular-sanji-window.css': nodeRoot + '/angular-sanji-window/dist/angular-sanji-window.css',
      'toastr.css': nodeRoot + '/toastr/build/toastr.css'
    },
    extensions: ['.js', '.json', 'html', 'scss', 'css']
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'eslint-loader', exclude: /node_modules/, enforce: 'pre' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, use: 'json-loader', exclude: /node_modules/ },
      {
        test: /\.html$/,
        use: 'ng-cache-loader?prefix=[dir]/[dir]',
        exclude: [/node_modules/, path.join(__dirname, '/src/index.html')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV || 'development')
      },
      __BASE_PATH__: JSON.stringify(BASE_PATH || 'http://localhost:8000'),
      __API_TOKEN__: JSON.stringify(API_TOKEN || '')
    })
  ]
};

module.exports = config;
