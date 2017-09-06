import { shallow } from 'enzyme'
import * as React from 'react'
import HomePage, { HomePageComponent, IHomeProps } from '../components/HomePage'

it('renders correctly with no HoC', () => {
  const props: IHomeProps = { name: 'test', number: 1 }
  const tree = shallow(<HomePageComponent {...props} />)
  expect(tree).toMatchSnapshot()
})

it('renders correctly with the HoC', () => {
  const tree = shallow(<HomePage />).dive()
  expect(tree).toMatchSnapshot()
})
