/* @flow */
import React from 'react'
import PivotalStories from '../PivotalStories'
import AppProvider from './AppProvider'

type Props = {
  storyIds: Array<string>,
  chrome?: Object,
}

export default function App(props: Props) {
  return (
    <AppProvider chrome={props.chrome}>
      <div className="App__container clearfix">
        <PivotalStories storyIds={props.storyIds} />
      </div>
    </AppProvider>
  )
}

App.defaultProps = {
  chrome: global.chrome,
}
