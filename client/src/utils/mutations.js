import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        worlds {
          _id
          title
          cubeArray {
            key
            pos
            texture
          }
        }
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
export const ADD_WORLD = gql`
    mutation addWorld($title: String, $authorId: String, $cubeArray: [CubeInput], $lastUpdated: String) {
        addWorld(title: $title, authorId: $authorId, cubeArray: $cubeArray, lastUpdated: $lastUpdated) {
          title
          cubeArray {
            key
            pos
            texture
          }
          lastUpdated
        }
    }
`;

