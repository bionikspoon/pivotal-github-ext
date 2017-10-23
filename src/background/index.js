/* @flow */
/* eslint-env  webextensions */
import { tap } from 'ramda'
import { STATUS, MESSAGE } from '../shared/constants'
import debug from './utils/debug'
import * as storage from '../shared/utils/storage'

const { fetch, chrome } = global

const logFetchSuccess = url =>
  tap(response =>
    debug('Successfully fetched url: %s response: %O', url, response)
  )
debug('background loaded')
chrome.runtime.onMessageExternal.addListener(
  ({ type, payload }, sender, sendResponse) => {
    debug('received message type: %s url: %s options: %O', type)
    switch (type) {
      case MESSAGE.FETCH:
        debug('fetching url: %s options: %O', payload.url, payload.options)
        fetch(payload.url, payload.options)
          .then(response => response.json())
          .then(logFetchSuccess(payload.url))
          .then(json => sendResponse({ status: STATUS.OK, payload: json }))
        break
      case MESSAGE.STORAGE:
        debug('storage.get keys: %O', payload)
        storage
          .get(payload)
          .then(
            tap(response =>
              debug('Successfully retrieved storage keys: %O', response)
            )
          )
          .then(response =>
            sendResponse({ status: STATUS.OK, payload: response })
          )

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
