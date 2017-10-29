import React from 'react'
import { shallow } from 'enzyme'
import Invalid from '../Invalid'

describe('components/Invalid', () => {
  test('it renders correctly', () => {
    const props = {
      data: {
        story: {
          error: 'Bad auth',
          possible_fix: 'make sure you follow directions',
        },
      },
    }
    const wrapper = shallow(<Invalid {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
