import React from 'react'
import { map } from 'ramda'
import PropTypes from 'prop-types'
import PivotalStory from '../PivotalStory'
import './PivotalStories.css'

export default function PivotalStories(props) {
  return (
    <div className="PivotalStories__container">
      {map(
        storyId => <PivotalStory storyId={storyId} key={storyId} />,
        props.storyIds
      )}
    </div>
  )
}

PivotalStories.propTypes = {
  storyIds: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
}
