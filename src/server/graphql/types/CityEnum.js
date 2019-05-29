import {GraphQLEnumType} from 'graphql'
import {CITIES} from 'universal/utils/masterData'

const CityEnum = new GraphQLEnumType({
  name: 'CityEnum',
  values: {...CITIES}
})

export default CityEnum
