import React from 'react'
import {graphql} from 'react-relay'
import QueryRenderer from 'universal/components/QueryRenderer/QueryRenderer'
import withAtmosphere, {
  WithAtmosphereProps
} from 'universal/decorators/withAtmosphere/withAtmosphere'
import {cacheConfig} from 'universal/utils/constants'
import {LoaderSize} from '../../../../types/constEnums'
import renderQuery from '../../../../utils/relay/renderQuery'
import Offices from 'universal/modules/hr/components/Offices/Offices'

const query = graphql`
  query OfficesRootQuery {
    viewer {
      ...Offices_viewer
    }
  }
`

interface Props extends WithAtmosphereProps {}

const OfficesRoot = (props: Props) => {
  const {atmosphere} = props
  return (
    <QueryRenderer
      cacheConfig={cacheConfig}
      environment={atmosphere}
      query={query}
      variables={{}}
      render={renderQuery(Offices, {size: LoaderSize.PANEL})}
    />
  )
}

export default withAtmosphere(OfficesRoot)
