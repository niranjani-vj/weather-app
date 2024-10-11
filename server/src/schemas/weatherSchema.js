const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Weather {
    city: String
    date: String
    temperature: Float
    description: String
  }
  type Query {
    getWeather(city: String!): Weather
    getHistoricalWeather(city: String!, from: String!, to: String!): [Weather]
  }
`;

module.exports = typeDefs;
