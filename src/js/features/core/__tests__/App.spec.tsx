import App, { AppProps } from "../App"
import { createStore } from "redux"
import "jest-enzyme"
import * as React from "react"
import * as ReactDOM from "react-dom"
import * as ReactTestRenderer from "react-test-renderer"
import { shallow } from "enzyme"

const testReducer = (state: string = "") => state
const store = createStore(testReducer)
const props: AppProps = { store }

it("matches the stored snapshot when rendering with a store", () => {
  const tree = ReactTestRenderer.create(<App {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("contains an element with class appContainer", () => {
  const wrapper = shallow(<App {...props} />)
  expect(wrapper.find(".appContainer")).toBePresent()
})
