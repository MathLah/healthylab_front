const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseWebpackConfig, {
  mode : 'development',
  devtool : 'cheap-module-eval-source-map',
  plugins : [
    new HtmlWebpackPlugin({
      filename : 'index.html',
      template : 'src/index.html',
      inject : true,
    })
  ]
});
