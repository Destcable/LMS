import { useQuery } from "@apollo/client";
import { GET_TOPIC_THEME_BY_ID } from "./gql/queryTopicThemeById";

const useQueryTopicThemeById = (id) => { 
    const {data, loading} = useQuery(GET_TOPIC_THEME_BY_ID, { 
        variables: { id }
    });

    return {
        data: data ? data.topicThemeById : null,
        loading
    };

};

export default useQueryTopicThemeById;