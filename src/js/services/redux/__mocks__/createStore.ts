import configureMockStore from "redux-mock-store"
import thunkMiddleWare from "redux-thunk"
import * as promiseMiddleware from "redux-promise"
import createAuthManager from "../../auth/createAuthManager"

const thunkWithArgs = (success: boolean) =>
  thunkMiddleWare.withExtraArgument({
    authService: createAuthManager(success)
  })

export default (success: boolean) =>
  configureMockStore([thunkWithArgs(success), promiseMiddleware])
