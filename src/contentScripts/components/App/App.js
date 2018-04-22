/* @flow */
import React from 'react'
import PivotalStories from '../PivotalStories'
import AppContainer from './AppContainer'
import { storage } from '../../utils/messages'
import fetchResources from '../../utils/fetchResources'

type Props = {
  storyIds: Array<string>,
}

export default function App(props: Props) {
  return (
    <AppContainer>
      <PivotalStories
        storyIds={props.storyIds}
        storage={storage}
        fetchResources={fetchResources}
      />
    </AppContainer>
  )
}
