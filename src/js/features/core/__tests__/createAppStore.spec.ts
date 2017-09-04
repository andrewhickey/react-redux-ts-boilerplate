import { Action } from "redux-actions"
import createAppStore from "../createAppStore"

it("successfully creates a store with the expected reducers", () => {
  const store = createAppStore()
  expect(store).toBeDefined()
})
