import { FactoryBot } from 'factory-bot-ts'
import faker from 'faker'

import { Pokemon } from '../../models'

FactoryBot.define('pokemon', Pokemon, {
  name: faker.name.findName(),
  strength: faker.random.number(),
  flying: faker.random.boolean()
})

export { FactoryBot as Factory }
