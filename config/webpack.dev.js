const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: path.resolve(__dirname, '../demo/index.js'),
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../demo/'),
    compress: true,
    host: '0.0.0.0',
    port: 3001,
    open: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../demo/'),
    globalObject: 'this'
  }
});
