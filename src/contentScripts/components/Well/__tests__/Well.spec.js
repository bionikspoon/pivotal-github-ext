import React from 'react'
import { shallow } from 'enzyme'
import Well from '../Well'

describe('components/Well', () => {
  test('it renders correctly', () => {
    const props = {
      className: 'clearfix',
    }
    const wrapper = shallow(<Well {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
