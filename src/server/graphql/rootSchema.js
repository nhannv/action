import {GraphQLSchema} from 'graphql'
import NotifyPromoteToOrgLeader from 'server/graphql/types/NotifyPromoteToOrgLeader'
import NotificationTeamInvitation from 'server/graphql/types/NotificationTeamInvitation'
import mutation from './rootMutation'
import query from './rootQuery'
import subscription from './rootSubscription'
import RetroPhaseItem from 'server/graphql/types/RetroPhaseItem'
import RetrospectiveMeeting from 'server/graphql/types/RetrospectiveMeeting'
import GenericMeetingPhase from 'server/graphql/types/GenericMeetingPhase'
import DiscussPhase from 'server/graphql/types/DiscussPhase'
import ReflectPhase from 'server/graphql/types/ReflectPhase'
import CheckInPhase from 'server/graphql/types/CheckInPhase'
import RetrospectiveMeetingSettings from 'server/graphql/types/RetrospectiveMeetingSettings'
import ActionMeetingSettings from 'server/graphql/types/ActionMeetingSettings'
import RetrospectiveMeetingMember from 'server/graphql/types/RetrospectiveMeetingMember'
import AuthToken from 'server/graphql/types/AuthToken'
import SuggestedActionInviteYourTeam from 'server/graphql/types/SuggestedActionInviteYourTeam'
import SuggestedActionTryTheDemo from 'server/graphql/types/SuggestedActionTryTheDemo'
import SuggestedActionCreateNewTeam from 'server/graphql/types/SuggestedActionCreateNewTeam'
import SuggestedActionTryActionMeeting from 'server/graphql/types/SuggestedActionTryActionMeeting'
import SuggestedActionTryRetroMeeting from 'server/graphql/types/SuggestedActionTryRetroMeeting'
import TimelineEventTeamCreated from 'server/graphql/types/TimelineEventTeamCreated'
import TimelineEventJoinedParabol from 'server/graphql/types/TimelineEventJoinedParabol'
import TimelineEventCompletedRetroMeeting from 'server/graphql/types/TimelineEventCompletedRetroMeeting'
import TimelineEventCompletedActionMeeting from 'server/graphql/types/TimelineEventCompletedActionMeeting'
import TaskIntegrationGitHub from 'server/graphql/types/TaskIntegrationGitHub'
import SuggestedIntegrationJira from 'server/graphql/types/SuggestedIntegrationJira'
import SuggestedIntegrationGitHub from 'server/graphql/types/SuggestedIntegrationGitHub'
import TaskIntegrationJira from 'server/graphql/types/TaskIntegrationJira'
import ActionMeeting from 'server/graphql/types/ActionMeeting'
import ActionMeetingMember from 'server/graphql/types/ActionMeetingMember'
import UpdatesPhase from 'server/graphql/types/UpdatesPhase'
import AgendaItemsPhase from 'server/graphql/types/AgendaItemsPhase'

export default new GraphQLSchema({
  query,
  mutation,
  subscription,
  types: [
    CheckInPhase,
    ReflectPhase,
    DiscussPhase,
    UpdatesPhase,
    AgendaItemsPhase,
    GenericMeetingPhase,
    NotificationTeamInvitation,
    NotifyPromoteToOrgLeader,
    RetroPhaseItem,
    ActionMeeting,
    ActionMeetingMember,
    RetrospectiveMeeting,
    RetrospectiveMeetingMember,
    RetrospectiveMeetingSettings,
    SuggestedActionInviteYourTeam,
    SuggestedActionTryRetroMeeting,
    SuggestedActionTryActionMeeting,
    SuggestedActionCreateNewTeam,
    SuggestedActionTryTheDemo,
    TimelineEventTeamCreated,
    TimelineEventJoinedParabol,
    TimelineEventCompletedRetroMeeting,
    TimelineEventCompletedActionMeeting,
    ActionMeetingSettings,
    AuthToken,
    TaskIntegrationGitHub,
    TaskIntegrationJira,
    SuggestedIntegrationGitHub,
    SuggestedIntegrationJira
  ]
})
