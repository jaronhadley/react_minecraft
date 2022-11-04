const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    worlds: [World]!
  }

  type Auth {
  token: ID!
  user: User
  }

  type Cube {
    key: String
    pos: [Int]
    texture: String
  }

  input CubeInput {
    key: String
    pos: [Int]
    texture: String
  }

  type World {
    _id: ID
    title: String
    cubeArray: [Cube]
    lastUpdated: String
    creationDate: String
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    world: World
    worlds: World
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWorld(title: String, cubeArray: [CubeInput]): World
  }
`;

module.exports = typeDefs