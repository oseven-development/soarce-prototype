/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
require('dotenv').config()

console.log(process.env)

// process.env.REACT_APP_GA_ID ? GA.init(process.env.REACT_APP_GA_ID) : console.error('GA Tracking ID not provided')
ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', {scope: '/'}).then(function(registration) {
    console.log('Service Worker Registered')
  })
  navigator.serviceWorker.ready.then(function(registration) {
    console.log('Service Worker Ready')
  })
}
