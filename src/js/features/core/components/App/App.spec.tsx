import { shallow } from "enzyme"
import "jest-enzyme"
import * as React from "react"
import * as ReactDOM from "react-dom"
import * as ReactTestRenderer from "react-test-renderer"
import App from "./App"

it("matches the stored snapshot when rendering with a store", () => {
  const tree = ReactTestRenderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("contains an element with id #appContainer", () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("#appContainer")).toBePresent()
})
