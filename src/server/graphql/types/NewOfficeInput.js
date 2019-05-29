import {GraphQLID, GraphQLInputObjectType, GraphQLString} from 'graphql'
import CityEnum from './CityEnum'

const NewOfficeInput = new GraphQLInputObjectType({
  name: 'NewOfficeInput',
  fields: () => ({
    name: {type: GraphQLString, description: 'The name of the office'},
    address: {type: GraphQLString, description: 'The address of the office'},
    city: {type: CityEnum, description: 'The city where office stands'},
    phone: {type: GraphQLString, description: 'The phone of the office'},
    IP: {type: GraphQLString, description: 'The IP restricts to checkin'},
    openTime: {type: GraphQLString, description: 'The open time'},
    closeTime: {type: GraphQLString, description: 'The close time'},
    orgId: {
      type: GraphQLID,
      description: 'The unique orginization ID that pays for the office'
    },
    approverId: {
      type: GraphQLID,
      description: 'The unique user ID that response to approve checkin'
    }
  })
})

export default NewOfficeInput
