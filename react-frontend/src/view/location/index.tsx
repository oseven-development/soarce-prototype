/** @format */

import React from 'react'
import {Bigbutton, CForm, Card, ContentCard} from '../../components'
import AddIcon from '@material-ui/icons/Add'
import {API, graphqlOperation} from 'aws-amplify'

import {createLocationValidationSchema, locationValues} from '../../assets/content/forms/location'
import * as mutations from '../../api/amplify/graphql/mutations'
import {createFormValues} from '../../utils/createFormValues'

const LocationView = (props: any) => {
  const {setSnackbar} = props
  const [action, setAction]: [string, any] = React.useState('default')
  const [locations, setLocations]: any = React.useState(props.data.locations)
  const [locationID, setLocationID] = React.useState(0)

  const createLocation = async (values: any) => {
    await API.graphql(graphqlOperation(mutations.createLocation, {input: values}))
      .then((res: any) => {
        setSnackbar({variant: 'success', message: 'Location erfolgreich erstellt', open: true})
      })
      .catch((err: any) => {
        setSnackbar({variant: 'error', message: err.errors[0].message, open: true})
      })
  }
  const editLocation = async (values: any) => {
    await API.graphql(graphqlOperation(mutations.updateLocation, {input: values}))
      .then(async ({data}: any) => {
        locations.splice(locations.findIndex((e: any) => e.id === data.updateLocation.id), 1, data.updateLocation)
        setLocations(locations)
        setSnackbar({variant: 'success', message: 'Location erfolgreich upgedatet', open: true})
      })
      .catch((err: any) => {
        console.log(err)
        if (err.errors) {
          setSnackbar({variant: 'error', message: err.errors[0].message, open: true})
        }
      })
  }
  const deleteLocation = async (values: any) => {
    await API.graphql(graphqlOperation(mutations.deleteLocation, {input: {id: values.id}}))
      .then((res: any) => {
        locations.splice(locations.indexOf(values), 1)
        setLocations(locations)
        setSnackbar({variant: 'success', message: 'Location erfolgreich gelöscht', open: true})
      })
      .catch((err: any) => {
        setSnackbar({variant: 'error', message: err.errors[0].message, open: true})
      })
  }

  return (
    <React.Fragment>
      {action === 'hinzufügen' ? (
        <CForm
          title={`Location ${action}`}
          onSubmit={createLocation}
          validationSchema={createLocationValidationSchema}
          values={locationValues}
        />
      ) : action === 'editieren' ? (
        <CForm
          title={`Location ${action}`}
          onSubmit={editLocation}
          validationSchema={createLocationValidationSchema}
          values={createFormValues(locationValues, locations[locationID])}
        />
      ) : (
        <Bigbutton
          text={'Location hinzufügen'}
          icon={<AddIcon />}
          width={window.innerWidth < 640 ? '100%' : 350}
          height={window.innerWidth < 640 ? '100%' : 160}
          onClick={() => {
            setAction('hinzufügen')
          }}
        />
      )}
      {locations &&
        locations.map((location: any) => (
          <Card
            key={location.name}
            content={
              <ContentCard
                title={`Location: ${location.name}`}
                type="location"
                onEdit={() => {
                  setAction('editieren')
                  setLocationID(locations.indexOf(location))
                }}
                onDelete={() => {
                  deleteLocation(location)
                }}
                content={location}
              />
            }></Card>
        ))}

      {/* <SubSite site={subsite} /> */}
    </React.Fragment>
  )
}

export default LocationView
