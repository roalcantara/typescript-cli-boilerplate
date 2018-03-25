import * as Puppeteer from 'puppeteer'

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
}

export default new ImdbService()
