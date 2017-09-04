import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Store } from "redux"
import { Provider } from "react-redux"

export interface AppProps {
  store: Store<any>
}
export default ({ store }: AppProps) => (
  <Provider store={store}>
    <div className="appContainer" />
  </Provider>
)
