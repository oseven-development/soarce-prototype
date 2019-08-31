/** @format */

import React from 'react'
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import * as mutations from '../../api/amplify/graphql/mutations'
import * as queries from '../../api/amplify/graphql/queries'

const input = {name: 'Max', email: 'Max@email.de', phoneNumber: '+4912345'}

const ProfileView = (props: any) => {
  return (
    <React.Fragment>
      <h1>Hallo</h1>
    </React.Fragment>
  )
}
export default ProfileView
