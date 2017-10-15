import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { LOADING } from '../constants'
import PivotalLogo from '../PivotalLogo'
import LoadingSpinner from '../LoadingSpinner'
import Well from '../Well'
import './PivotalStory.css'

export default function PivotalStory(props) {
  if (props.data.loading === LOADING.STARTED) {
    return (
      <Well className="PivotalStory__container">
        <LoadingSpinner />
      </Well>
    )
  }
  if (props.data.loading !== LOADING.SUCCESS) {
    return null
  }
  return (
    <Well className="PivotalStory__container">
      <PivotalLogo className="PivotalStory__logo" />
      <div className="PivotalStory__body">
        <h2 className="PivotalStory__name">
          {props.data.story.name}{' '}
          <span className="PivotalStory__id">{props.data.story.id}</span>
        </h2>
        <ReactMarkdown
          className="PivotalStory__description markdown-body"
          source={props.data.story.description}
        />
      </div>
    </Well>
  )
}

PivotalStory.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.oneOf(Object.keys(LOADING)).isRequired,
    story: PropTypes.shape({
      id: PropTypes.node.isRequired,
      name: PropTypes.node.isRequired,
      description: PropTypes.node.isRequired,
    }),
  }).isRequired,
}
