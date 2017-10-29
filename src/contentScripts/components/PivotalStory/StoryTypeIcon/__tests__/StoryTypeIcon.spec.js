import React from 'react'
import { shallow } from 'enzyme'
import StoryTypeIcon from '../StoryTypeIcon'

describe('components/StoryTypeIcon', () => {
  test('it renders correctly for bugs', () => {
    const props = {
      storyType: 'bug',
      size: 200,
      fill: '#111111',
    }
    const wrapper = shallow(<StoryTypeIcon {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  test('it renders correctly for features', () => {
    const props = {
      storyType: 'feature',
      size: 200,
      fill: '#111111',
    }
    const wrapper = shallow(<StoryTypeIcon {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
