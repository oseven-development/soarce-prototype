/** @format */

import React from 'react'
import {SiteNavigation, Bigbutton} from '../../components'
import AddIcon from '@material-ui/icons/Add'
import NewProject from './subsites/new'

const project = {
  id: 123,
  description: 'test',
  startDate: '01-01-2019',
  endDate: '02-02-2019',
  Promoter: [{name: 'Max', email: 'Max@email.de'}, {name: 'Philipp', email: 'Philipp@email.de'}],
  location: {
    id: 456,
    name: 'Munich Festhalle',
    city: 'Munich',
  },
}

const ProjectView = (props: any) => {
  const [subsite, setSubsite]: [string, any] = React.useState('Dashboard')
  const [projects, setProjects] = React.useState(project)
  return (
    <React.Fragment>
      <SiteNavigation
        startValue={'Dashboard'}
        data={['Dashboard', 'hinzufügen', 'bearbeiten']}
        onClick={setSubsite}
        Limit={4}
      />
      {subsite === 'Dashboard' ? (
        <Bigbutton
          text={'Projekt hinzufügen'}
          icon={<AddIcon />}
          width={350}
          onClick={() => {
            setSubsite('hinzufügen')
          }}
        />
      ) : null}

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
