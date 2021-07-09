const path = require('path')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
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
  plugins: [new ESLintPlugin()]
}
