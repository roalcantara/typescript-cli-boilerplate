import * as FactoryGirl from 'factory-girl'
import * as Faker from 'faker/locale/pt_BR'

import { Pokemon } from '../../models'

const Factory = FactoryGirl.factory

Factory.define('pokemon', Pokemon, {
  name: Faker.name.findName(),
  strength: Faker.random.number(),
  flying: Faker.random.boolean()
})

export default Factory
