import { gql } from '@apollo/client';

export const CREATE_TOPIC = gql`
    mutation createTopic($name: String!) {
        createTopic(name: $name) {
            id
            name
        }
    }
`;