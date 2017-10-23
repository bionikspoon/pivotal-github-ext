/* @flow */
import { map, toPairs, fromPairs, pipe, tap } from 'ramda'
import { fetch } from './messages'
import debug from './debug'

type Arguments = {
  resources: {},
  options?: {},
}

const fetchResources = ({ resources, options }: Arguments): Promise<{}> =>
  pipe(
    toPairs,
    map(([resourceType, url]) =>
      fetch({ url, options })
        .then(
          tap(response =>
            debug('Successfully fetched %s: %O', resourceType, response)
          )
        )
        .then(response => [resourceType, response])
    ),
    result => Promise.all(result).then(fromPairs)
  )(resources)

export default fetchResources
