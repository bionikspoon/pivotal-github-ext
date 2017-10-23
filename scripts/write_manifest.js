const _manifest = require('../src/manifest.json')
const fs = require('fs-extra')
const path = require('path')
const { merge } = require('ramda')
const _package = require('../package.json')
const debug = require('debug')('ext:scripts:write_manifest')

const prepareManifest = merge({
  description: _package.description,
  version: _package.version,
})

const file = path.join(__dirname, '../build/manifest.json')
const manifest = prepareManifest(_manifest)

fs
  .outputJSON(file, manifest, { spaces: 2 })
  .then(() => debug(`Wrote manifest.json to ${file}`))
