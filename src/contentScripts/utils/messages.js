/* @flow */
import { STATUS, MESSAGE } from '../../shared/constants'

const asyncMessage = async ({ chrome, message }) => {
  const { status, payload } = await new Promise(resolve =>
    chrome.runtime.sendMessage(message, resolve)
  )

  if (status !== STATUS.OK) {
    throw payload
  }

  return payload
}

const messageCreator = messageType => async ({ chrome, payload }) => {
  const message = { type: messageType, payload }

  return asyncMessage({ chrome, message })
}

export const fetchStory = messageCreator(MESSAGE.FETCH_STORY) // eslint-disable-line import/prefer-default-export
