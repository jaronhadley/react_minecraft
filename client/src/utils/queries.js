import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      
    }
  }
`;
export const QUERY_WORLDS = gql`
  query getWorlds {
    worlds {
      _id
      worldText
      worldAuthor
      createdAt
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      worlds {
        _id
        worldText
        worldAuthor
        createdAt
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