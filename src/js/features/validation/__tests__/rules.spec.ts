import { isRequired } from '../rules'

describe('isRequired', () => {
  const errorMessage = 'Test message'
  const validateRequired = isRequired(errorMessage)

  const validValues = [1, '1', 'null', 'george', true, false]
  validValues.forEach(value => {
    it(`returns an empty array when given ${value}`, () => {
      const error = validateRequired(value)
      expect(error).toBeNull()
    })
  })

  const invalidValues = [undefined, null]
  invalidValues.forEach(value => {
    it(`returns an error message when given ${value}`, () => {
      const error = validateRequired(value)
      expect(error).toEqual(errorMessage)
    })
  })
})
