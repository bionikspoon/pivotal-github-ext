/* eslint-env browser, webextensions */

chrome.extension.sendMessage({}, () => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)

      const $head = document.getElementsByTagName('head')[0]
      const $script = document.createElement('script')
      $script.type = 'text/javascript'
      $script.src = 'https://localhost:8080/index.js'
      $head.appendChild($script)
      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log('Hello. This message was sent from src/inject.js')
      // ----------------------------------------------------------
    }
  }, 10)
})
