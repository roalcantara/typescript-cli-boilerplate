#!/usr/bin/env node
// tslint:disable: no-console
import { cyan, red } from 'chalk'

import { imdbCmd, pokedexCmd, prompt } from './commands'

const choises = {
  Pokemons: pokedexCmd,
  Movies: imdbCmd
}

const options = Object.keys(choises)

const main = async () => {
  const chosen = await prompt(options)
  const option = chosen.option

  choises[option]()
}

main()
  .then(() => console.log(cyan('Yay!!!!')))
  .catch(err => console.error(red('ERROR!!!!'), err))
