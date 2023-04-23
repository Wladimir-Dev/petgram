import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { App } from './App'
import { PetProvider } from './Context/Context'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })

  return forward(operation)
})
const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location = '/user'
  }
})
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({ uri: 'https://petgram-server-wladimir.vercel.app/graphql' })
  ])
})
ReactDOM.createRoot(document.getElementById('app')).render(
  <PetProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </PetProvider>
)
