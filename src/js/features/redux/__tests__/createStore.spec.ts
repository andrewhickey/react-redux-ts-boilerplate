import { Action } from "redux-actions"
import createStore from "../createStore"
import createRootReducer from "../createRootReducer"

const testReducer = (state: string = "") => state

it("successfully creates a store with a test reducer", () => {
  const startState = { test: "test" }
  const rootReducer = createRootReducer({ test: testReducer })
  const store = createStore(rootReducer)(startState)()
  const state = store.getState()
  expect(state).toEqual(startState)
})
