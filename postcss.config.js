/* eslint-disable global-require, import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-cssnext')(),
    require('postcss-browser-reporter')(),
    require('postcss-reporter')(),
  ],
}
