/* @flow */
import React from 'react'
import BugIcon from './BugIcon'
import FeatureIcon from './FeatureIcon'
import './StoryTypeIcon.css'

type Props = {
  storyType: string,
  size?: number,
  fill?: string,
}

export default function StoryTypeIcon(props: Props) {
  const Icon = props.storyType === 'bug' ? BugIcon : FeatureIcon
  return (
    <svg
      fill={props.fill}
      height={props.size}
      viewBox="0 0 24 24"
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
      className="StoryTypeIcon__container"
    >
      <Icon />
    </svg>
  )
}
StoryTypeIcon.defaultProps = {
  fill: '#5282b0',
  size: 24,
}
