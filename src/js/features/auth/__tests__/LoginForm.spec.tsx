import { shallow } from "enzyme"
import * as React from "react"
import { LoginFormComponent } from "../components/LoginForm"

describe("LoginFormComponent", () => {
  it("Matches the snapshot", () => {
    const wrapper = shallow(<LoginFormComponent />)
    expect(wrapper).toMatchSnapshot()
  })
  it("Has a button to submit the login", () => {
    const wrapper = shallow(<LoginFormComponent />)
    expect(wrapper.find("#login-button")).toBePresent()
  })
})
