import React, {lazy} from 'react'
import {Route} from 'react-router'
import {Switch} from 'react-router-dom'

const Offices = lazy(() =>
  import(/* webpackChunkName: 'OfficesRoot' */ 'universal/modules/hr/containers/Offices/OfficesRoot')
)
const UserDashMain = lazy(() =>
  import(/* webpackChunkName: 'UserDashMain' */ 'universal/modules/userDashboard/components/UserDashMain/UserDashMain')
)

interface Props {
  match: any
  notifications: any
}

const HrDashboard = (props: Props) => {
  const {match} = props
  return (
    <Switch>
      <Route exact path={`${match.url}/offices`} component={Offices} />
      <Route path={`${match.url}/offices/:officeId`} component={Offices} />
      <Route path={match.url} component={UserDashMain} />
    </Switch>
  )
}

export default HrDashboard
