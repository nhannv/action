import PropTypes from 'prop-types'
import React from 'react'
import defaultOrgAvatar from 'universal/styles/theme/images/avatar-organization.svg'
import {PERSONAL, PRO, PRO_LABEL} from 'universal/utils/constants'
import {withRouter} from 'react-router-dom'
import plural from 'universal/utils/plural'
import styled from 'react-emotion'
import ui from 'universal/styles/ui'
import Row from 'universal/components/Row/Row'
import Avatar from 'universal/components/Avatar/Avatar'
import RowInfo from 'universal/components/Row/RowInfo'
import RowInfoHeader from 'universal/components/Row/RowInfoHeader'
import TagPro from 'universal/components/Tag/TagPro'
import RowInfoCopy from 'universal/components/Row/RowInfoCopy'
import RowActions from 'universal/components/Row/RowActions'
import FlatButton from 'universal/components/FlatButton'
import SecondaryButton from 'universal/components/SecondaryButton'
import TagBlock from 'universal/components/Tag/TagBlock'
import RowInfoHeading from 'universal/components/Row/RowInfoHeading'

const OrgAvatar = styled('div')({
  cursor: 'pointer',
  width: '2.75rem'
})

const Name = styled(RowInfoHeading)({
  cursor: 'pointer'
})

const StyledTagBlock = styled(TagBlock)({
  marginLeft: '.125rem',
  marginTop: '-.5rem'
})

const StyledButton = styled(SecondaryButton)({
  marginLeft: 8
})

const OfficeRow = (props) => {
  const {
    history,
    office: {id: officeId, name}
  } = props
  const onRowClick = () => history.push(`/me/offices/${officeId}`)
  return (
    <Row>
      <RowInfo>
        <RowInfoHeader>
          <Name onClick={onRowClick}>{name}</Name>
        </RowInfoHeader>
        <RowInfoCopy>{`1 'User')} (1 Active)`}</RowInfoCopy>
      </RowInfo>
      <RowActions>
        <StyledButton onClick={onRowClick}>{'Settings'}</StyledButton>
      </RowActions>
    </Row>
  )
}

OfficeRow.propTypes = {
  history: PropTypes.object.isRequired,
  office: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default withRouter(OfficeRow)
