import * as React from "react"
import * as ReactDOM from "react-dom"
import * as ReactTestRenderer from "react-test-renderer"
import { HomePage, HomeProps, Home } from "./HomePage"

it("renders correctly with no HoC", () => {
  const props: HomeProps = { name: "test", number: 1 }
  const tree = ReactTestRenderer.create(<HomePage {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it("renders correctly with the HoC", () => {
  const tree = ReactTestRenderer.create(<Home />).toJSON()
  expect(tree).toMatchSnapshot()
})
