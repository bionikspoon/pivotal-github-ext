import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { LOADING } from '../constants'

export default function PivotalStory(props) {
  if (props.data.loading !== LOADING.SUCCESS) {
    return null
  }
  return (
    <div className="PivotalStory__container">
      <h2>{props.data.story.name}</h2>
      <ReactMarkdown source={props.data.story.description} />
    </div>
  )
}

PivotalStory.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.oneOf(Object.keys(LOADING)).isRequired,
    story: PropTypes.shape({
      name: PropTypes.node.isRequired,
      description: PropTypes.node.isRequired,
    }),
  }).isRequired,
}
