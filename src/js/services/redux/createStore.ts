import { createStore, applyMiddleware } from "redux"
import * as promiseMiddleware from "redux-promise"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./rootReducer"

export default (startingState: any, authManager: any) => {
  const middleware = applyMiddleware(
    thunkMiddleware.withExtraArgument({ authManager }),
    promiseMiddleware
  )
  const store = createStore(rootReducer)
  return store
}
