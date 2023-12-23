import { useLazyQuery } from "@apollo/client";
import { GET_CONFIG_HEADER } from "./gql/queryConfigHeader";

const useQueryConfigHeader = () => {
    const {data, loading} = useLazyQuery(GET_CONFIG_HEADER);
    
    return {data, loading};
};

export default useQueryConfigHeader;