import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Store } from 'redux'
import { Provider } from 'react-redux'

/**
 * It all starts here. This file initializes;
 * - the router, React Router v4
 * - the application state, Redux
 * - the view layer, React
 */

export interface AppProps {
  store: Store<any>
}
export default ({ store }: AppProps) => (
  <Provider store={store}>
  </Provider>
)



