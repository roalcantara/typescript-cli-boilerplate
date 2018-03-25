import * as Pokedex from 'pokedex-promise-v2'

import { Pokemon } from '../models'

class PokedexService {
  pokedex: Pokedex

  constructor() {
    this.pokedex = new Pokedex()
  }

  findPokemonByName(name: string): Promise<Pokemon> {
    return this.pokedex.getPokemonByName(name).then(res => {
      return Promise.resolve(new Pokemon({
        name: res.name,
        weight: res.weight
      }))
    })
  }
}

export default new PokedexService()
