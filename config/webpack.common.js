const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const proMode = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaders = [
  { loader: 'css-loader', options: { importLoaders: 1 } },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [
        postcssPresetEnv({
          stage: 0
        })
      ]
    }
  }
];

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        // exclude: /(theme-chalk(?:\/|\\)index|exportStyle|katex|github-markdown|prism[-a-z]*|\.theme|headerFooterStyle)\.css$/,
        use: [proMode ? MiniCssExtractPlugin.loader : 'style-loader', ...cssLoaders]
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: [path.resolve(__dirname, '../node_modules'), path.resolve(__dirname, '../lib')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'imgs/[name]--[folder].[ext]'
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name]--[folder].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name]--[folder].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.UNSPLASH_ACCESS_KEY': JSON.stringify(process.env.UNSPLASH_ACCESS_KEY)
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'index.min.css'
    })
  ],
  resolve: {
    alias: {
      snapsvg: path.resolve(__dirname, '../src/muya/lib/assets/libs/snap.svg-min.js'),
      'wiz-react-markdown-editor': path.resolve(__dirname, '../lib')
    }
  }
};
