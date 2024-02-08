import { useQuery } from "@apollo/client";
import { GET_TOPIC_HEADER } from "./gql/queryTopicHeader"

const useQueryTopicHeader = (topicId) => { 
    const {data, loading} = useQuery(GET_TOPIC_HEADER, { 
        variables: { topicId: 3167}
    });

    return {
        data: data ? data.topicHeader : null, 
        loading
    };
};

export default useQueryTopicHeader;