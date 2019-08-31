/** @format */

import React from 'react'
import {Bigbutton} from '../../components'
import AddIcon from '@material-ui/icons/Add'

const LocationView = (props: any) => {
  const [subsite, setSubsite]: [string, any] = React.useState('Dashboard')
  const [locations, setLocations] = React.useState({})
  console.log(subsite)
  return (
    <React.Fragment>
      {subsite !== 'hinzufügen' ? (
        <Bigbutton
          text={'Location hinzufügen'}
          icon={<AddIcon />}
          width={350}
          onClick={() => {
            setSubsite('hinzufügen')
          }}
        />
      ) : null}

      {/* <SubSite site={subsite} /> */}
    </React.Fragment>
  )
}

// const SubSite = ({site}: {site: string}) => {
//   switch (site) {
//     case 'hinzufügen':
//       return <NewLocation />
//     default:
//       return null
//   }
// }

export default LocationView
