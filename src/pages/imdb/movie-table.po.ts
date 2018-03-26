import * as Cheerio from 'cheerio'

export default class MovieTable {
  constructor(private element: Cheerio) { }

  get name() {
    return this.element.find('h4').text().trim()
  }

  get director() {
    return this.element.find('[itemprop=director]')
      .find('span').text().trim()
  }

  get stars() {
    return this.element.find('[itemprop=actors]')
      .find('span').text().trim().split('\n')
  }

  get description() {
    return this.element.find('.outline').text().trim()
  }
}
