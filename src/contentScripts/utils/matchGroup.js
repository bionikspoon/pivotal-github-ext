import { nth } from 'ramda'

function* matches(regex, text) {
  while (true) {
    const match = regex.exec(text)
    if (match === null) {
      break
    }
    yield match
  }
}
const matchGroup = (regex, index, text) =>
  [...matches(regex, text)].map(nth(index))

export default matchGroup
