/* @flow */
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { replace } from 'ramda'
import PivotalLogo from '../PivotalLogo'
import Well from '../Well'
import './PivotalStory.css'
import StoryTypeIcon from './StoryTypeIcon'

const reUrl = /([^[(])(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}[-a-zA-Z0-9@:%_+.~#?&//=]*)([^\])])/g
const formatLinks = replace(reUrl, '$1[$2]($2)$3')

type Props = {
  data: {
    story: {
      id: string,
      name: string,
      description: string,
      story_type: string,
    },
  },
}

export default function PivotalStory(props: Props) {
  return (
    <Well className="PivotalStory__container">
      <PivotalLogo className="PivotalStory__logo" />
      <div className="PivotalStory__body">
        <div className="PivotalStory__title">
          <h2 className="PivotalStory__name">
            {props.data.story.name}
            <span className="PivotalStory__id">{props.data.story.id}</span>
          </h2>
          <StoryTypeIcon size={20} storyType={props.data.story.story_type} />
        </div>

        <ReactMarkdown
          className="PivotalStory__description markdown-body"
          source={formatLinks(props.data.story.description)}
        />
      </div>
    </Well>
  )
}
