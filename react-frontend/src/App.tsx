import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';


import logo from './logo.svg';
import './App.css';

Amplify.configure(awsconfig);


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
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
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
 
  ]
};

export default withAuthenticator(App,  { signUpConfig });
