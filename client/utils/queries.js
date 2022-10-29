const { gql } = require('apollo-server-express');

export const QUERY_SAVE = gql`
    query getSave($saveID: ID) {
        save(id: $saveID) {
            name
            cubeArray
            lastUpdated
            creationDate
        }
    }
`;

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