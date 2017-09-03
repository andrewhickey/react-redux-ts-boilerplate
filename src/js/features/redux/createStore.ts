import { createStore, applyMiddleware, Reducer, StoreEnhancer } from "redux"
import * as promiseMiddleware from "redux-promise"
import thunkMiddleware from "redux-thunk"

export default (rootReducer: Reducer<{}>) => (startingState: any) => (
  middleware?: StoreEnhancer<any>
) => {
  const store = createStore(rootReducer, startingState, middleware)
  return store
}
