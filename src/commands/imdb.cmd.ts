import * as chalk from 'chalk'
import * as cmd from 'commander'
import * as Inquirer from 'inquirer'
import * as Ora from 'ora'

import { ImdbService } from '../services'

const options = ['Movies In Theaters', 'Movies Coming Soon']

cmd
  .version('0.1.0', '-v, --version')
  .description(chalk.yellow('IMDB Scrapper!'))

cmd
  .command('screenshot')
  .description('Captures screenshots from IMDB')
  .alias('s')
  .action(() => {
    Inquirer.prompt([
      {
        type: 'list',
        name: 'option',
        message: chalk.yellow('Got it! From which page?'),
        choices: options,
        filter: (val: any) => {
          return val
            .toLowerCase()
            .split(' ')
            .join('-')
        }
      }
    ]).then((answers: any) => {
      const spinner = Ora(
        `Capturing the screenshot from "${answers.option}"...`
      ).start()

      ImdbService.screenshot(answers.option).then(screenshot => {
        console.log(chalk.yellow(`\nHey! Screenshot captured and saved at..`))
        console.log(screenshot)
        spinner.stop()
      })
    })
  })

cmd
  .command('scrap')
  .description('Scrap movie list from IMDB')
  .action(() => {
    Inquirer.prompt([
      {
        type: 'list',
        name: 'option',
        message: chalk.yellow('Got it! From which page?'),
        choices: options,
        filter: (val: any) => {
          return val
            .toLowerCase()
            .split(' ')
            .join('-')
        }
      }
    ]).then((answers: any) => {
      const spinner = Ora(`Scrapping...`).start()

      ImdbService.list(answers.option)
        .then(movies => {
          console.log(chalk.yellow(`\nAnd there we go..`))
          console.log(movies)
          spinner.stop()
        })
        .catch(err => {
          console.log(`\nError: ${chalk.red(err)}`)
          spinner.stop()
        })
    })
  })

cmd.parse(process.argv)
