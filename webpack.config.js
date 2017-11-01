const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/contentScripts/index.js',
    background: './src/background/index.js',
    options: './src/options/index.js',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        DEBUG: JSON.stringify(process.env.DEBUG),
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'background.html',
      template: './src/background/index.html',
      chunks: ['background'],
    }),
    new HtmlWebpackPlugin({
      filename: 'options.html',
      template: './src/options/index.html',
      chunks: ['options'],
    }),
    new WriteFilePlugin(),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    https: true,
    overlay: true,
    hot: false,
    port: process.env.PORT || 8080,
    host: 'localhost',
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
}
