import { mount } from 'enzyme'
import React from 'react'
import withContext from '..'

describe('hocs/withContext', () => {
  const store = {
    getState: () => ({
      todos: ['eat', 'drink', 'sleep'],
      counter: 12,
    }),
  }
  const StoreContext = React.createContext(store)
  const Div = props => <div {...props} />

  let TestComponent = null

  beforeEach(() => {
    TestComponent = withContext(StoreContext.Consumer, 'store')(Div)
  })

  test('it sets display name', () => {
    expect(TestComponent.displayName).toEqual('withContext(Div)')
  })

  test('it matches snapshot', () => {
    const wrapper = mount(<TestComponent />)

    expect(wrapper).toMatchSnapshot()
  })

  test('it adds context to props', () => {
    const wrapper = mount(<TestComponent />)

    expect(wrapper.find(Div).prop('store')).toEqual(store)
  })
})
