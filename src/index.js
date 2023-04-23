import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './App'
import { PetProvider } from './Context/Context'
const client = new ApolloClient({
  uri: 'https://petgram-server-wladimir.vercel.app/graphql',
  cache: new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('app')).render(
  <PetProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </PetProvider>
)
