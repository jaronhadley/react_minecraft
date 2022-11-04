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
      title
      author
      cubeArray
      lastUpdated
      creationDate
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
        title
        cubeArray {
          key
          pos
          texture
        }
        lastUpdated
        creationDate
      }
    }
  }
`;
export const QUERY_WORLD = gql`
    query getWorld($worldID: ID) {
        world(_id: $worldID) {
            title
            author
            cubeArray
            lastUpdated
            creationDate
        }
    }
`;