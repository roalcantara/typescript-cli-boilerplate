import puppeteer from 'puppeteer'

import { NewMovies } from '../pages/imdb'

const URL = 'http://www.imdb.com'

export const imdbService = {
  list: async (option: string) => {
    const url = `${URL}/${option}`
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(url)
    const html = await page.evaluate(() => {
      return new XMLSerializer().serializeToString(document)
    })
    const list = await new NewMovies(html).list()

    await browser.close()

    return list.slice(0, 10)
  }
}
