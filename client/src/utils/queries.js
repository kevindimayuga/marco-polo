import { gql } from '@apollo/client';

export const GET_LOST_ITEMS = gql`
    query getAllItems {
        getAllItems {
            _id
            name
            description
            location
            date
            image
        }
    }   
`;

