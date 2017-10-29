import React from 'react'
import { shallow } from 'enzyme'
import PivotalLogo from '../PivotalLogo'

describe('components/PivotalLogo', () => {
  test('it renders correctly', () => {
    const props = {
      className: 'test',
      fill: '#111111',
    }
    const wrapper = shallow(<PivotalLogo {...props} />)

    expect(wrapper).toMatchSnapshot()
  })
})
