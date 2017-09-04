import { Action } from "redux-actions"
import createAppProps from "../createAppProps"
import { AppProps } from "../App"

it("successfully creates server side props to initialize the application", () => {
  const appProps: AppProps = createAppProps(true)
  expect(appProps.store).toBeDefined()
})

it("successfully creates client side props to initialize the application", () => {
  const appProps: AppProps = createAppProps(false)
  expect(appProps.store).toBeDefined()
})
