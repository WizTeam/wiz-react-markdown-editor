const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
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
        ]
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
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     // Options similar to the same options in webpackOptions.output
  //     // both options are optional
  //     filename: 'index.min.css'
  //   })
  // ],
  resolve: {
    alias: {
      snapsvg: path.join(__dirname, './src/muya/lib/assets/libs/snap.svg-min.js')
    }
  }
};
