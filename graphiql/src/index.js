/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Playground, store} from 'graphql-playground-react'
import {endpoint, token, apikey} from './endpoint'
import './index.css'

console.log(apikey)

ReactDOM.render(
  <Provider store={store}>
    <Playground
      endpoint={endpoint}
      headers={{
        ['x-api-key']: apikey,
        authorization: token,
      }}
    />
  </Provider>,
  document.body,
)
