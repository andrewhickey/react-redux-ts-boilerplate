import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './features/core/App'
import createAppProps from './features/core/createAppProps'

/**
 * It all starts here. This file initializes;
 * - the router, React Router v4
 * - the application state, Redux
 * - the view layer, React
 */

const appProps = createAppProps(false);

ReactDOM.render(<App {...appProps} />, document.getElementById('root'))