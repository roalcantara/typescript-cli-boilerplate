import cheerio from 'cheerio'

import { Fixture } from '../../../tests'

import { MovieTable } from './movie-table.po'

describe('MovieTable', () => {
  let page: MovieTable

  beforeAll(() => {
    const file = Fixture.load('movies-coming-soon.html')
    const html = cheerio.load(file)

    page = new MovieTable(html('.nm-title-overview-widget-layout').first())
  })

  describe('#name', () => {
    it('gets the movie`s name', () => {
      expect(page.name).toEqual('Birds of Prey (2020)')
    })
  })

  describe('#director', () => {
    it('gets the movie`s director', () => {
      expect(page.director).toEqual('Cathy Yan')
    })
  })

  describe('#stars', () => {
    it('gets the movie`s stars', () => {
      expect(page.stars).toEqual(['Margot Robbie', 'Mary Elizabeth Winstead', 'Ewan McGregor', 'Jurnee Smollett-Bell'])
    })
  })

  describe('#description', () => {
    it('gets the movie`s description', () => {
      expect(page.description).toEqual(
        'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.'
      )
    })
  })
})
