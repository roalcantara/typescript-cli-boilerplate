type NumberFunction = (a: number) => void
type StringFunction = (a: string) => void
type GetFunctionArgumentTypes<Type> = Type extends (a: infer U) => void ? U : never

describe('GetFunctionArgumentTypes()', () => {
  describe('when getting a numbered arguments of a function', () => {
    type NumberFunctionArgs = GetFunctionArgumentTypes<NumberFunction>
    const numberedValue: NumberFunctionArgs = 12

    it('is returns a number type', () => {
      expect(typeof numberedValue).toBe('number')
    })
  })

  describe('when getting a stringered arguments of a function', () => {
    type StringFunctionArgs = GetFunctionArgumentTypes<StringFunction>
    const stringValue: StringFunctionArgs = 'hi'

    it('is returns a string type', () => {
      expect(typeof stringValue).toBe('string')
    })
  })
})
