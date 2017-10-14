/* eslint-env browser */

import ReactDom from 'react-dom'
import React from 'react'
import { head, defaultTo, pipe, prop } from 'ramda'

import './index.css'
import App from './App'

function insertAfter(newNode, refNode) {
  return refNode.parentNode.insertBefore(newNode, refNode.nextSibling)
}
const innerText = pipe(head, defaultTo({}), prop('innerText'))

const $header = document.getElementById('partial-discussion-header')
const $div = document.createElement('div')
insertAfter($div, $header)

const prTitle = innerText(document.getElementsByClassName('js-issue-title'))

ReactDom.render(<App title={prTitle} />, $div)

// ----------------------------------------------------------
// This part of the script triggers when page is done loading
console.log('Hello. This message was sent from src/index.js')
// ----------------------------------------------------------
