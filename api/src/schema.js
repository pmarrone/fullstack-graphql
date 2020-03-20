const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: String!
    username: String!
  }

  type Pet {
    id: String!
    img: String
    createdAt: String!
    name: String
    type: String
  }

  type Query {
    user(id: String): User
    pet(id: String): Pet
  }
`;

module.exports = typeDefs;
