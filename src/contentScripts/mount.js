/* @flow */
/* eslint-env browser */
import ReactDom from 'react-dom'
import React from 'react'
import { head, defaultTo, pipe, prop } from 'ramda'

import App from './components/App'

const APP_ID = 'PivotalGithubChromeExtension'

const insertAfter = (newNode, refNode) => {
  if (refNode && refNode.parentNode) {
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
  }
}
const innerText = pipe(head, defaultTo({}), prop('innerText'))

export default () => {
  if (document.getElementById(APP_ID) === null) {
    const $header = document.getElementById('partial-discussion-header')
    const $div = document.createElement('div')
    $div.id = APP_ID
    insertAfter($div, $header)

    const prTitle = innerText(document.getElementsByClassName('js-issue-title'))

    ReactDom.render(<App title={prTitle} />, $div)
  }
}
