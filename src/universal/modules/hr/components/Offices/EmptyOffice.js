import PropTypes from 'prop-types'
import React from 'react'
import PrimaryButton from 'universal/components/PrimaryButton'
import Panel from 'universal/components/Panel/Panel'
import {withRouter} from 'react-router-dom'
import styled from 'react-emotion'
import useModal from 'universal/hooks/useModal'
import lazyPreload from 'universal/utils/lazyPreload'

const Body = styled('div')({
  padding: '32px',
  textAlign: 'center'
})

const Heading = styled('h2')({
  fontSize: 20,
  lineHeight: '30px',
  margin: '0 0 16px'
})

const Copy = styled('p')({
  fontSize: 14,
  lineHeight: '21px',
  margin: '0 0 24px'
})

const StyledButton = styled(PrimaryButton)({
  margin: '0 auto'
})

const AddOfficeModal = lazyPreload(() =>
  import(/* webpackChunkName: 'AddOfficeModal' */ './AddOfficeModal')
)

const EmptyOffice = (props) => {
  const {history} = props

  const {togglePortal: toggleModal, closePortal: closeModal, modalPortal} = useModal()

  return (
    <Panel>
      <Body>
        <Heading>{"Your organization doesn's has any offices yet!"}</Heading>
        <Copy>
          {'You can create a new office'}
          <br />
          {'by click button.'}
        </Copy>

        <StyledButton onClick={toggleModal} size='medium'>
          {'Create a New Office'}
        </StyledButton>
      </Body>
      {modalPortal(<AddOfficeModal closePortal={closeModal} />)}
    </Panel>
  )
}

EmptyOffice.propTypes = {
  history: PropTypes.object
}

export default withRouter(EmptyOffice)
