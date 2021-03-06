import {GraphQLID, GraphQLObjectType} from 'graphql'
import StandardMutationError from 'server/graphql/types/StandardMutationError'
import User from './User'

const RemoveGitHubAuthPayload = new GraphQLObjectType({
  name: 'RemoveGitHubAuthPayload',
  fields: () => ({
    error: {
      type: StandardMutationError
    },
    authId: {
      type: GraphQLID,
      description: 'The ID of the authorization removed'
    },
    teamId: {
      type: GraphQLID
    },
    user: {
      type: User,
      description: 'The user with updated atlassianAuth',
      resolve: ({userId}, _args, {dataLoader}) => {
        return dataLoader.get('users').load(userId)
      }
    }
  })
})

export default RemoveGitHubAuthPayload
