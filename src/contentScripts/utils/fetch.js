/* @flow */
/* eslint-env webextensions */
import { STATUS, MESSAGE } from '../../shared/constants'

const { chrome } = global

const fetch = (payload: any): Promise<*> =>
  new Promise((resolve, reject) => {
    const extensionId = 'mmiefdeeknidofnkidcjldcoklbmffdb'

    const message = { type: MESSAGE.FETCH, payload }
    const responseCallback = response =>
      response.status === STATUS.OK
        ? resolve(response.payload)
        : reject(response.payload)

    chrome.runtime.sendMessage(extensionId, message, responseCallback)
  })

export default fetch
