import { gql } from '@apollo/client';

export const GET_CONFIG_HEADER = gql`
    query { 
        getConfigHeader {
            title, topLineColor, bottomLineColor
        }
    }
`;