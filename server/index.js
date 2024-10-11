const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('./src/config/database');  // Import database connection
const typeDefs = require('./src/schemas/weatherSchema');  // Import GraphQL schema
const resolvers = require('./src/resolvers/weatherResolvers');  // Import resolvers
const cors = require('cors');

// Set up Apollo Server with Express
async function startApolloServer() {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  // Start the server
  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

// Start the Apollo Server and Express app
startApolloServer();
