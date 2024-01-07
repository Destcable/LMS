import { gql } from '@apollo/client';

export const CREATE_TOPIC = gql`
    mutation createTopic($name: String!) {
        createTopic(name: $name) {
            id
            name
        }
    }
`;

export const DELETE_TOPIC = gql`
    mutation deleteTopic($id: Int!) {
        deleteTopic(id: $id) {
            id
            name
        }
    }
`;