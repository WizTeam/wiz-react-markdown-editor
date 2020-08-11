const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: path.resolve(__dirname, './demo/index.js'),
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './demo/'),
    compress: true,
    host: '127.0.0.1',
    port: 3001,
    open: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './demo/'),
    globalObject: 'this'
  }
});