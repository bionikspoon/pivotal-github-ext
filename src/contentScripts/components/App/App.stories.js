/* @flow */
import React from 'react'

import { storiesOf } from '@storybook/react'
import App from './'
import GithubWrapper, { StyleWrapper } from '../GithubWrapper'
import MockChrome from '../../utils/MockChrome/MockChrome'

storiesOf('App', module)
  .add('default', () => (
    <StyleWrapper>
      <App title="Makin' Changes [#151356728]" chrome={new MockChrome({})} />
    </StyleWrapper>
  ))
  .add('multiple stories', () => (
    <StyleWrapper>
      <App
        title="Makin' Changes [#151356728, #151371609, #151371625]"
        chrome={new MockChrome({})}
      />
    </StyleWrapper>
  ))
  .add('github', () => {
    const title = "Makin' Changes [#151356728]"

    return (
      <GithubWrapper title={title}>
        <App title={title} chrome={new MockChrome({})} />
      </GithubWrapper>
    )
  })
