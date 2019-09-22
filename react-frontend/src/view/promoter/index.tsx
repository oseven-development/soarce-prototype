/** @format */

import React from 'react'
import {Bigbutton, CForm, Card, ContentCard} from '../../components'
import AddIcon from '@material-ui/icons/Add'
import {API, graphqlOperation} from 'aws-amplify'

import {createPromoterValidationSchema, promoterValues} from '../../assets/content/forms/promoter'
import * as mutations from '../../api/amplify/graphql/mutations'
import {createFormValues} from '../../utils/createFormValues'

const PromoterView = (props: any) => {
  const {setSnackbar} = props
  const [action, setAction]: [string, any] = React.useState('default')
  const [promoters, setpromoters]: any = React.useState(props.data.promoters)
  const [promoterID, setpromoterID] = React.useState(0)

  const createpromoter = async (values: any) => {
    await API.graphql(graphqlOperation(mutations.createPromoter, {input: values}))
      .then(({data}: any) => {
        setSnackbar({variant: 'success', message: 'Promoter erfolgreich erstellt', open: true})
        promoters.push(data.createPromoter)
        setpromoters(promoters)
      })
      .catch((err: any) => {
        setSnackbar({variant: 'error', message: err.errors[0].message, open: true})
      })
  }
  const editpromoter = async (values: any) => {
    await API.graphql(graphqlOperation(mutations.updatePromoter, {input: values}))
      .then(async ({data}: any) => {
        promoters.splice(promoters.findIndex((e: any) => e.id === data.updatepromoter.id), 1, data.updatepromoter)
        setpromoters(promoters)
        setSnackbar({variant: 'success', message: 'Promoter erfolgreich upgedatet', open: true})
      })
      .catch((err: any) => {
        console.log(err)
        if (err.errors) {
          setSnackbar({variant: 'error', message: err.errors[0].message, open: true})
        }
      })
  }
  const deletepromoter = async (values: any) => {
    await API.graphql(graphqlOperation(mutations.deletePromoter, {input: {id: values.id}}))
      .then((res: any) => {
        promoters.splice(promoters.indexOf(values), 1)
        setpromoters(promoters)
        setSnackbar({variant: 'success', message: 'Promoter erfolgreich gelöscht', open: true})
      })
      .catch((err: any) => {
        setSnackbar({variant: 'error', message: err.errors[0].message, open: true})
      })
  }

  return (
    <React.Fragment>
      {action === 'hinzufügen' ? (
        <CForm
          title={`promoter ${action}`}
          onSubmit={createpromoter}
          validationSchema={createPromoterValidationSchema}
          values={promoterValues}
        />
      ) : action === 'editieren' ? (
        <CForm
          title={`promoter ${action}`}
          onSubmit={editpromoter}
          validationSchema={createPromoterValidationSchema}
          values={createFormValues(promoterValues, promoters[promoterID])}
        />
      ) : (
        <Bigbutton
          text={'promoter hinzufügen'}
          icon={<AddIcon />}
          width={window.innerWidth < 640 ? '100%' : 350}
          height={window.innerWidth < 640 ? '100%' : 160}
          onClick={() => {
            setAction('hinzufügen')
          }}
        />
      )}
      {promoters &&
        promoters.map((promoter: any) => (
          <Card
            key={promoter.name}
            content={
              <ContentCard
                title={`${promoter.name}`}
                type="promoter"
                onEdit={() => {
                  setAction('editieren')
                  setpromoterID(promoters.indexOf(promoter))
                }}
                onDelete={() => {
                  deletepromoter(promoter)
                }}
                content={promoter}
              />
            }></Card>
        ))}

      {/* <SubSite site={subsite} /> */}
    </React.Fragment>
  )
}

export default PromoterView
