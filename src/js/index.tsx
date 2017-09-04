import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import App from "./features/core/components/App/App"
import createAppStore from "./features/core/createAppStore"

/**
 * It all starts here. This file initializes;
 * - the router, React Router v4
 * - the application state, Redux
 * - the view layer, React
 */
const store = createAppStore(false)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
