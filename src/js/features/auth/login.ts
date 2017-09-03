import { createAction, Action } from "redux-actions"
import { AuthState } from "./types"

export const LOGIN_ACTION = "auth/LOGIN_ACTION"

export const reduceLoginSuccess = (state: AuthState, action: Action<any>) => ({
  ...state,
  user: action.payload
})

export const reduceLoginFailure = (state: AuthState, action: Action<any>) => ({
  ...state,
  error: action.payload
})

const reduceLogin = {
  next: reduceLoginSuccess,
  throw: reduceLoginFailure
}

export const loginAction = createAction(LOGIN_ACTION)

export const login = () => (
  dispatch: Function,
  getState: Function,
  additionalParams: any
) => {
  const authService = additionalParams.authService
  const userPromise = authService.signinRedirectCallback()
  const action = loginAction(userPromise)
  return dispatch(action)
}

export default {
  reducer: { [LOGIN_ACTION]: reduceLogin },
  actions: { loginAction }
}
