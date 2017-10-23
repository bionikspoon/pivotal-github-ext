/* @flow */
/* eslint-env  browser */
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const $div = document.getElementById('App')

if ($div) {
  ReactDom.render(<App />, $div)
}
