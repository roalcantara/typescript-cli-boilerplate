// tslint:disable: no-console
import { cyanBright, red, yellow } from 'chalk'
import inquirer from 'inquirer'
import Ora from 'ora'
import * as util from 'util'

import { imdbService } from '../services'

const options = ['Movies In Theaters', 'Movies Coming Soon']

export const imdbCmd = async () => {
  console.info(cyanBright(`\n[IMDB] Searching for rosebud, then? 🧐!!\n`))

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: yellow('Got it! Keen on?'),
      choices: options,
      filter: (val: any) => {
        return val
          .toLowerCase()
          .split(' ')
          .join('-')
      }
    }
  ])

  return findMovies(answers.option)
}

const findMovies = async (option: string) => {
  const spinner = Ora(`Loading movies...\n\n`).start()

  return imdbService
    .list(option)
    .then(movies => {
      console.log(yellow(`\nAnd there we go..\n`))
      console.log(prettify(movies))
      console.log('\n')
      spinner.stop()
    })
    .catch(err => {
      spinner.stop()
      console.log(red(`\nOps!! Something went really, really bad!! ☠️`), {
        err
      })
    })
}

const prettify = (message: any) =>
  util.inspect(message, {
    depth: null,
    colors: true,
    breakLength: 240,
    compact: false,
    showHidden: false
  })
