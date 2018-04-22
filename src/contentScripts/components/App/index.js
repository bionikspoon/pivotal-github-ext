/* @flow */
import App from './App'
import enhancer from './enhancers'

export { default as AppContainer } from './AppContainer'
export default enhancer(App)
