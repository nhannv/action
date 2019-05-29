import React, {Component} from 'react'
import styled from 'react-emotion'
import PrimaryButton from 'universal/components/PrimaryButton'
import withAtmosphere, {WithAtmosphereProps} from 'universal/decorators/withAtmosphere/withAtmosphere'
// import InviteToTeamMutation from 'universal/mutations/InviteToTeamMutation'
import withMutationProps, {WithMutationProps} from 'universal/utils/relay/withMutationProps'
// import AddTeamMemberModalSuccess from './AddTeamMemberModalSuccess'
import FieldLabel from 'universal/components/FieldLabel/FieldLabel'
import UnderlineInput from 'universal/components/InputField/UnderlineInput'
import DialogContainer from 'universal/components/DialogContainer'
import DialogContent from 'universal/components/DialogContent'
import DialogTitle from 'universal/components/DialogTitle'
import StyledError from 'universal/components/StyledError'

interface Props extends WithAtmosphereProps, WithMutationProps {
  closePortal: () => void
}

interface State {
  pendingSuccessfulInvitations: Array<string>
  successfulInvitations: null | Array<string>
}

const StyledDialogContainer = styled(DialogContainer)({
  width: 500
})

const ButtonGroup = styled('div')({
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'flex-end'
})

const ErrorMessage = styled(StyledError)({
  fontSize: '.8125rem',
  marginTop: '.5rem'
})

const FieldBlock = styled('div')({
  flex: 1,
  minWidth: 0,
  paddingRight: 16
})

const ControlBlock = styled('div')({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  width: '100%',
  marginBottom: 16
})

class AddOfficeModal extends Component<Props, State> {
  _mounted = true
  state = {
    pendingSuccessfulInvitations: [] as Array<string>,
    successfulInvitations: null
  }

  componentWillUnmount () {
    this._mounted = false
  }

  render () {
    const {error, submitting} = this.props
    return (
      <StyledDialogContainer>
        <DialogTitle>Create an office</DialogTitle>
        <DialogContent>
          <FieldLabel label='Name' fieldSize='small' htmlFor='name'/>
          <ControlBlock>
            <FieldBlock>
              <UnderlineInput autoFocus name='name'/>
            </FieldBlock>
          </ControlBlock>
          <FieldLabel label='Address' fieldSize='small' htmlFor='address'/>
          <ControlBlock>
            <FieldBlock>
              <UnderlineInput name='address'/>
            </FieldBlock>
          </ControlBlock>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <ButtonGroup>
            <PrimaryButton
              waiting={submitting}>
              Create
            </PrimaryButton>
          </ButtonGroup>
        </DialogContent>
      </StyledDialogContainer>
    )
  }
}

export default withAtmosphere(withMutationProps(AddOfficeModal))
