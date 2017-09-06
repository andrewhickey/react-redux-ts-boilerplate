export type IValidatorFunc<T> = (value: T) => string | null

const identity = (value: any) => value

export const runValidator = (value: any) => (validator: IValidatorFunc<any>) =>
  validator(value)

export const composeValidators = (
  ...validators: Array<IValidatorFunc<any>>
) => (value: any) => {
  const errors = validators.map(runValidator)
  return errors.filter(identity)
}
