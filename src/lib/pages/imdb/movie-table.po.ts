import Cheerio from 'cheerio'
import { compact } from 'lodash'

export class MovieTable {
  protected element: Cheerio

  constructor(node: Cheerio) {
    this.element = Cheerio(node)
  }

  get name(): string {
    return this.element
      .find('h4')
      .text()
      .trim()
  }

  get director(): string {
    return this.element
      .find('div:nth-child(5) > span > a')
      .text()
      .trim()
  }

  get stars(): Array<string> {
    return compact(
      this.element
        .find('div:nth-child(6)')
        .text()
        .replace('Stars:', '')
        .replace(/ \n\s+/g, '')
        .trim()
        .split(',') || []
    )
  }

  get description(): string {
    return this.element
      .find('.outline')
      .text()
      .trim()
  }
}
