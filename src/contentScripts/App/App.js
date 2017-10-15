import React from 'react'
import PropTypes from 'prop-types'
import PivotalStories from '../PivotalStories'
import './App.css'

export default function App(props) {
  return (
    <div className="App__container clearfix">
      <PivotalStories storyIds={props.storyIds} />
    </div>
  )
}

App.propTypes = {
  storyIds: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
}
