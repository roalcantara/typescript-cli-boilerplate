import * as Cheerio from 'cheerio'

export class MovieTable {
  private CheerioStatic?: CheerioStatic

  constructor(private element: any) {
    this.element = new MovieTable(this.CheerioStatic(element))
  }

  get name() {
    return this.element
      .find('h4')
      .text()
      .trim()
  }

  get director() {
    return this.element
      .find('[itemprop=director]')
      .find('span')
      .text()
      .trim()
  }

  get stars() {
    return this.element
      .find('[itemprop=actors]')
      .find('span')
      .text()
      .trim()
      .split('\n')
  }

  get description() {
    return this.element
      .find('.outline')
      .text()
      .trim()
  }
}
