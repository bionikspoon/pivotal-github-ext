/* @flow */
import { compose, applySpec } from 'ramda'
import { mapProps } from 'recompose'
import matchGroup from '../utils/matchGroup'

const storyIds = props => {
  const reStoryIds = /[^#]*#(\d+)(?=[,\]\s])/g

  return matchGroup(reStoryIds, 1, props.title)
}

export default compose(mapProps(applySpec({ storyIds })))
