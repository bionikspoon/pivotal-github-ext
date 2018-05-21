/* @flow */
import React from 'react'
import { map } from 'ramda'
import PivotalStory from '../PivotalStory'
import './PivotalStories.css'

type Props = {
  storyIds: Array<string>,
}

export default function PivotalStories(props: Props) {
  const renderStories = map(storyId => (
    <PivotalStory storyId={storyId} key={storyId} />
  ))
  return (
    <div className="PivotalStories__container">
      {renderStories(props.storyIds)}
    </div>
  )
}
