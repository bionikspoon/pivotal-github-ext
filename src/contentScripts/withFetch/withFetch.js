/* @flow */
import { compose, mergeDeepRight, omit, tap, applySpec, pipe } from 'ramda'
import { lifecycle, withStateHandlers, mapProps, withProps } from 'recompose'
import { LOADING } from '../constants'
import fetch from '../utils/fetch'
import debug from '../utils/debug'

const fetchData = {
  componentDidMount() {
    const { onInit, onSuccess, onError, options: { url, headers } } = this.props
    const options = {
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default',
      credentials: 'omit',
    }

    Promise.resolve(null)
      .then(() => onInit(true))
      .then(() => fetch({ url, options }))
      .then(tap(story => debug('Successfully fetched story: %O', story)))
      .then(onSuccess)
      .catch(onError)
  },
}

const onInit = state => () =>
  mergeDeepRight(state, { data: { loading: LOADING.STARTED } })

const onSuccess = state => response =>
  mergeDeepRight(state, {
    data: {
      loading: LOADING.SUCCESS,
      resource: response,
    },
  })

const onError = state => error =>
  mergeDeepRight(state, { data: { error, loading: LOADING.ERROR } })

const DEFAULT_OPTIONS = { headers: {}, id: 'resource', name: 'data' }
const renameData = ({
  data: { loading, resource },
  options: { name, id },
  ...props
}) => ({
  ...props,
  [name]: { loading, [id]: resource },
})

type GetOptions = any => { name?: string, url: string, id: string, headers: {} }

export default (getOptions: GetOptions) =>
  compose(
    withProps(
      applySpec({
        options: pipe(getOptions, mergeDeepRight(DEFAULT_OPTIONS)),
      })
    ),
    withStateHandlers(() => ({ data: { loading: LOADING.UNSTARTED } }), {
      onInit,
      onSuccess,
      onError,
    }),
    lifecycle(fetchData),
    mapProps(renameData),
    mapProps(omit(['onInit', 'onSuccess', 'onError', 'options']))
  )
