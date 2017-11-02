const { evolve, concat } = require('ramda')
const webpack = require('webpack')
const debug = require('debug')('ext:scripts:build')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const config = require('../webpack.config')

const prepareConfig = evolve({
  plugins: concat([new UglifyJSPlugin()]),
})

webpack(prepareConfig(config), error => {
  if (error) {
    throw error
  }
  debug('bundles built')
  require('./write_manifest') // eslint-disable-line global-require
  require('./copy_assets') // eslint-disable-line global-require
})
