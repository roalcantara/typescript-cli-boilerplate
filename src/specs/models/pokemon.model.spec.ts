import { Pokemon } from '../../models'
import { Factory } from '../fixtures'

describe('Pokemon', () => {
  let pokemon: Pokemon

  beforeAll(async () => {
    pokemon = Factory.build<Pokemon>('pokemon', { weight: 9001 })
  })

  describe('#fight', () => {
    let opponent: Pokemon

    describe('when opponent is lightest', () => {
      beforeEach(async () => {
        opponent = Factory.build<Pokemon>('pokemon', { weight: 9000 })
      })

      it('wins the fight', () => {
        expect(pokemon.fight(opponent)).toEqual(true)
      })
    })

    describe('when opponent is heaviest', () => {
      beforeEach(async () => {
        opponent = Factory.build<Pokemon>('pokemon', { weight: 10000000 })
      })

      it('loses the fight', () => {
        expect(pokemon.fight(opponent)).toEqual(false)
      })
    })
  })

  describe('#fly', () => {
    describe('when it is able to fly', () => {
      beforeEach(async () => {
        pokemon = Factory.build<Pokemon>('pokemon', { flying: true })
      })

      it('flies asynchronously', async () => {
        expect(await pokemon.fly(500)).toEqual(true)
      })
    })
  })
})
