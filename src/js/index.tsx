import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./features/core/components/App"
import createRootReducer from "./features/redux/createRootReducer"
import createStore from "./features/redux/createStore"

/**
 * It all starts here. This file initializes;
 * - the router, React Router v4
 * - the application state, Redux
 * - the view layer, React
 */
const store = createStore(createRootReducer())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
