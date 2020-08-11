// const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log('webpack.common.js');
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  entry: {
    index: './src/index.js',
  }
};