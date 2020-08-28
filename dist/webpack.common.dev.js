"use strict";

var path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: "production",
  module: {
    rules: [{
      test: /\.css$/i,
      exclude: "/node_modules/",
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './template.html',
    filename: 'index.html'
  }), new MiniCssExtractPlugin(), new CopyWebpackPlugin({
    patterns: [{
      from: path.resolve(__dirname, 'src/images'),
      to: path.resolve(__dirname, 'dist/images')
    }]
  })]
};