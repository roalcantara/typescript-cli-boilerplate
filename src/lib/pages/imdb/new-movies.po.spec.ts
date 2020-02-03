import { Fixture } from '../../../tests'

import { NewMovies } from './new-movies.po'

describe('NewMovies', () => {
  let page: NewMovies

  beforeAll(() => {
    page = new NewMovies(Fixture.load('movies-coming-soon.html'))
  })

  describe('#list', () => {
    it('gets all movies', () => {
      expect(page.list()).toEqual([
        {
          name: 'Birds of Prey (2020)',
          description:
            'After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.',
          director: 'Cathy Yan',
          stars: ['Margot Robbie', 'Mary Elizabeth Winstead', 'Ewan McGregor', 'Jurnee Smollett-Bell']
        },
        {
          name: 'Shikara (2020)',
          description:
            "Shikara is the story of resilience in the face of insurmountable odds. It's also the story of a love that remains unextinguished through 30 years of exile. A timeless love story in the worst of times.",
          director: 'Vidhu Vinod Chopra',
          stars: ['Aadil Khan', 'Sadia']
        },
        {
          name: 'Malang (2020)',
          description:
            'Advait visits Goa where he meets Sara, a free-spirited girl who lives life unshackled. Opposites attract and all goes well until life turns upside down. Years later, Advait is on a killing spree with cops Aghase and Michael in his way.',
          director: 'Mohit Suri',
          stars: ['Aditya Roy Kapoor', 'Anil Kapoor', 'Disha Patani', 'Kunal Khemu']
        },
        {
          name: 'Come to Daddy (2019)',
          description: 'A man in his thirties travels to a remote cabin to reconnect with his estranged father.',
          director: 'Ant Timpson',
          stars: ['Elijah Wood', 'Stephen McHattie', 'Garfield Wilson', 'Madeleine Sami']
        },
        {
          name: 'And Then We Danced (2019)',
          description:
            'A passionate coming-of-age tale set amidst the conservative confines of modern Tbilisi, the film follows Merab, a competitive dancer who is thrown off balance by the arrival of Irakli, a fellow male dancer with a rebellious streak.',
          director: 'Levan Akin',
          stars: ['Levan Gelbakhiani', 'Bachi Valishvili', 'Ana Javakishvili', 'Giorgi Tsereteli']
        },
        {
          name: 'Legend of Deification (2020)',
          description:
            "Atop the ruins of war, top commander JIANG ZIYA is given the task to banish the Nine-tailed Fox Demon who threatens all mortals' very existence. When he discovers the Nine-tailed Fox's life linked to the soul of an innocent girl, he is faced with a challenging decision - follow the will of heaven or find his own path to righteousness.",
          director: 'Teng Cheng & Li Wei',
          stars: []
        },
        {
          name: 'Waiting for Anya (2020)',
          description:
            'During the harrows of WWII, Jo, a young shepherd along with the help of the widow Horcada, helps to smuggle Jewish children across the border from southern France into Spain.',
          director: 'Ben Cookson',
          stars: ['Anjelica Huston', 'Jean Reno', 'Sadie Frost', 'Noah Schnapp']
        }
      ])
    })
  })
})
