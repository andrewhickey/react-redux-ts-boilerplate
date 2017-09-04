import { reducer as authReducer } from "../auth"
import createRootReducer from "../redux/createRootReducer"
import createStore from "../redux/createStore"

export default () => {
  const rootReducer = createRootReducer({
    auth: authReducer,
  })

  return createStore(rootReducer)
}
