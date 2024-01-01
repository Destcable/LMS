import { useQuery } from "@apollo/client";
import { GET_TOPICS } from "./gql/queryTopics"

function useQueryTopics() {  
    const {data, loading} = useQuery(GET_TOPICS);

    return {
        data: data ? data.topics : null, 
        loading
    };
};

export default useQueryTopics;