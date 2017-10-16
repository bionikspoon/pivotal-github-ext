/* @flow */
import { nth } from 'ramda'

function* matches(regex: RegExp, text: string) {
  while (true) {
    const match = regex.exec(text)
    if (match === null) {
      break
    }
    yield match
  }
}
const matchGroup = (regex: RegExp, index: number, text: string) =>
  [...matches(regex, text)].map(nth(index))

export default matchGroup
