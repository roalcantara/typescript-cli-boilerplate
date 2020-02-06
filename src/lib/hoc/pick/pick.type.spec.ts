type Hero = {
  id: number
  name: string
  title: string
}

describe('MakePick()', () => {
  type PickedUser = Pick<Hero, 'name' | 'id'>
  let pickedUser: PickedUser

  it('creates a new type with only the picked properties', () => {
    pickedUser = {
      name: 'Name',
      id: 12121
    }

    expect(pickedUser).toEqual({
      name: 'Name',
      id: 12121
    })
  })
})
