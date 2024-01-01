import { useMutation } from "@apollo/client";
import { CREATE_TOPIC } from "./gql/mutationTopic";

const useMutationTopic = { 
    create: useMutationCreateTopic
}

function useMutationCreateTopic() {  
    const {data, loading} = useMutation(CREATE_TOPIC, { 
        variables: { 
            name: 'Цок 125'
        }
    });

    return {
        data: data ? data.topics : null, 
        loading
    };
};

export default useMutationTopic;