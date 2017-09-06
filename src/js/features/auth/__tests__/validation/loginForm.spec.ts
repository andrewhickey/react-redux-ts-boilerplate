import validateLoginForm from '../../validation/loginForm'

const validPassword = 'validpassword'

describe('loginFormValidate', () => {
  it('returns an error when username is missing', () => {
    const loginFormData = {
      password: validPassword,
    }
    const errors = validateLoginForm(loginFormData)
    expect(errors).toHaveLength(1)
  })
})
