/* @flow */
const { chrome } = global

export const get = (keys: any): Promise<{}> =>
  new Promise((resolve, reject) =>
    chrome.storage.sync.get(
      keys,
      response =>
        chrome.runtime.lastError
          ? reject(chrome.runtime.lastError)
          : resolve(response)
    )
  )

export const set = (keys: {}): Promise<{}> =>
  new Promise((resolve, reject) =>
    chrome.storage.sync.set(
      keys,
      response =>
        chrome.runtime.lastError
          ? reject(chrome.runtime.lastError)
          : resolve(response)
    )
  )
