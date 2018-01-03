
import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../pages/index.js'

import webdriver from 'selenium-webdriver'
import homeObject from '../e2e/tests/pages/home'

const By = webdriver.By
const driver = new webdriver.Builder()
  .forBrowser('firefox')
  .build();
const Home = homeObject(driver)

describe('Input name with e2e test', () => {
  beforeAll((done) => {
    return Home.navigate()
      .then(() => { done() })
  });

  afterAll(() => {
    driver.quit()
      .then(() => done())
  })

  it('app shows "Hello, VuongTEST"', () => {
    Home.enterName('TEST')
    return Home.getName()
      .then(inputValue => expect(inputValue).toBe('Hello, VuongTEST'));
  })

  it('name should be in blue', () => {
    return Home.getNameColor()
      .then(color => expect(color).toBe('rgb(0, 0, 255)'));
  })
})

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