/* @flow */
import React from 'react'
import LoadingSpinner from '../LoadingSpinner'
import Well from '../Well'
import './PivotalStory.css'

type Props = {
  data: {
    story: {
      error: string,
      possible_fix: string,
    },
  },
}

export default function Invalid(props: Props) {
  return (
    <Well className="PivotalStory__container">
      <LoadingSpinner />
      <div className="PivotalStory__body">
        <div className="PivotalStory__title">
          <h2 className="PivotalStory__name">{props.data.story.error}</h2>
        </div>

        <p className="PivotalStory__description">
          {props.data.story.possible_fix}
        </p>
      </div>
    </Well>
  )
}
