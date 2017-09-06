const identity = (value: any) => value

export type IValidatorFunc<T> = (value: T) => string | null

export const runValidator = (value: any) => (validator: IValidatorFunc<any>) =>
  validator(value)

export const composeValidators = (
  ...validators: Array<IValidatorFunc<any>>
) => (value: any) => {
  const errors = validators.map(runValidator)
  return errors.filter(identity)
}

export const isRequired = (errorMessage: string): IValidatorFunc<any> => (
  value: any
) => (!!value ? null : errorMessage)

const isLongerThan = (
  length: number,
  errorMessage: string
): IValidatorFunc<string> => (value: any) => (!!value ? null : errorMessage)

const validate = composeValidators(
  isRequired('Required'),
  isLongerThan(10, 'Must be longer than 10 characters')
)

export interface ILoginFormData {
  username?: string
  password?: string
}

export default (loginFormData: ILoginFormData) => {
  return validate(loginFormData)
}
