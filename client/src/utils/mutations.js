import { gql } from '@apollo/client';

export const CREATE_LOSTITEMS = gql`
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

export const CREATE_FOUNDITEMS = gql`
    mutation createFoundItems($name: String!, $login: String!, $description: String!, $location: String!, $date: String!, $image: String!, $removeItem: Boolean!) {
        createFoundItems(name: $name, login: $login, description: $description, location: $location, date: $date, image: $image, removeItem: $removeItem) {
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


