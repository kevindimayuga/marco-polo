import { gql } from '@apollo/client';

export const GET_LOST_ITEMS = gql`
    query getItems {
        getItems {
            _id
            name
            description
            location
        }
    }   
`;

