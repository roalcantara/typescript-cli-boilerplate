import cheerio from 'cheerio'
import fs from 'fs'

import { MovieTable } from '../../../pages/imdb'

describe('MovieTable', () => {
  let page: MovieTable

  beforeAll(() => {
    const path = '../../fixtures/imdb/movies-coming-soon.html'
    const file = fs.readFileSync(path).toString()
    const html = Cheerio.load(file)

    page = new MovieTable(html('.nm-title-overview-widget-layout').first())
  })

  describe('#name', () => {
    it('gets the movie`s name', () => {
      expect(page.name).toEqual('Jogador Nº 1 (2018)')
    })
  })

  describe('#director', () => {
    it('gets the movie`s director', () => {
      expect(page.director).toEqual('Steven Spielberg')
    })
  })

  describe('#stars', () => {
    it('gets the movie`s stars', () => {
      expect(page.stars).toEqual([
        'Tye Sheridan',
        'Olivia Cooke',
        'Ben Mendelsohn',
        'Lena Waithe'
      ])
    })
  })

  describe('#description', () => {
    it('gets the movie`s description', () => {
      expect(page.description).toEqual(
        [
          'When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all',
          'OASIS users to find his Easter Egg, which will give the finder his fortune.'
        ].join(' ')
      )
    })
  })
})
