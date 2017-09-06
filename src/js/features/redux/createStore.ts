import { applyMiddleware, createStore, Middleware, Reducer } from 'redux'
import * as promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'

export default (
  rootReducer: Reducer<{}>,
  startingState: any = {},
  middlewares: Middleware[] = []
) => {
  const middleware = applyMiddleware(
    promiseMiddleware,
    thunkMiddleware,
    ...middlewares
  )
  const store = createStore(rootReducer, startingState, middleware)
  return store
}
