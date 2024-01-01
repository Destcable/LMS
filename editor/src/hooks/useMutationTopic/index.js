import { useMutation } from "@apollo/client";
import { CREATE_TOPIC } from "./gql/mutationTopic"

function useMutationTopics() {  
    const {data, loading} = useMutation(CREATE_TOPIC, {
        variables: { 
            name: "ЦОК 125"
        }
    });

    return {
        data: data ? data.topics : null, 
        loading
    };
};

export default useMutationTopics;