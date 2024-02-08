import { useQuery } from "@apollo/client";
import { GET_TOPIC_THEMES } from "./gql/queryTopicThemes";

const useQueryTopicThemes = (topicId) => { 
    const {data, loading} = useQuery(GET_TOPIC_THEMES, { 
        variables: { topicId }
    });

    return {
        data: data ? data.topicHeader : null, 
        loading
    };
};

export default useQueryTopicThemes;