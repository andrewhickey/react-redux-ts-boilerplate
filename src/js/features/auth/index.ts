import { handleActions } from "redux-actions"
import { AuthState } from "./types"
import login from "./login"

// export const USER_EXPIRED = require('./constants').USER_EXPIRED;
// export const REDIRECT_SUCCESS = require('./constants').REDIRECT_SUCCESS;
// export const USER_FOUND = require('./constants').USER_FOUND;
// export const USER_NOT_FOUND = require('./constants').USER_NOT_FOUND;
// export const SILENT_RENEW_ERROR = require('./constants').SILENT_RENEW_ERROR;
// export const SESSION_TERMINATED = require('./constants').SESSION_TERMINATED;
// export const USER_EXPIRING = require('./constants').USER_EXPIRING;
// export const LOADING_USER = require('./constants').LOADING_USER;
// export const USER_SIGNED_OUT = require('./constants').USER_SIGNED_OUT;

const initialState: AuthState = {
  user: null,
  working: false,
  error: null
}

export const reducer = handleActions(
  {
    ...login.reducer
  },
  initialState
)
