import { red, yellow } from 'chalk'
import Inquirer from 'inquirer'
import Ora from 'ora'

import { pokedexService } from '../services'

export const pokedexCmd = {
  run: async () => {
    const answers = await Inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: `Got it! What's the pokemon name?`,
        validate: (value: any) => {
          if (!(value && value.trim().length > 0)) {
            return red(`I didn't understand! Come again?`)
          }

          return true
        }
      }
    ])

    return find(answers.name)
  }
}

const find = (name: string) => {
  console.log(yellow('Find a pokemon!'))
  const spinner = Ora(`Searching for "${name}"...`).start()

  pokedexService
    .findPokemonByName(name)
    .then(pokemon => {
      console.log(yellow(`\nHey! Look what I've found..`))
      console.log(pokemon)
      console.log('..')
      spinner.stop()
    })
    .catch(err => {
      console.error(red(err))
      spinner.stop()
    })
}
