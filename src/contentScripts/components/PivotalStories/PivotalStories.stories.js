import React from 'react'

import { storiesOf } from '@storybook/react'
import PivotalStories from './'
import GithubWrapper from '../GithubWrapper'

storiesOf('PivotalStories', module)
  .addDecorator(story => <GithubWrapper>{story()}</GithubWrapper>)
  .add('default', () => (
    <PivotalStories
      storyIds={['151356728']}
      storage={storage}
      fetchResources={fetchResources}
    />
  ))

async function storage(...args) {
  console.log('storage ...args', ...args)
  return { pivotalApiKey: '123' }
}

async function fetchResources(...args) {
  console.log('fetchResources ...args', ...args)
  return {
    story: {
      kind: 'story',
      id: 151356728,
      created_at: '2017-09-24T21:05:03Z',
      updated_at: '2017-12-17T19:47:48Z',
      estimate: 1,
      story_type: 'feature',
      name: 'Test Story',
      description:
        'Really need this story to test things\n\n```\nI like turtles\n```',
      current_state: 'started',
      requested_by_id: 2148385,
      url: 'https://www.pivotaltracker.com/story/show/151356728',
      project_id: 2113469,
      owner_ids: [2148385],
      labels: [
        {
          id: 19539797,
          project_id: 2113469,
          kind: 'label',
          name: 'critical',
          created_at: '2017-12-17T17:06:44Z',
          updated_at: '2017-12-17T17:06:44Z',
        },
        {
          id: 19539795,
          project_id: 2113469,
          kind: 'label',
          name: 'qa by dev',
          created_at: '2017-12-17T17:06:33Z',
          updated_at: '2017-12-17T17:06:33Z',
        },
        {
          id: 19539796,
          project_id: 2113469,
          kind: 'label',
          name: 'test',
          created_at: '2017-12-17T17:06:35Z',
          updated_at: '2017-12-17T17:06:35Z',
        },
      ],
      owned_by_id: 2148385,
    },
  }
}
