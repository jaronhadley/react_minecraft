const { gql } = require('apollo-server-express');

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_SAVE = gql`
    mutation addSave($title: String!, $cubeArray: [Int]!) {
        addSave(title: $title, cubeArray: $cubeArray) {
            id
            title
            cubeArray
        }
    }
`;