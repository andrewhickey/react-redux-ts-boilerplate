import { AuthState } from './types'

export const LOGIN_ACTION = 'auth/LOGIN_ACTION'

export const reduceLoginSuccess = (state: AuthState, action: any) => ({
  ...state,
  user: action.payload,
})

export const reduceLoginFailure = (state: AuthState, action: any) => ({
  ...state,
  error: action.payload,
})

const reduceLogin = {
  next: reduceLoginSuccess,
  throw: reduceLoginFailure,
}

export const loginAction = (userPromise: Promise<any>) => ({
  payload: userPromise,
  type: LOGIN_ACTION,
})

export const login = () => (
  dispatch: (action: any) => any,
  getState: () => any,
  additionalParams: any
) => {
  const authService = additionalParams.authService
  const userPromise = authService.signinRedirectCallback()
  const action = loginAction(userPromise)
  return dispatch(action)
}

export default {
  actions: { loginAction },
  reducer: { [LOGIN_ACTION]: reduceLogin },
}
