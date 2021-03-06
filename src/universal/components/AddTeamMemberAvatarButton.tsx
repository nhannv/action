import {AddTeamMemberAvatarButton_team} from '__generated__/AddTeamMemberAvatarButton_team.graphql'
import {AddTeamMemberAvatarButton_teamMembers} from '__generated__/AddTeamMemberAvatarButton_teamMembers.graphql'
import React from 'react'
import styled from 'react-emotion'
import {createFragmentContainer, graphql} from 'react-relay'
import Icon from 'universal/components/Icon'
import OutlinedButton from 'universal/components/OutlinedButton'
import ui from 'universal/styles/ui'
import withAtmosphere, {WithAtmosphereProps} from '../decorators/withAtmosphere/withAtmosphere'
import {MenuPosition} from 'universal/hooks/useCoords'
import useTooltip from 'universal/hooks/useTooltip'
import useModal from 'universal/hooks/useModal'
import lazyPreload from 'universal/utils/lazyPreload'

interface Props extends WithAtmosphereProps {
  isMeeting?: boolean
  team: AddTeamMemberAvatarButton_team
  teamMembers: AddTeamMemberAvatarButton_teamMembers
}

const AddButton = styled(OutlinedButton)(
  {
    fontSize: 24,
    fontWeight: 400,
    height: 32,
    marginLeft: 16,
    maxWidth: 32,
    padding: 0,
    width: 32
  },
  ({isMeeting}: {isMeeting: boolean}) =>
    isMeeting && {
      height: 36,
      width: 36,
      maxWidth: 36,
      [ui.breakpoint.wide]: {
        height: 40,
        width: 40,
        maxWidth: 40
      },
      [ui.breakpoint.wider]: {
        height: 48,
        width: 48,
        maxWidth: 48
      },
      [ui.breakpoint.widest]: {
        height: 64,
        width: 64,
        maxWidth: 64
      }
    }
)

const AddTeamMemberModal = lazyPreload(() =>
  import(/* webpackChunkName: 'AddTeamMemberModal' */ './AddTeamMemberModal')
)

const AddTeamMemberAvatarButton = (props: Props) => {
  const {isMeeting, team, teamMembers} = props
  const {tooltipPortal, openTooltip, closeTooltip, originRef} = useTooltip(
    MenuPosition.UPPER_CENTER
  )
  const {togglePortal: toggleModal, closePortal: closeModal, modalPortal} = useModal()
  return (
    <>
      <AddButton
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        onClick={toggleModal}
        innerRef={originRef}
        isMeeting={isMeeting}
        palette='blue'
      >
        <Icon>add</Icon>
      </AddButton>
      {tooltipPortal('Invite to Team')}
      {modalPortal(
        <AddTeamMemberModal closePortal={closeModal} team={team} teamMembers={teamMembers} />
      )}
    </>
  )
}

export default createFragmentContainer(
  withAtmosphere(AddTeamMemberAvatarButton),
  graphql`
    fragment AddTeamMemberAvatarButton_team on Team {
      ...AddTeamMemberModal_team
    }

    fragment AddTeamMemberAvatarButton_teamMembers on TeamMember @relay(plural: true) {
      ...AddTeamMemberModal_teamMembers
    }
  `
)
