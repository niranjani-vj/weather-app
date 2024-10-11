import  { createApp, h, provide }  from 'vue';  
import { ApolloClient, InMemoryCache } from '@apollo/client';  
import { DefaultApolloClient } from '@vue/apollo-composable';  
import App from './App.vue';  

// Create Apollo Client instance
const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    // connectToDevTools: true,  // Enable Apollo DevTools in the browser
  });
  
console.log('Apollo Client:', apolloClient);

// Create the Vue application
const app = createApp({
  setup() {
    // Provide Apollo Client
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),  // Render the root component
});

// Mount the application
app.mount('#app');
