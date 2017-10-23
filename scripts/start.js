const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const _config = require('../webpack.config')
const debug = require('debug')('ext:scripts:start')

const {
  __,
  append,
  evolve,
  flatten,
  map,
  pipe,
  test,
  unless,
} = require('ramda')

const PORT = process.env.PORT || 8080
const HOT_SERVER = [
  `webpack-dev-server/client?https://localhost:${PORT}`,
  'webpack/hot/dev-server',
]
const prepareConfig = evolve({
  entry: map(
    unless(test(/contentScripts/), pipe(append(__, HOT_SERVER), flatten))
  ),
  plugins: append(new webpack.HotModuleReplacementPlugin()),
})

const config = prepareConfig(_config)
const options = config.devServer

WebpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, options)

server.listen(PORT, 'localhost', () => {
  require('./write_manifest') // eslint-disable-line global-require
  require('./copy_assets') // eslint-disable-line global-require
  debug(`dev server listening on port ${PORT}`)
})
