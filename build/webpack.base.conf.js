const webpack = require('webpack');
const path = require('path');
const utils = require('./utils');
const eslintFriendlyFormatter = require('eslint-friendly-formatter');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry : './src/main.js',

  output : {
    path : resolve('./www'),
    filename : 'build.js'
  },
  // devtool : 'cheap-module-eval-source-map',
  resolve : {
    extensions : ['.js', '.vue', '.json'],
    alias : {
      'vue$' : 'vue/dist/vue.common.js',
      '@' : resolve('src')
    },
    modules : [
      resolve('./src'),
      'node_modules'
    ],
  },

  module : {
    rules : [
      {
        test : /\.(js|vue)$/,
        loader : 'eslint-loader',
        enforce : 'pre',
        include : [resolve('src'), resolve('test')],
        options : {
          formatter : eslintFriendlyFormatter
        }
      },
      {
        test : /\.vue$/,
        loader : 'vue-loader',
        options : vueLoaderConfig
      },
      {
        test : /\.js$/,
        loader : 'babel-loader',
        include : [resolve('src'), resolve('test')]
      },
      {
        test : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader : 'url-loader',
        options : {
          limit : 10000,
          name : utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader : 'url-loader',
        options : {
          limit : 10000,
          name : utils.assetsPath('fonts/[name].[ext]')
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  plugins : [],
};
