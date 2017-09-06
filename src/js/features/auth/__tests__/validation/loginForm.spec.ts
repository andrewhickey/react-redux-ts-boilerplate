import validateLoginForm from '../../validation/loginForm'

describe('loginFormValidate', () => {
  it('returns an error when username is missing', () => {
    const loginFormData = {
      username: 'da',
      password: 'as',
    }
    const errors = validateLoginForm(loginFormData)

    expect(errors).toEqual('george')
  })
})
