/* @flow */
import { applySpec, compose, mergeDeepRight, omit, pipe } from 'ramda'
import { mapProps, withProps } from 'recompose'
import fetchResources from '../utils/fetchResources'
import withAsyncFactory from '../../shared/utils/withAsyncFactory'

const fetchData = ({ options: { resources, headers } }) => {
  const options = {
    method: 'GET',
    headers,
    mode: 'cors',
    cache: 'default',
    credentials: 'omit',
  }
  return fetchResources({ resources, options })
}

const DEFAULT_OPTIONS = { headers: {}, resources: {} }

type GetOptions = any => { resources: {}, headers: {} }

export default (getOptions: GetOptions) =>
  compose(
    withProps(
      applySpec({
        options: pipe(getOptions, mergeDeepRight(DEFAULT_OPTIONS)),
      })
    ),
    withAsyncFactory(fetchData),
    mapProps(omit(['options']))
  )
