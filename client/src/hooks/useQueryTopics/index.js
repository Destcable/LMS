import { useLazyQuery } from "@apollo/client";
import { GET_TOPICS } from "./gql/queryTopics"

const useQueryTopics = () => { 
    const {data, loading} = useLazyQuery(GET_TOPICS);

    return {data, loading};
};

export default useQueryTopics;