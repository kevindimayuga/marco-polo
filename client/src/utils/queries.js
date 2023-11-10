import { gql } from '@apollo/client';

export const GET_ALLITEMS = gql`
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

export const GET_LOSTITEMS = gql`
    query getLostItems {
        getLostItems {
            _id
            name
            description
            location
            date
            image
        }
    }
`;
