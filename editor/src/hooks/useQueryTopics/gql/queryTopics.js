import { gql } from '@apollo/client';

export const GET_TOPICS = gql`
    query { 
        topics{
            id,
            name
        }
    }
`;