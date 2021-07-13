const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const WebpackDevServer = require('webpack-dev-server')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
