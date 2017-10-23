const webpack = require('webpack')
const config = require('../webpack.config')
const debug = require('debug')('ext:scripts:build')

webpack(config, error => {
  if (error) {
    throw error
  }
  debug('bundles built')
  require('./write_manifest') // eslint-disable-line global-require
  require('./copy_assets') // eslint-disable-line global-require
})
