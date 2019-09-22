/** @format */

import React from 'react'
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import * as mutations from '../api/amplify/graphql/mutations'
import * as queries from '../api/amplify/graphql/queries'
import {Typography} from '@material-ui/core'

const input = {name: 'Max', email: 'Max@email.de', phoneNumber: '+4912345'}

const DashboardView = (props: any) => {
  return (
    <React.Fragment>
      <Typography variant="h1">Soarce-Prototype Demo</Typography>
    </React.Fragment>
  )
}
export default DashboardView
