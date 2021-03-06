import getRethink from 'server/database/rethinkDriver'
import AgendaItemsPhase from 'server/database/types/AgendaItemsPhase'
import CheckInPhase from 'server/database/types/CheckInPhase'
import DiscussPhase from 'server/database/types/DiscussPhase'
import GenericMeetingPhase from 'server/database/types/GenericMeetingPhase'
import {MeetingType} from 'server/database/types/Meeting'
import ReflectPhase from 'server/database/types/ReflectPhase'
import UpdatesPhase from 'server/database/types/UpdatesPhase'
import {DataLoaderWorker} from 'server/graphql/graphql'
import {
  AGENDA_ITEMS,
  CHECKIN,
  DISCUSS,
  FIRST_CALL,
  GROUP,
  LAST_CALL,
  REFLECT,
  UPDATES,
  VOTE
} from 'universal/utils/constants'

const primePhases = (phases: GenericMeetingPhase[]) => {
  const [firstPhase, secondPhase] = phases
  firstPhase.stages[0].startAt = new Date()
  firstPhase.stages.forEach((stage) => {
    stage.isNavigable = true
    stage.isNavigableByFacilitator = true
  })
  secondPhase.stages[0].isNavigableByFacilitator = true
}

const createNewMeetingPhases = async (
  teamId: string,
  meetingCount: number,
  meetingType: MeetingType,
  dataLoader: DataLoaderWorker
) => {
  const r = getRethink()
  const now = new Date()
  const meetingSettings = await r
    .table('MeetingSettings')
    .getAll(teamId, {index: 'teamId'})
    .filter({meetingType})
    .nth(0)
    .default(null)
  if (!meetingSettings) {
    throw new Error('No meeting setting found for team!')
  }

  const {phaseTypes, selectedTemplateId} = meetingSettings
  const phases = await Promise.all(phaseTypes.map(async (phaseType) => {
    switch (phaseType) {
      case CHECKIN:
        const teamMembers1 = await dataLoader.get('teamMembersByTeamId').load(teamId)
        return new CheckInPhase(teamId, meetingCount, teamMembers1)
      case REFLECT:
        await r
          .table('ReflectTemplate')
          .get(selectedTemplateId)
          .update({
            lastUsedAt: now
          })
        return new ReflectPhase(teamId, selectedTemplateId)
      case DISCUSS:
        return new DiscussPhase()
      case UPDATES:
        const teamMembers2 = await dataLoader.get('teamMembersByTeamId').load(teamId)
        return new UpdatesPhase(teamMembers2)
      case AGENDA_ITEMS:
        const agendaItems = await dataLoader.get('agendaItemsByTeamId').load(teamId)
        const agendaItemIds = agendaItems.map(({id}) => id)
        return new AgendaItemsPhase(agendaItemIds)
      case GROUP:
      case VOTE:
      case FIRST_CALL:
      case LAST_CALL:
        return new GenericMeetingPhase(phaseType)
      default:
        throw new Error(`Unhandled phaseType: ${phaseType}`)
    }
  }) as GenericMeetingPhase[])
  primePhases(phases)
  return phases
}

export default createNewMeetingPhases
