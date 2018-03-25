import chalk from 'chalk'
import * as cmd from 'commander'
import * as Inquirer from 'inquirer'
import * as Ora from 'ora'

import { PokedexService } from '../services'

cmd
  .version('0.1.0', '-v, --version')
  .description(chalk.yellow('Pokedex! Catch them all!'))

cmd
  .command('find')
  .description('Find a pokemon')
  .alias('f')
  .action(() => {
    console.log(chalk.yellow('Find a pokemon!'))
    Inquirer.prompt([{
      type: 'input',
      name: 'name',
      message: `Got it! What's the pokemon name?`,
      validate: (value: any) => {
        if (!(value && value.trim().length > 0)) {
          return chalk.red(`I didn't understand! Come again?`)
        }
        return true
      }
    }]).then((answers: any) => {
      const spinner = Ora(`Searching for "${answers.name}"...`).start()

      PokedexService.findPokemonByName(answers.name)
        .then(pokemon => {
          console.log(chalk.yellow(`\nHey! Look what I've found..`))
          console.log(pokemon)
          console.log('..')
          spinner.stop()
        }).catch(err => {
          console.error(chalk.red(err))
          spinner.stop()
        })
    })
  })

cmd.parse(process.argv)
