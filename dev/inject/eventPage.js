/* eslint-env browser, webextensions */

chrome.extension.sendMessage({}, () => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)

      const $head = document.getElementsByTagName('head')[0]
      const $script = document.createElement('script')
      $script.type = 'text/javascript'
      $script.src = 'https://localhost:8080/eventPage.js'
      $head.appendChild($script)

      // ----------------------------------------------------------
      // eslint-disable-next-line no-console
      console.log('Script from dev/inject/eventPage.js successfully loaded.')
      // ----------------------------------------------------------
    }
  }, 10)
})
