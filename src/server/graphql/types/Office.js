import {GraphQLNonNull, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLObjectType} from 'graphql'
import GraphQLISO8601Type from 'server/graphql/types/GraphQLISO8601Type'
import Organization from 'server/graphql/types/Organization'
import User from 'server/graphql/types/User'
import CityEnum from 'server/graphql/types/CityEnum'
import {resolveOrganization} from 'server/graphql/resolvers'

const Office = new GraphQLObjectType({
  name: 'Office',
  description: 'An office of company',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'the officeId'
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'the name of office'
    },
    address: {
      type: GraphQLString,
      description: 'the address of office'
    },
    city: {
      type: CityEnum,
      description: 'the city of office'
    },
    phone: {
      type: GraphQLString,
      description: 'the phone of office'
    },
    IP: {
      type: GraphQLString,
      description: 'the IP required to checkin'
    },
    openTime: {
      type: GraphQLString,
      description: 'the open time'
    },
    closeTime: {
      type: GraphQLString,
      description: 'the close time'
    },
    default: {
      type: GraphQLBoolean,
      description: 'is default office'
    },
    approverId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The user who approve checkin'
    },
    approver: {
      type: new GraphQLNonNull(User),
      resolve: async ({orgUsers}, args, {dataLoader}) => {
        if (!Array.isArray(orgUsers)) return null
        const userIds = orgUsers.map(({id}) => id)
        return dataLoader.get('users').loadMany(userIds)
      }
    },
    orgId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The organization to which the office belongs'
    },
    organization: {
      type: new GraphQLNonNull(Organization),
      resolve: resolveOrganization
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLISO8601Type),
      description: 'The datetime the office was created'
    },
    updatedAt: {
      type: GraphQLISO8601Type,
      description: 'The datetime the office was last updated'
    }
  })
})

export default Office
