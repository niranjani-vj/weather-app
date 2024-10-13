import { createApp } from 'vue';
import App from './App.vue';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { ApolloClients } from '@vue/apollo-option';
import './assets/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create an Apollo Client instance
const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URI
  }),
  cache: new InMemoryCache(),
});

// Create Vue app
const app = createApp(App);

// Provide Apollo Client
app.provide(ApolloClients, {
  default: apolloClient,
});

// Mount the app
app.mount('#app');
