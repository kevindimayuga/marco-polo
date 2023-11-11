import { gql } from '@apollo/client';

export const ADD_FOUND_ITEM = gql`
    mutation createLostItems($name: String!, $login: String!, $description: String!, $location: String!, $date: String!, $image: String!, $removeItem: Boolean!) {
        createLostItems(name: $name, login: $login, description: $description, location: $location, date: $date, image: $image, removeItem: $removeItem) {
            _id
            name
            description
            location
            date
            image
        }
    }
`;

export const REMOVE_FOUND_ITEM = gql`
    mutation removeLostItems($name: String!, $login: String!, $description: String!, $location: String!, $date: String!, $image: String!, $removeItem: Boolean!) {
        removeLostItems(name: $name, login: $login, description: $description, location: $location, date: $date, image: $image, removeItem: $removeItem) {
            _id
            name
            description
            location
            date
            image
        }
    }
`;

     


