import { useMutation } from "@apollo/client";
import { CREATE_TOPIC } from "./gql/mutationTopic";

function useMutationTopic() { 
    const [newTopic] = useMutation(CREATE_TOPIC);
    
    const createTopic = (name) => { 
        newTopic({ 
            variables: { name }
        })
    };

    return { createTopic };  
};

export default useMutationTopic;