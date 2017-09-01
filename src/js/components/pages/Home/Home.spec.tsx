import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactTestRenderer from 'react-test-renderer'
import {HomeComponent, HomeProps} from './Home'

it('renders correctly', () => {
  const props: HomeProps = { name: 'test' }
  const tree = ReactTestRenderer.create(<HomeComponent {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
