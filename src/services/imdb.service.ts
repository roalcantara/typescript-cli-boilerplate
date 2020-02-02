import * as chalk from 'chalk'
import * as Puppeteer from 'puppeteer'

import { NewMovies } from '../pages/imdb'

const URL = 'http://www.imdb.com'

class ImdbService {
  screenshot(option) {
    return new Promise(async resolve => {
      const screenshot = `${__dirname}/screenshots/${option}.png`
      const browser = await Puppeteer.launch()
      const page = await browser.newPage()

      await page.goto(`${URL}/${option}`)
      await page.screenshot({ path: screenshot })

      browser.close()

      resolve(screenshot)
    })
  }

  async list(option) {
    const url = `${URL}/${option}`

    console.log(chalk.yellow(` "${url}"..`))

    const browser = await Puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(url)
    await page.goto(url)
    const html = await page.evaluate(() => {
      return new XMLSerializer().serializeToString(document)
    })
    const list = await new NewMovies(html).list()

    await browser.close()

    return list
  }
}

export default new ImdbService()
