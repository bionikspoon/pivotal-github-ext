/* eslint-env browser, webextensions */
import debug from './utils/debug'

chrome.extension.sendMessage({}, () => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)
      const $head = document.getElementsByTagName('head')[0]
      const $script = document.createElement('script')
      $script.type = 'text/javascript'
      $script.src = 'https://localhost:8080/index.js'
      $head.appendChild($script)
      // require('./index')

      // ----------------------------------------------------------
      // eslint-disable-next-line no-console
      debug('Script from dev/inject/index.js successfully loaded.')
      // ----------------------------------------------------------
    }
  }, 10)
})
