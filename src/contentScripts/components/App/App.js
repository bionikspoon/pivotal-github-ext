/* @flow */
import React from 'react'
import PivotalStories from '../PivotalStories'
import './App.css'

type Props = {
  storyIds: Array<string>,
}

export default function App(props: Props) {
  return (
    <div className="App__container clearfix">
      <PivotalStories storyIds={props.storyIds} />
    </div>
  )
}
