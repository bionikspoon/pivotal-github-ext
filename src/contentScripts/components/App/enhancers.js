/* @flow */
import { applySpec } from 'ramda'
import { mapProps } from 'recompose'
import matchGroup from '../../utils/matchGroup'

type Props = {
  title: string,
}

export const storyIds = (props: Props): Array<string> => {
  const reStoryIds = /[^#]*#(\d+)(?=[,\]\s])/g

  return matchGroup(reStoryIds, 1, props.title)
}

export default mapProps(applySpec({ storyIds }))
