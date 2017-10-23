const fs = require('fs-extra')
const path = require('path')
const debug = require('debug')('ext:scripts:copy_assets')

const src = (...next) => path.join(__dirname, '..', 'src', ...next)
const dist = (...next) => path.join(__dirname, '..', 'build', ...next)

const copy = asset =>
  fs
    .copy(src(asset), dist(asset))
    .then(() => debug(`copied ${src(asset)} → ${dist(asset)}`))

copy('_locales')
copy('icons')
