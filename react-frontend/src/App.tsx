/** @format */

import React from 'react'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import {withAuthenticator} from 'aws-amplify-react'
import {MuiThemeProvider} from '@material-ui/core'
import {theme} from './assets/theme/theme'
import {Header, Navigation, SiteContainer, Snackbar, FabButton} from './components'
import routes from './assets/routes'

import {BrowserRouter as Router, Route} from 'react-router-dom'

Amplify.configure(awsconfig)

export const SnackbarContext = React.createContext({})
export const SnackProvider = SnackbarContext.Provider
export const SnackConsumer = SnackbarContext.Consumer

const App: React.FC = () => {
  const [title, setTitle] = React.useState('Dashboard')
  const [loading, setLoading] = React.useState(false)
  const [snackbar, setSnackbar] = React.useState({variant: 'info', message: 'test', open: false})
  return (
    <MuiThemeProvider theme={theme}>
      <SnackProvider value={{snackbar, setSnackbar}}>
        <Router>
          <Header title={title} loading={loading} />
          <Navigation setTitle={setTitle} width={window.innerWidth} />
          <SiteContainer>
            {routes.map((e: any) => {
              const Component = e.component
              return <Route path={e.path} exact component={(props: any) => <Component {...props} />} key={e.path} />
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
