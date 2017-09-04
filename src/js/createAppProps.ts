import createStore from "./features/redux/createStore"
import createRootReducer from "./features/redux/createRootReducer"
import { reducer as authReducer } from "./features/auth"
import { AppProps } from "./app"

export default (isServerside: boolean): AppProps => {
  const rootReducer = createRootReducer({
    auth: authReducer
  })

  const store = createStore(rootReducer)({})

  return { store }
}
