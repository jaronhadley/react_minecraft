const { gql } = require('apollo-server-express');

export const QUERY_USER = gql`
    query getUser($userID: ID) {
        user(id: $userID) {
            username
            email
            saves {
                name
                cubeArray
                lastUpdated
                creationDate
            }
        }
    }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      saves {
            title
            cubeArray
            lastUpdated
            creationDate
        }
    }
  }
`;

export const QUERY_SAVE = gql`
    query getSave($saveID: ID) {
        save(id: $saveID) {
            title
            cubeArray
            lastUpdated
            creationDate
        }
    }
`;
