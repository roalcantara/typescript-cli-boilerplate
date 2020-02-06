import { Intersect } from './intersect.type'

type User = {
  id: number
  name: string
  title: string
}

type Profile = {
  id: number
  title: string
  url: string
}

describe('Intersect()', () => {
  type UserProfile = Intersect<keyof User, keyof Profile>
  let userProfile: UserProfile

  it('allows set only the property names existing on both intersected types', () => {
    userProfile = 'id'
    expect(userProfile).toEqual('id')

    userProfile = 'title'
    expect(userProfile).toEqual('title')
  })
})
