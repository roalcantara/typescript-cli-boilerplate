import Cheerio from 'cheerio'

import { MovieTable } from './movie-table.po'

export class NewMovies {
  private moviesTableSelector = '.nm-title-overview-widget-layout'
  private html: CheerioStatic

  constructor(document: string) {
    this.html = Cheerio.load(document)
  }

  list = () => {
    if (this.html) {
      return this.html(this.moviesTableSelector)
        .toArray()
        .map(element => {
          const movieTable = new MovieTable(Cheerio(element))

          return {
            name: movieTable.name,
            director: movieTable.director,
            stars: movieTable.stars,
            description: movieTable.description
          }
        })
    }
  }
}
