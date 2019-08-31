/** @format */

const React = require('react')
const ReactDOM = require('react-dom')
const GraphiQL = require('graphiql')
const fetch = require('isomorphic-fetch')

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json())
}

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />, document.body)
