/** @format */

import {API, graphqlOperation} from 'aws-amplify'
import {varToString} from '../../../utils/createFormValues'

export const getData = async (query: any, queryString: string, values: any) => {
  return new Promise(async (resolve, reject) => {
    await API.graphql(graphqlOperation(query, {id: 'a3935010-01d8-414d-9f89-9bc158fbef65'}))
      .then((res: any) => {
        resolve(res.data[queryString])
      })
      .catch((err: any) => reject(err))
  })
}
