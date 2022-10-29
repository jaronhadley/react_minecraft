const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    saves: [Save]!
  }

  type Auth {
  token: ID!
  user: User
  }

  type Save {
    _id: ID
    cubeArray: [Int]
    lastUpdated: String
    creationDate: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    save: Save
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSave
  }
`;

module.exports = typeDefs