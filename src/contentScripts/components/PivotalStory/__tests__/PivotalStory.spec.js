import React from 'react'
import { shallow } from 'enzyme'
import PivotalStory from '../PivotalStory'

describe('components/PivotalStory', () => {
  test('it renders correctly', () => {
    const props = {
      data: {
        story: {
          id: '1234',
          name: 'Create user profile page',
          description: '**expected**:\n- user can see user profile page',
          story_type: 'features',
        },
      },
    }
    const wrapper = shallow(<PivotalStory {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
