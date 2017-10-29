/* @flow */
import { nth, clone } from 'ramda'

function matches(regex: RegExp, text: string) {
  let results = []
  let match = null

  // eslint-disable-next-line no-cond-assign
  while ((match = regex.exec(text)) != null) {
    results = [...results, match]
  }

  return results
}
const matchGroup = (regex: RegExp, index: number, text: string) =>
  [...matches(clone(regex), text)].map(nth(index))

export default matchGroup
