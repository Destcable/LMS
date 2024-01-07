import { useMutation } from "@apollo/client";
import { CREATE_TOPIC, DELETE_TOPIC } from "./gql/mutationTopic";

function useMutationTopic() { 
    const [newTopic] = useMutation(CREATE_TOPIC);
    const [removeTopic] = useMutation(DELETE_TOPIC);
    
    const createTopic = (name) => { 
        newTopic({ 
            variables: { name }
        })
    };

    const deleteTopic = (id) => { 
        removeTopic({ 
            variables: { id }
        })
    }

    return { createTopic, deleteTopic };
};

export default useMutationTopic;