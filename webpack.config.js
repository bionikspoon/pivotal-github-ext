const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/contentScripts/index.js',
    eventPage: './src/background/eventPage.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PIVOTAL_ACCESS_TOKEN: JSON.stringify(process.env.PIVOTAL_ACCESS_TOKEN),
        DEBUG: JSON.stringify(process.env.DEBUG),
      },
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  devServer: {
    contentBase: './dist',
    https: true,
  },
}
