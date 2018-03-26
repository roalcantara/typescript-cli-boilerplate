import * as Cheerio from 'cheerio'
import * as Puppeteer from 'puppeteer'

import MovieTable from './movie-table.po'

export default class NewMovies {
  private moviesTableSelector = '.nm-title-overview-widget-layout'
  private CheerioStatic?: CheerioStatic

  constructor(private document: string) {
    this.html = document
  }

  list() {
    if (this.CheerioStatic) {
      return this.CheerioStatic(this.moviesTableSelector).toArray().map((element, i) => {
        const movieTable = new MovieTable(this.CheerioStatic(element))

        return {
          name: movieTable.name,
          director: movieTable.director,
          stars: movieTable.stars,
          description: movieTable.description
        }
      })
    }
  }

  set html(document: string) {
    this.CheerioStatic = Cheerio.load(document)
  }
}
