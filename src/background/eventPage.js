/* @flow */
/* eslint-env  webextensions */
import { tap } from 'ramda'
import { STATUS, MESSAGE } from '../shared/constants'
import debug from './utils/debug'

const { fetch, chrome } = global

const successMessage = url =>
  tap(response =>
    debug('Successfully fetched url: %s response: %O', url, response)
  )

chrome.runtime.onMessageExternal.addListener(
  ({ type, payload: { url, options } }, sender, sendResponse) => {
    switch (type) {
      case MESSAGE.FETCH:
        fetch(url, options)
          .then(response => response.json())
          .then(successMessage(url))
          .then(payload => sendResponse({ status: STATUS.OK, payload }))
        break
      default:
        sendResponse({
          status: STATUS.FAILED,
          payload: { message: `Unknown message type: ${type}` },
        })
    }
    return true
  }
)
