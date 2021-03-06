import {GraphQLBoolean, GraphQLID, GraphQLInterfaceType, GraphQLNonNull} from 'graphql'
import ActionMeetingMember from 'server/graphql/types/ActionMeetingMember'
import GraphQLISO8601Type from 'server/graphql/types/GraphQLISO8601Type'
import MeetingTypeEnum from 'server/graphql/types/MeetingTypeEnum'
import {ACTION, RETROSPECTIVE} from 'universal/utils/constants'
import RetrospectiveMeetingMember from 'server/graphql/types/RetrospectiveMeetingMember'
import {resolveUser} from 'server/graphql/resolvers'
import User from 'server/graphql/types/User'

export const meetingMemberFields = () => ({
  id: {
    type: new GraphQLNonNull(GraphQLID),
    description: 'A composite of userId::meetingId'
  },
  isCheckedIn: {
    type: GraphQLBoolean,
    description: 'true if present, false if absent, else null'
  },
  meetingId: {
    type: new GraphQLNonNull(GraphQLID)
  },
  meetingType: {
    type: new GraphQLNonNull(MeetingTypeEnum)
  },
  teamId: {
    type: new GraphQLNonNull(GraphQLID)
  },
  user: {
    type: new GraphQLNonNull(User),
    resolve: resolveUser
  },
  userId: {
    type: new GraphQLNonNull(GraphQLID)
  },
  updatedAt: {
    type: new GraphQLNonNull(GraphQLISO8601Type),
    description: 'The last time a meeting was updated (stage completed, finished, etc)'
  }
})

const MeetingMember = new GraphQLInterfaceType({
  name: 'MeetingMember',
  description: 'All the user details for a specific meeting',
  fields: meetingMemberFields,
  resolveType: ({meetingType}) => {
    const resolveTypeLookup = {
      [RETROSPECTIVE]: RetrospectiveMeetingMember,
      [ACTION]: ActionMeetingMember
    }
    return resolveTypeLookup[meetingType]
  }
})

export default MeetingMember
