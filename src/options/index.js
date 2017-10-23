/* @flow */
/* eslint-env  webextensions */
import debug from './utils/debug'
import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const { chrome } = global

const $div = document.getElementById('App')

if ($div) {
  ReactDom.render(<App />, $div)
}
