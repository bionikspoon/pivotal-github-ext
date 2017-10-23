/* @flow */
import { withStateHandlers, lifecycle, mapProps } from 'recompose'
import { compose, omit, tap } from 'ramda'
import { LOADING } from '../constants'

type Callback = any => Promise<{}>

type Options = { name: string }

const renameData = ({ name }: Options) => ({ data, ...props }) => ({
  ...props,
  [name]: data,
})

export default (callback: Callback, options: Options = { name: 'data' }) =>
  compose(
    withStateHandlers(() => ({ data: { loading: LOADING.UNSTARTED } }), {
      onInit: () => () => ({ data: { loading: LOADING.STARTED } }),
      onSuccess: () => results => ({
        data: { loading: LOADING.SUCCESS, ...results },
      }),
      onError: () => error => ({ data: { loading: LOADING.ERROR, error } }),
    }),
    lifecycle({
      componentDidMount() {
        const { onInit, onSuccess, onError } = this.props

        Promise.resolve(null)
          .then(() => onInit())
          .then(() => callback(this.props))
          .then(onSuccess)
          .then(() => console.log('this.props', this.props))
          .catch(onError)
      },
    }),
    mapProps(renameData(options)),
    mapProps(omit(['onInit', 'onSuccess', 'onError']))
  )
