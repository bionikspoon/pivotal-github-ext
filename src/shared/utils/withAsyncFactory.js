/* @flow */
import { withStateHandlers, lifecycle, mapProps } from 'recompose'
import { compose, omit } from 'ramda'
import { LOADING } from '../constants'

type Callback = any => Promise<{}>

type Options = { name: string }

const withNamespace = ({ name }: Options) =>
  compose(
    mapProps(({ data, ...props }) => ({
      ...props,
      [name]: data,
    })),
    mapProps(omit(['onInit', 'onSuccess', 'onError']))
  )

export default (callback: Callback, options: Options = { name: 'data' }) =>
  compose(
    withStateHandlers(
      { data: { loading: LOADING.UNSTARTED } },
      {
        onInit: () => () => ({ data: { loading: LOADING.STARTED } }),
        onSuccess: () => results => ({
          data: { loading: LOADING.SUCCESS, ...results },
        }),
        onError: () => error => ({ data: { loading: LOADING.ERROR, error } }),
      }
    ),
    lifecycle({
      async componentDidMount() {
        const { onInit, onSuccess, onError } = this.props

        try {
          console.log('onInit started')
          await onInit()
          console.log('onInit finished')
          console.log('callback started')
          const result = await callback(this.props)
          console.log('callback finished')
          console.log('onSuccess started')
          await onSuccess(result)
          console.log('onSuccess finished')
        } catch (e) {
          await onError(e)
        }
      },
    }),
    withNamespace(options)
  )
