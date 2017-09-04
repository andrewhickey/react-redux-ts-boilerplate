import createStore from "../redux/createStore"
import createRootReducer from "../redux/createRootReducer"
import { reducer as authReducer } from "../auth"
import { AppProps } from "./App"

export default (isServerside: boolean): AppProps => {
  const rootReducer = createRootReducer({
    auth: authReducer
  })

  const store = createStore(rootReducer)

  return { store }
}
