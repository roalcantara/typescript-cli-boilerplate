import * as chai from 'chai'
const expect = chai.expect

import { Pokemon } from '../../models'
import Factory from '../fixtures'

describe('Pokemon', () => {
  let pokemon: Pokemon

  before(async () => {
    pokemon = await Factory.build('pokemon', { weight: 9001 })
  })

  describe('#fight', () => {
    let opponent: Pokemon

    context('when opponent is lightest', () => {
      before(async () => {
        opponent = await Factory.build('pokemon', { weight: 9000 })
      })

      it('wins the fight', () => {
        expect(pokemon.fight(opponent)).to.eq(true)
      })
    })

    context('when opponent is heaviest', () => {
      before(async () => {
        opponent = await Factory.build('pokemon', { weight: 10000000 })
      })

      it('loses the fight', () => {
        expect(pokemon.fight(opponent)).to.eq(false)
      })
    })
  })

  describe('#fly', () => {
    context('when it is able to fly', () => {
      before(async () => {
        pokemon = await Factory.build('pokemon', { flying: true })
      })

      it('flies asynchronously', async () => {
        expect(await pokemon.fly(500)).to.eq(true)
      })
    })
  })
})
