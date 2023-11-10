import { gql } from '@apollo/client';

export const GET_LOST_ITEMS = gql`
    mutation createLostItems($name: String!, $login: String!, $description: String!, $location: String!, $date: String!, $image: String!, $removeItem: Boolean!) {
        createLostItems(name: $name, login: $login, description: $description, location: $location, date: $date, image: $image, removeItem: $removeItem) {
            _id
            name
            login
            description
            location
            date
            image
            removeItem
        }
    }
`;
     


