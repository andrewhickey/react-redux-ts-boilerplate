import { shallow } from 'enzyme'
import * as React from 'react'
import {
  WrappedFieldInputProps,
  WrappedFieldMetaProps,
  WrappedFieldProps,
} from 'redux-form'
import {
  LoginFormComponent,
  PasswordInput,
  UsernameInput,
} from '../../components/LoginForm'

const input: WrappedFieldInputProps = {
  checked: false,
  name: 'username',
  onBlur: () => {},
  onChange: () => {},
  onDragStart: () => {},
  onDrop: () => {},
  onFocus: () => {},
  value: '',
}

const meta: WrappedFieldMetaProps = {
  active: false,
  asyncValidating: false,
  autofilled: false,
  dirty: false,
  dispatch: () => {},
  error: undefined,
  form: 'login',
  initial: undefined,
  invalid: false,
  pristine: true,
  submitFailed: false,
  submitting: false,
  touched: false,
  valid: true,
  visited: false,
  warning: undefined,
}

const props: WrappedFieldProps = {
  input,
  meta,
}

describe('UsernameInput', () => {
  it('Matches the snapshot', () => {
    const wrapper = shallow(<UsernameInput {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('PasswordInput', () => {
  it('Matches the snapshot at the top level', () => {
    const wrapper = shallow(<PasswordInput {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('LoginFormComponent', () => {
  it('Matches the snapshot', () => {
    const wrapper = shallow(<LoginFormComponent />)
    expect(wrapper).toMatchSnapshot()
  })
  it('Has a button to submit the login', () => {
    const wrapper = shallow(<LoginFormComponent />)
    expect(wrapper.find('#login-button')).toBePresent()
  })
})
