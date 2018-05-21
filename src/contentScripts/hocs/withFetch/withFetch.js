// /* @flow */
// import { applySpec, compose, mergeDeepRight, omit, pipe } from 'ramda'
// import { mapProps, withProps } from 'recompose'
// import withAsyncFactory from '../../../shared/utils/withAsyncFactory'
//
// const fetchData = ({ options: { resources, headers, fetchResources } }) => {
//   const options = {
//     method: 'GET',
//     headers,
//     mode: 'cors',
//     cache: 'default',
//     credentials: 'omit',
//   }
//   return fetchResources({ resources, options })
// }
//
// const DEFAULT_OPTIONS = { headers: {}, resources: {} }
//
// type GetOptions = any => { resources: {}, headers: {} }
//
// export const withDefaults = (optionsFromProps: GetOptions) =>
//   pipe(optionsFromProps, mergeDeepRight(DEFAULT_OPTIONS))
//
// export default (optionsFromProps: GetOptions) =>
//   compose(
//     withProps(
//       applySpec({
//         options: withDefaults(optionsFromProps),
//       })
//     ),
//     withAsyncFactory(fetchData),
//     mapProps(omit(['options']))
//   )
