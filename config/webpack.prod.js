const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

const libsDist = 'lib';
module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, `../${libsDist}/`),
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    noParse: /src\/muya\/lib\/utils\/importResource\.js/
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  }
});
