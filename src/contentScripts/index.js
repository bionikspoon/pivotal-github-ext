/* @flow */
/* eslint-env browser */
import debug from './utils/debug'
import mount from './mount'

const init = () => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)

      mount()

      // ----------------------------------------------------------
      debug('`index.js` loaded successfully')
      // ----------------------------------------------------------
    }
  }, 10)

  const observer = new MutationObserver(mutations => {
    mutations.forEach((mutation: MutationRecord) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (
            node instanceof HTMLElement &&
            node.classList.contains('new-discussion-timeline')
          ) {
            mount()
          }
        })
      }
    })
  })

  const target = document.getElementById('js-repo-pjax-container')
  const config = {
    childList: true,
    subtree: false,
  }

  if (target) {
    observer.observe(target, config)
  }
}

init()
