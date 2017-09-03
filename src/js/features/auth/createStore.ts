// import {
//   LOGIN_ACTION,
//   reduceLoginSuccess,
//   loginAction,
//   login
// } from "../../auth/login"
// import { AuthState } from "../../auth/types"
// import { Action } from "redux-actions"
// import createStore from "../../createStore"
// import createAuthManager from "../../../auth/createAuthManager"

// it("creates a login action", () => {
//   const action: Action<any> = loginAction()
//   expect(action.type).toEqual(LOGIN_ACTION)
// })

// it("reduces a successful action", () => {
//   const user = { name: "Test" }
//   const action: Action<any> = {
//     type: LOGIN_ACTION,
//     payload: user
//   }
//   const startingState: AuthState = {
//     user: null,
//     error: null,
//     working: false
//   }
//   const nextState = reduceLoginSuccess(startingState, action)

//   expect(nextState.user).toEqual(user)
// })

// it("reduces a failed action", () => {
//   const action: Action<any> = {
//     type: LOGIN_ACTION,
//     payload: "Login failed",
//     error: true
//   }
//   const startingState: AuthState = {
//     user: null,
//     error: null,
//     working: false
//   }
//   const nextState = reduceLoginSuccess(startingState, action)

//   expect(nextState.user).toEqual("Login failed")
// })

// it("does whole login flow with successful response", async () => {
//   const authManager = createAuthManager({
//     client_id: "kd8Cbb2bJPTHt7IIquGS",
//     authority: "https://dev-824679.oktapreview.com",
//     redirect_uri: "http://192.168.33.12:3000/login"
//   })
//   const store = createStore({}, authManager)
//   const result = await store.dispatch(login())
//   const state = store.getState()
//   console.log("STATE", state)
//   // expect(actions[0]).toEqual({ type: 'auth/LOGIN_ACTION', payload: { name: 'TEST' } })
// })

// // it('does whole login flow with failed response', async () => {
// //   const store = createStore(false)()
// //   const result = await store.dispatch(login())
// //   const actions = store.getActions()
// //   expect(actions[0]).toEqual({ type: 'auth/LOGIN_ACTION', payload: 'Login failed', error: true })
// // })
