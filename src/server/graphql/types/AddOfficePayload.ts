import {GraphQLObjectType} from 'graphql'
import {resolveOffice} from 'server/graphql/resolvers'
import Office from 'server/graphql/types/Office'
import StandardMutationError from 'server/graphql/types/StandardMutationError'

export const addOfficeFields = {
  error: {
    type: StandardMutationError
  },
  office: {
    type: Office,
    resolve: resolveOffice
  }
}

const AddOfficePayload = new GraphQLObjectType({
  name: 'AddOfficePayload',
  fields: () => addOfficeFields
})

export default AddOfficePayload
