/* @flow */
/* eslint-env browser */
import ReactDom from 'react-dom'
import React from 'react'
import { head, defaultTo, pipe, prop } from 'ramda'
import debug from './utils/debug'

import App from './components/App'

const insertAfter = (newNode, refNode) => {
  if (refNode && refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
  }
}
const innerText = pipe(head, defaultTo({}), prop('innerText'))

const mount = () => {
  const $header = document.getElementById('partial-discussion-header')
  const $div = document.createElement('div')
  insertAfter($div, $header)

  const prTitle = innerText(document.getElementsByClassName('js-issue-title'))

  ReactDom.render(<App title={prTitle} />, $div)
}

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
