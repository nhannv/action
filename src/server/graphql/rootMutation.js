import {GraphQLObjectType} from 'graphql'
import addAgendaItem from 'server/graphql/mutations/addAgendaItem'
import addOrg from 'server/graphql/mutations/addOrg'
import addProvider from 'server/graphql/mutations/addProvider'
import addSlackChannel from 'server/graphql/mutations/addSlackChannel'
import archiveTeam from 'server/graphql/mutations/archiveTeam'
import clearNotification from 'server/graphql/mutations/clearNotification'
import changeTaskTeam from 'server/graphql/mutations/changeTaskTeam'
import connectSocket from 'server/graphql/mutations/connectSocket'
import createGitHubIssue from 'server/graphql/mutations/createGitHubIssue'
import createTask from 'server/graphql/mutations/createTask'
import deleteTask from 'server/graphql/mutations/deleteTask'
import disconnectSocket from 'server/graphql/mutations/disconnectSocket'
import downgradeToPersonal from 'server/graphql/mutations/downgradeToPersonal'
import editTask from 'server/graphql/mutations/editTask'
import endMeeting from 'server/graphql/mutations/endMeeting'
import githubAddAssignee from 'server/graphql/mutations/githubAddAssignee'
import inactivateUser from 'server/graphql/mutations/inactivateUser'
import navigateMeeting from 'server/graphql/mutations/navigateMeeting'
import promoteNewMeetingFacilitator from 'server/graphql/mutations/promoteNewMeetingFacilitator'
import promoteToTeamLead from 'server/graphql/mutations/promoteToTeamLead'
import removeAgendaItem from 'server/graphql/mutations/removeAgendaItem'
import removeProvider from 'server/graphql/mutations/removeProvider'
import removeSlackChannel from 'server/graphql/mutations/removeSlackChannel'
import removeTeamMember from 'server/graphql/mutations/removeTeamMember'
import segmentEventTrack from 'server/graphql/mutations/segmentEventTrack'
import setOrgUserRole from 'server/graphql/mutations/setOrgUserRole'
import startNewMeeting from 'server/graphql/mutations/startNewMeeting'
import stripeCreateInvoice from 'server/graphql/mutations/stripeCreateInvoice'
import stripeFailPayment from 'server/graphql/mutations/stripeFailPayment'
import stripeSucceedPayment from 'server/graphql/mutations/stripeSucceedPayment'
import stripeUpdateCreditCard from 'server/graphql/mutations/stripeUpdateCreditCard'
import stripeUpdateInvoiceItem from 'server/graphql/mutations/stripeUpdateInvoiceItem'
import toggleAgendaList from 'server/graphql/mutations/toggleAgendaList'
import updateAgendaItem from 'server/graphql/mutations/updateAgendaItem'
import updateCreditCard from 'server/graphql/mutations/updateCreditCard'
import updateOrg from 'server/graphql/mutations/updateOrg'
import updateTask from 'server/graphql/mutations/updateTask'
import updateDragLocation from 'server/graphql/mutations/updateDragLocation'
import updateNewCheckInQuestion from 'server/graphql/mutations/updateNewCheckInQuestion'
import upgradeToPro from 'server/graphql/mutations/upgradeToPro'
import moveTeamToOrg from 'server/graphql/mutations/moveTeamToOrg'
import addTeam from 'server/graphql/mutations/addTeam'
import updateTeamName from 'server/graphql/mutations/updateTeamName'
import removeOrgUser from 'server/graphql/mutations/removeOrgUser'
import createOrgPicturePutUrl from 'server/graphql/mutations/createOrgPicturePutUrl'
import addFeatureFlag from 'server/graphql/mutations/addFeatureFlag'
import createImposterToken from 'server/graphql/mutations/createImposterToken'
import createUserPicturePutUrl from 'server/graphql/mutations/createUserPicturePutUrl'
import login from 'server/graphql/mutations/login'
import updateUserProfile from 'server/graphql/mutations/updateUserProfile'
import endNewMeeting from 'server/graphql/mutations/endNewMeeting'
import createReflection from 'server/graphql/mutations/createReflection'
import updateReflectionContent from 'server/graphql/mutations/updateReflectionContent'
import editReflection from 'server/graphql/mutations/editReflection'
import removeReflection from 'server/graphql/mutations/removeReflection'
import createReflectionGroup from 'server/graphql/mutations/createReflectionGroup'
import updateReflectionGroupTitle from 'server/graphql/mutations/updateReflectionGroupTitle'
import voteForReflectionGroup from 'server/graphql/mutations/voteForReflectionGroup'
import newMeetingCheckIn from 'server/graphql/mutations/newMeetingCheckIn'
import autoGroupReflections from 'server/graphql/mutations/autoGroupReflections'
import endDraggingReflection from 'server/graphql/mutations/endDraggingReflection'
import updateTaskDueDate from 'server/graphql/mutations/updateTaskDueDate'
import dragDiscussionTopic from 'server/graphql/mutations/dragDiscussionTopic'
import startDraggingReflection from 'server/graphql/mutations/startDraggingReflection'
import setPhaseFocus from 'server/graphql/mutations/setPhaseFocus'
import selectRetroTemplate from 'server/graphql/mutations/selectRetroTemplate'
import addReflectTemplate from 'server/graphql/mutations/addReflectTemplate'
import addReflectTemplatePrompt from 'server/graphql/mutations/addReflectTemplatePrompt'
import moveReflectTemplatePrompt from 'server/graphql/mutations/moveReflectTemplatePrompt'
import removeReflectTemplate from 'server/graphql/mutations/removeReflectTemplate'
import removeReflectTemplatePrompt from 'server/graphql/mutations/removeReflectTemplatePrompt'
import renameReflectTemplate from 'server/graphql/mutations/renameReflectTemplate'
import renameReflectTemplatePrompt from 'server/graphql/mutations/renameReflectTemplatePrompt'
import inviteToTeam from 'server/graphql/mutations/inviteToTeam'
import acceptTeamInvitation from 'server/graphql/mutations/acceptTeamInvitation'
import dismissSuggestedAction from 'server/graphql/mutations/dismissSuggestedAction'
import dismissNewFeature from 'server/graphql/mutations/dismissNewFeature'
import addAtlassianAuth from 'server/graphql/mutations/addAtlassianAuth'
import removeAtlassianAuth from 'server/graphql/mutations/removeAtlassianAuth'
import createJiraIssue from 'server/graphql/mutations/createJiraIssue'
import reflectTemplatePromptUpdateDescription from 'server/graphql/mutations/reflectTemplatePromptUpdateDescription'
import addGitHubAuth from 'server/graphql/mutations/addGitHubAuth'
import removeGitHubAuth from 'server/graphql/mutations/removeGitHubAuth'
import addOffice from 'server/graphql/mutations/addOffice'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    acceptTeamInvitation,
    addAtlassianAuth,
    addAgendaItem,
    addFeatureFlag,
    addGitHubAuth,
    addOrg,
    addProvider,
    addSlackChannel,
    addTeam,
    archiveTeam,
    autoGroupReflections,
    changeTaskTeam,
    clearNotification,
    connectSocket,
    createImposterToken,
    createGitHubIssue,
    createJiraIssue,
    createOrgPicturePutUrl,
    createReflection,
    createReflectionGroup,
    createTask,
    createUserPicturePutUrl,
    deleteTask,
    disconnectSocket,
    dismissNewFeature,
    dismissSuggestedAction,
    downgradeToPersonal,
    dragDiscussionTopic,
    endDraggingReflection,
    editReflection,
    editTask,
    endMeeting,
    githubAddAssignee,
    inactivateUser,
    inviteToTeam,
    endNewMeeting,
    moveTeamToOrg,
    navigateMeeting,
    newMeetingCheckIn,
    promoteNewMeetingFacilitator,
    promoteToTeamLead,
    reflectTemplatePromptUpdateDescription,
    removeAgendaItem,
    removeAtlassianAuth,
    removeGitHubAuth,
    removeProvider,
    removeSlackChannel,
    removeOrgUser,
    removeReflection,
    removeTeamMember,
    segmentEventTrack,
    selectRetroTemplate,
    setOrgUserRole,
    setPhaseFocus,
    startDraggingReflection,
    startNewMeeting,
    stripeCreateInvoice,
    stripeFailPayment,
    stripeSucceedPayment,
    stripeUpdateCreditCard,
    stripeUpdateInvoiceItem,
    toggleAgendaList,
    updateAgendaItem,
    updateCreditCard,
    updateOrg,
    updateNewCheckInQuestion,
    updateDragLocation,
    updateReflectionContent,
    updateReflectionGroupTitle,
    updateTask,
    updateTaskDueDate,
    updateTeamName,
    updateUserProfile,
    voteForReflectionGroup,
    login,
    upgradeToPro,
    addReflectTemplate,
    addReflectTemplatePrompt,
    moveReflectTemplatePrompt,
    removeReflectTemplate,
    removeReflectTemplatePrompt,
    renameReflectTemplate,
    renameReflectTemplatePrompt,
    addOffice
  })
})
