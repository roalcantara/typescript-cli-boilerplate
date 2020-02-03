import { FactoryBot } from 'factory-bot-ts'
import faker from 'faker'

import { Pokemon } from '../../lib/models'

FactoryBot.define(
  'pokemon',
  {
    name: faker.name.findName(),
    strength: faker.random.number(),
    flying: faker.random.boolean()
  },
  Pokemon
)

export { FactoryBot as Factory }
