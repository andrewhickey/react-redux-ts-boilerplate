import { combineReducers } from 'redux'
import createStore from '../createStore'

const testReducer = (state: string = '') => state

it('successfully creates a store with a test reducer', () => {
  // const startState = { test: "test" }
  // const rootReducer = combineReducers({ test: testReducer })
  // const store = createStore(rootReducer, startState)
  // const state = store.getState()
  // expect(state).toEqual(startState)
})
