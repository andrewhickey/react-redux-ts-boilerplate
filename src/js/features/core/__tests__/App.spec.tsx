import { shallow } from 'enzyme'
import * as React from 'react'
import App from '../components/App'

it('matches the stored snapshot', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})

it('contains an element with id #appContainer', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('#appContainer')).toBePresent()
})
