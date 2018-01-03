
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

describe('With Enzyme', () => {
  it('App shows "Hello, Vuong"', () => {
    const app = shallow(<App />)

    expect(app.find('p').text()).toEqual('Hello, Vuong')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello, Vuong"', () => {
    const component = renderer.create(<App />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})