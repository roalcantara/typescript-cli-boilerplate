import Pokedex from 'pokedex-promise-v2'

import { Pokemon } from '../models'

export const pokedexService = {
  findPokemonByName: (name: string): Promise<Pokemon> =>
    new Pokedex().getPokemonByName(name).then(
      (res: any) =>
        new Pokemon({
          name: res.name,
          weight: res.weight
        })
    )
}
