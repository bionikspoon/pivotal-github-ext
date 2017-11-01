import React from 'react'
import { shallow } from 'enzyme'
import PivotalStory from '../PivotalStory'

describe('components/PivotalStory', () => {
  test('it renders correctly', () => {
    const props = {
      storyId: '1234',
      storyName: 'Create user profile page',
      storyDescription: '**expected**:\n- user can see user profile page',
      storyType: 'features',
    }
    const wrapper = shallow(<PivotalStory {...props} />)

    expect(wrapper).toMatchSnapshot()
  })

  test('it hides empty description', () => {
    const props = {
      storyId: '1234',
      storyName: 'Create user profile page',
      storyDescription: '',
      storyType: 'features',
    }
    const wrapper = shallow(<PivotalStory {...props} />)

    expect(wrapper.find('.PivotalStory__description').length).toBe(0)
  })
})
