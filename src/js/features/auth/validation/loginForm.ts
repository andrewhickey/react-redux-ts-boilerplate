import { composeValidators } from '../../validation'
import { isLongerThan, isRequired } from '../../validation/rules'

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
