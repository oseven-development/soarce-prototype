/** @format */

import React from 'react'
import {SiteNavigation, SiteContainer} from '../../components'
import NewProject from './subsites/new'
const ProjectView = (props: any) => {
  const [subsite, setSubsite]: [string, any] = React.useState('Dashboard')
  return (
    <React.Fragment>
      <SiteNavigation
        startValue={'Dashboard'}
        data={['Dashbaord', 'hinzufügen', 'bearbeiten']}
        onClick={setSubsite}
        Limit={4}
      />
      <SubSite site={subsite} />
    </React.Fragment>
  )
}

const SubSite = ({site}: {site: string}) => {
  switch (site) {
    case 'hinzufügen':
      return <NewProject />
    default:
      return null
  }
}

export default ProjectView
