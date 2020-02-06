import { removeName, removeNameWithExclude } from './remove-name.hoc'

describe('removeName()', () => {
  it('removes the name', () => {
    expect(removeName({ name: 'Naruto', age: 13, village: 'leaf' })).toEqual({
      age: 13,
      village: 'leaf'
    })
  })
})

describe('removeNameWithExclude()', () => {
  it('removes the name', () => {
    expect(removeNameWithExclude({ name: 'Naruto', age: 13, village: 'leaf' })).toEqual({
      age: 13,
      village: 'leaf'
    })
  })
})
