const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        test: /\.theme\.css$/,
        use: ['style-loader', ...cssLoaders]
      },
      {
        test: /\.css$/,
        exclude: /\.theme\.css$/,
        use: ['style-loader', ...cssLoaders]
      },
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
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
    })
  ],
  resolve: {
    alias: {
      snapsvg: path.join(__dirname, './src/muya/lib/assets/libs/snap.svg-min.js')
    }
  }
};
