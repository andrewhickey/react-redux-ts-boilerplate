import { Button, Classes, InputGroup } from "@blueprintjs/core"
import * as React from "react"
import { Field, GenericField, reduxForm, WrappedFieldProps } from "redux-form"

export const UsernameInput: React.StatelessComponent<WrappedFieldProps> = ({
  input,
  meta,
}: WrappedFieldProps) => (
  <div className="pt-form-group pt-intent-danger">
    <InputGroup
      placeholder="Username"
      id="username-input"
      className={Classes.LARGE}
      leftIconName="person"
      {...input}
    />
    {meta.error && <div className="pt-form-helper-text">meta.error</div>}
  </div>
)

export const PasswordInput: React.StatelessComponent<WrappedFieldProps> = ({
  input,
  meta,
}: WrappedFieldProps) => (
  <div className="pt-form-group pt-intent-danger">
    <InputGroup
      placeholder="Password"
      id="password-input"
      className={Classes.LARGE}
      leftIconName="lock"
      type="password"
      {...input}
    />
    {meta.error && <div className="pt-form-helper-text">meta.error</div>}
  </div>
)

const WrapperField = Field as new () => GenericField<{}>

export const LoginFormComponent = () => (
  <form>
    <div className="pt-control-group pt-vertical">
      <WrapperField name="username" component={UsernameInput} />
      <WrapperField name="password" component={PasswordInput} />
      <Button id="login-button" className={Classes.LARGE} iconName="log-in" />
    </div>
  </form>
)

export default reduxForm({ form: "login" })(LoginFormComponent)
