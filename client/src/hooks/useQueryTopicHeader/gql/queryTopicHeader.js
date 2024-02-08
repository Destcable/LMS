import { gql } from '@apollo/client';

export const GET_TOPIC_HEADER = gql`
    query TopicHeader($topicId: Int!) {
        topicHeader(topicId: $topicId) {
            id
            settings
            topicId
            topic {
                id
                name
            }
        }
    }
`;