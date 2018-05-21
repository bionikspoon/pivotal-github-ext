/* @flow */
import GithubWrapper from './GithubWrapper'
import enhancer from './enhancers'
import _StyleWrapper from './StyleWrapper'

export const StyleWrapper = enhancer(_StyleWrapper)
export default enhancer(GithubWrapper)
