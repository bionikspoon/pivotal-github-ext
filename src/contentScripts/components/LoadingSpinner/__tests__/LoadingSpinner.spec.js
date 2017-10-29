import React from 'react'
import { shallow } from 'enzyme'
import LoadingSpinner from '../LoadingSpinner'

describe('components/LoadingSpinner', () => {
  test('it renders correctly', () => {
    const props = {}
    const wrapper = shallow(<LoadingSpinner {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
