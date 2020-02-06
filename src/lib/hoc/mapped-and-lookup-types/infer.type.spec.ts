type Ninja = {
  name: string
  age: number
  village?: string
}

type RemoveUndefinable<T> = {
  [K in keyof T]: T[K] extends undefined | unknown ? never : K
}

describe('MappedAndLookupTypes', () => {
  describe('RemoveUndefinable', () => {
    type Undefinable = RemoveUndefinable<Ninja>
    const nameField: Undefinable['name'] = 'name'
    const ageField: Undefinable['age'] = 12
    const villageField: Undefinable['village'] = 'Leaf'

    it('is returns a string type', () => {
      expect(Undefinable['name']).toBe('string')
    })
  })
})
