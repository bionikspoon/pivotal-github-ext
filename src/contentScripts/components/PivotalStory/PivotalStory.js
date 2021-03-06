/* @flow */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import PivotalLogo from '../PivotalLogo'
import Well from '../Well'
import './PivotalStory.css'
import StoryTypeIcon from './StoryTypeIcon'

type Props = {
  storyId: string,
  storyName: string,
  storyDescription: string,
  storyType: string,
}

export default function PivotalStory(props: Props) {
  return (
    <Well className="PivotalStory__container">
      <PivotalLogo className="PivotalStory__logo" />
      <div className="PivotalStory__body">
        <div className="PivotalStory__title">
          <h2 className="PivotalStory__name">
            <a
              className="PivotalStory__link"
              href={`https://www.pivotaltracker.com/story/show/${props.storyId}`}
            >
              {props.storyName}
            </a>
            <span className="PivotalStory__id">{props.storyId}</span>
          </h2>
          <StoryTypeIcon size={20} storyType={props.storyType} />
        </div>

        {props.storyDescription.length ? (
          <ReactMarkdown
            className="PivotalStory__description markdown-body"
            source={props.storyDescription}
          />
        ) : null}
      </div>
    </Well>
  )
}
