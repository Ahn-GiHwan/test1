const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, option) => {
  return {
    entry: './src/main.js',
    output: {
      filename: 'main.js',
      clean: true
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]]
            }
          }
        },
        {
          test: /\.s?css/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [['autoprefixer']]
                }
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new CopyPlugin({
        patterns: [{ from: 'static' }]
      }),
      new ReactRefreshWebpackPlugin({
        overlay: {
          useURLPolyfill: true
        }
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}
