import { red, yellow } from 'chalk'
import inquirer from 'inquirer'

export const prompt = async (options: Array<string>) =>
  inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: yellow('So, what are you up to?'),
      choices: options,
      validate: (value: any) => {
        if (!(value && value.trim().length > 0)) {
          return red(`I didn't understand! Come again?`)
        }

        return true
      }
    }
  ])
