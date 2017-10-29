/* eslint-env browser */
import ReactDom from 'react-dom'
import React from 'react'
import { head, defaultTo, pipe, prop } from 'ramda'
import debug from './utils/debug'

import App from './components/App'

const { chrome } = global

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

chrome.extension.sendMessage({}, () => {
  const readyStateCheckInterval = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)

      mount()

      // ----------------------------------------------------------
      debug('Script from index.js successfully loaded.')
      // ----------------------------------------------------------
    }
  }, 10)
})
