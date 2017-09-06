import { IValidatorFunc } from './index'

export const isRequired = (errorMessage: string): IValidatorFunc<any> => (
  value: any
) => (value === undefined || value === null ? errorMessage : null)

export const isLongerThan = (
  length: number,
  errorMessage: string
): IValidatorFunc<string> => (value: any) => (!!value ? null : errorMessage)
