/** @format */

import React from 'react'
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import * as mutations from '../api/amplify/graphql/mutations'
import * as queries from '../api/amplify/graphql/queries'

const input = {name: 'Max', email: 'Max@email.de', phoneNumber: '+4912345'}

const DashboardView = (props: any) => {
  return (
    <React.Fragment>
      <h1>Hallo</h1>
      <button
        onClick={async () => {
          const newPromoter = await API.graphql(graphqlOperation(mutations.createPromoter, {input: input}))
        }}>
        create Promoter
      </button>

      <button
        onClick={async () => {
          const allTodos = await API.graphql(graphqlOperation(queries.listPromoters))
        }}>
        get Promoter
      </button>
    </React.Fragment>
  )
}
export default DashboardView
