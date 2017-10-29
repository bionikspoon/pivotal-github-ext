import React from 'react'
import { shallow } from 'enzyme'
import PivotalStories from '../PivotalStories'

describe('components/PivotalStories', () => {
  test('it renders correctly', () => {
    const props = {
      storyIds: ['1234', '5678'],
    }
    const wrapper = shallow(<PivotalStories {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
