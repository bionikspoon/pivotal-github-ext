const { merge } = require('ramda')
const webpack = require('webpack')
const debug = require('debug')('ext:scripts:build')
const config = require('../webpack.config')

const prepareConfig = merge({ mode: 'production' })

webpack(prepareConfig(config), error => {
  if (error) {
    throw error
  }
  debug('bundles built')
  require('./write_manifest') // eslint-disable-line global-require
  require('./copy_assets') // eslint-disable-line global-require
})
