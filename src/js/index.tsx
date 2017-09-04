import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './app'
import createAppProps from './createAppProps'

const appProps = createAppProps(false);

ReactDOM.render(<App {...appProps} />, document.getElementById('root'))