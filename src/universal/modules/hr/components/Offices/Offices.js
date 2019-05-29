import PropTypes from 'prop-types'
import React from 'react'
import {createFragmentContainer} from 'react-relay'
import Helmet from 'react-helmet'
import EmptyOffice from 'universal/modules/hr/components/Offices/EmptyOffice'
import OfficeRow from 'universal/modules/hr/components/Offices/OfficeRow'
import {withRouter} from 'react-router-dom'
import LinkButton from 'universal/components/LinkButton'
import IconLabel from 'universal/components/IconLabel'
import Panel from 'universal/components/Panel/Panel'
import SettingsWrapper from 'universal/components/Settings/SettingsWrapper'
import DashMain from 'universal/components/Dashboard/DashMain'
import DashContent from 'universal/components/Dashboard/DashContent'

const Offices = (props) => {
  const {history, viewer} = props
  const {offices} = viewer
  const gotoNewTeam = () => {
    history.push('/newteam')
  }
  const addNewOrg = () => (
    <LinkButton aria-label='Tap to create a new office' onClick={gotoNewTeam}>
      <IconLabel icon='add_circle' label='Add New Office' />
    </LinkButton>
  )

  return (
    <DashMain>
      <DashContent>
        <Helmet title='My Offices | Parabol' />
        <SettingsWrapper>
          {offices.length ? (
            <Panel label='Offices' controls={addNewOrg()}>
              {offices.map((office) => (
                <OfficeRow key={`officeRow${office.id}`} office={office} />
              ))}
            </Panel>
          ) : (
            <EmptyOffice />
          )}
        </SettingsWrapper>
      </DashContent>
    </DashMain>
  )
}

Offices.propTypes = {
  viewer: PropTypes.object,
  history: PropTypes.object
}

export default createFragmentContainer(
  withRouter(Offices),
  graphql`
    fragment Offices_viewer on User {
      offices {
        id
        name
      }
    }
  `
)
