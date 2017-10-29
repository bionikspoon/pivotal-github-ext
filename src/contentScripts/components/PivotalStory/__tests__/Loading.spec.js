import React from 'react'
import { shallow } from 'enzyme'
import Loading from '../Loading'

describe('components/Loading', () => {
  test('it renders correctly', () => {
    const props = {}
    const wrapper = shallow(<Loading {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
