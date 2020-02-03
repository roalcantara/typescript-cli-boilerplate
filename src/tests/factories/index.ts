import { FactoryBot } from 'factory-bot-ts'
import Faker from 'faker/locale/pt_BR'

import { Pokemon } from '../../lib/models'

FactoryBot.define(
  'pokemon',
  {
    name: Faker.name.findName(),
    strength: Faker.random.number(),
    flying: Faker.random.boolean()
  },
  Pokemon
)

export { FactoryBot as Factory }
