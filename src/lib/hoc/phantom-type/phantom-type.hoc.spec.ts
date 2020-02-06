import { FormData, makeFormData, Unvalidated, upperCase, validate, Validated } from './phantom-type.hoc'

describe('Phantom Types', () => {
  describe('validate()', () => {
    let initialData: FormData<Unvalidated>
    let result: FormData<Unvalidated> | FormData<Validated>

    beforeEach(() => {
      initialData = makeFormData('test')
      result = validate(initialData)
    })

    it('returns not null', () => {
      expect(result).not.toBeNull()
    })

    it('returns the validated data', () => {
      expect(result).toEqual({ value: 'test' })
    })
  })

  describe('upperCase()', () => {
    let initialData: FormData<Unvalidated>
    let result: FormData<Unvalidated> | FormData<Validated>

    beforeEach(() => {
      initialData = makeFormData('test')
      result = upperCase(initialData)
    })

    it('returns not null', () => {
      expect(result).not.toBeNull()
    })

    it('returns the validated data', () => {
      expect(result).toEqual({ value: 'TEST' })
    })
  })
})
