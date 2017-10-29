import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('components/App', () => {
  test('it renders correctly', () => {
    const props = {
      storyIds: ['1234', '5678'],
    }
    const wrapper = shallow(<App {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
