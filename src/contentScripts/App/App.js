import React from 'react'
import { map } from 'ramda'
import PropTypes from 'prop-types'
import PivotalStory from '../PivotalStory'

export default function App(props) {
  return (
    <div className="App__container">
      {map(
        storyId => <PivotalStory storyId={storyId} key={storyId} />,
        props.storyIds
      )}
    </div>
  )
}

App.propTypes = {
  storyIds: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
}
