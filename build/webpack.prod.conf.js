const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseWebpackConfig, {
  mode : 'production',
  plugins : [
    new HtmlWebpackPlugin({
      filename : 'index.html',
      template : 'src/index.html',
      inject : true,
      minify : {
        removeComments : true,
        collapseWhitespace : true,
        removeAttributeQuotes : true
      },
    })
  ]
});
