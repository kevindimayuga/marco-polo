import { gql } from '@apollo/client';

export const CREATE_LOSTITMES = gql`
    mutation createLostItems($name: String!, $description: String!, $location: String!, $date: String!, $image: String!) {
        createLostItems(name: $name, description: $description, location: $location, date: $date, image: $image) {
            _id
            name
            description
            location
            date
            image
        }
    }
`;

export const CREATE_FOUNDITEMS = gql`
    mutation createFoundItems($name: String!, $description: String!, $location: String!, $date: String!, $image: String!) {
        createFoundItems(name: $name, description: $description, location: $location, date: $date, image: $image) {
            _id
            name
            description
            location
            date
            image
        }
    }
`;      


