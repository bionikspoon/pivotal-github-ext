const fs = require('fs-extra')
const path = require('path')
const { merge } = require('ramda')
const debug = require('debug')('ext:scripts:write_manifest')

const env = require('../env')
const _manifest = require('../src/manifest.json')
const _package = require('../package.json')

const prepareManifest = merge({
  description: _package.description,
  version: _package.version,
  content_security_policy:
    env.NODE_ENV === 'production'
      ? "script-src 'self'; object-src 'self'; connect-src 'self' https://www.pivotaltracker.com;"
      : `script-src 'self' https://localhost:${env.PORT}; object-src 'self'; connect-src 'self' https://www.pivotaltracker.com https://localhost:${env.PORT} wss://localhost:${env.PORT};`,
})

const file = path.join(__dirname, '../build/manifest.json')
const manifest = prepareManifest(_manifest)

fs
  .outputJSON(file, manifest, { spaces: 2 })
  .then(() => debug(`Wrote manifest.json to ${file}`))
