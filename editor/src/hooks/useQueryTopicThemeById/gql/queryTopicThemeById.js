import { gql } from '@apollo/client';

export const GET_TOPIC_THEME_BY_ID = gql`
    query Query($id: Int!) {
        topicThemeById(id: $id) {
            id
            title
            description
            topicId
        }
    }
`;