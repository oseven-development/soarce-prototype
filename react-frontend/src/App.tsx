/** @format */

import React from 'react'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import {withAuthenticator} from 'aws-amplify-react'
import {API, graphqlOperation} from 'aws-amplify'

import {MuiThemeProvider} from '@material-ui/core'
import {theme} from './assets/theme/theme'
import {Header, Navigation, SiteContainer, Snackbar, FabButton} from './components'
import routes from './assets/routes'
import * as queries from './api/amplify/graphql/queries'

import {BrowserRouter as Router, Route} from 'react-router-dom'

Amplify.configure(awsconfig)

const devLocation = [{city: 'test', id: 'ca934878-2be3-4400-8152-7e8b1f197416', name: 'test'}]

const LoadDataDynamo = async () => {
  console.log('Load Data Dynamo')
  const locations = process.env.REACT_APP_DEV
    ? await await API.graphql(graphqlOperation(queries.listLocations))
        .then((res: any) => {
          return res.data.listLocations.items
        })
        .catch((err: any) => console.log(err))
    : () => {
        return devLocation
      }
  const promoters = process.env.REACT_APP_DEV
    ? await await API.graphql(graphqlOperation(queries.listPromoters))
        .then((res: any) => {
          return res.data.listPromoters.items
        })
        .catch((err: any) => console.log(err))
    : () => {
        return devLocation
      }
  const projects = process.env.REACT_APP_DEV
    ? await await API.graphql(graphqlOperation(queries.listProjects))
        .then((res: any) => {
          return res.data.listProjects.items
        })
        .catch((err: any) => console.log(err))
    : () => {
        return devLocation
      }
  return {locations, promoters, projects}
}

export const SnackbarContext = React.createContext({})
export const SnackProvider = SnackbarContext.Provider
export const SnackConsumer = SnackbarContext.Consumer

const App: React.FC = () => {
  const [title, setTitle] = React.useState('Dashboard')
  const [snackbar, setSnackbar] = React.useState({variant: 'info', message: 'test', open: false})
  const [data, setData] = React.useState({})
  React.useEffect(() => {
    const LoadData = async () => {
      const res = await LoadDataDynamo()
      setData(res)
    }
    LoadData()
  }, [])
  return (
    <MuiThemeProvider theme={theme}>
      <SnackProvider value={{snackbar, setSnackbar}}>
        <Router>
          <Header title={title} />
          <Navigation setTitle={setTitle} width={window.innerWidth} />
          <SiteContainer>
            {routes.map((e: any) => {
              const Component = e.component
              return (
                <Route
                  path={e.path}
                  exact
                  component={(props: any) => <Component setSnackbar={setSnackbar} data={data} {...props} />}
                  key={e.path}
                />
              )
            })}
          </SiteContainer>
        </Router>
        <FabButton
          addButton
          onClick={() => {
            alert('hi')
          }}></FabButton>
        <Snackbar />
      </SnackProvider>
    </MuiThemeProvider>
  )
}
const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '49',
  signUpFields: [
    {
      label: 'Telefonnummer',
      key: 'username',
      required: true,
      displayOrder: 3,
      type: 'string',
    },
    {label: 'Password', key: 'password', required: true, displayOrder: 2, type: 'password'},
  ],
}

export default withAuthenticator(App, {signUpConfig})
