import * as chai from 'chai'
import * as fs from 'fs'

const expect = chai.expect

import { NewMovies } from '../../../pages/imdb'
import Factory from '../../fixtures'

describe('NewMovies', () => {
  let page: NewMovies

  before(() => {
    const path = '/Users/roalcantara/Documents/typescript-cli-boilerplate/src/specs/fixtures/imdb/movies-coming-soon.html'
    const html = fs.readFileSync(path).toString()

    page = new NewMovies(html)
  })

  describe('#list', () => {
    it('gets all movies', () => {
      expect(page.list()).to.deep.eq([
        {
          name: 'Jogador Nº 1 (2018)',
          director: 'Steven Spielberg',
          stars: [ 'Tye Sheridan', 'Olivia Cooke', 'Ben Mendelsohn', 'Lena Waithe' ],
          description: [
            'When the creator of a virtual reality world called the OASIS dies, he releases a video in which he challenges all',
            'OASIS users to find his Easter Egg, which will give the finder his fortune.'
          ].join(' ')
        },
        {
          name: `Tyler Perry's Acrimony (2018)`,
          director: 'Tyler Perry',
          stars: [ 'Taraji P. Henson', 'Lyriq Bent', 'Crystle Stewart', 'Jazmyn Simon' ],
          description: [
            'A faithful wife (Taraji P. Henson) tired of standing by her devious husband (Lyriq Bent) is enraged when it becomes',
            'clear she has been betrayed.'
          ].join(' ')
        },
        {
          name: 'Deus Não Está Morto: Uma Luz na Escuridão (2018)',
          director: 'Michael Mason',
          stars: [ 'David A.R. White', 'John Corbett', 'Shane Harper', 'Ted McGinley' ],
          description: [
            'Pastor Dave (David A.R. White) responds to the unimaginable tragedy of having his church, located on the grounds of',
            'the local university, burned down.'
          ].join(' ')
        },
        {
          name: 'Finding Your Feet (2017)',
          director: 'Richard Loncraine',
          stars: [ 'Timothy Spall', 'Joanna Lumley', 'Imelda Staunton', 'Celia Imrie' ],
          description: [
            'On the eve of retirement a middle class, judgmental snob discovers her husband has been having an affair with her',
            'best friend and is forced into exile with her bohemian sister who lives on an impoverished inner-city council estate.'
          ].join(' ')
        },
        {
          name: 'Outside In (2017)',
          director: 'Lynn Shelton',
          stars: [ 'Edie Falco', 'Jay Duplass', 'Kaitlyn Dever', 'Ben Schwartz' ],
          description: [
            'An ex-con struggling to readjust to life in his small town forms an intense bond',
            'with his former high school teacher.'
          ].join(' ')
        },
        {
          name: 'The China Hustle (2017)',
          director: 'Jed Rothstein',
          stars: [ `Pat O'Brien` ],
          description: [
            'An unsettling and eye-opening Wall Street horror story about Chinese companies, the American',
            `stock market, and the opportunistic greed behind the biggest heist you've never heard of.`
          ].join(' ')
        },
        {
          name: 'Gemini (2017)',
          director: 'Aaron Katz',
          stars: [ 'Lola Kirke', 'Zoë Kravitz', 'John Cho', 'Greta Lee' ],
          description: [
            'A heinous crime tests the complex relationship between a tenacious personal assistant and her Hollywood starlet boss.',
            'As the assistant unravels the mystery, she must confront her own understanding of friendship, truth, and celebrity.'
          ].join(' ')
        },
        {
          name: 'Birthmarked (2018)',
          director: 'Emanuel Hoss-Desmarais',
          stars: [ 'Matthew Goode', 'Toni Collette', 'Fionnula Flanagan', 'Michael Smiley' ],
          description: [
            'Two scientists raise 3 children contrarily to their genetic tendencies',
            'to prove the ultimate power of nurture over nature.'
          ].join(' ')
        }
      ])
    })
  })
})
