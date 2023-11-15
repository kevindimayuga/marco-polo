import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($name: String!, $login: String!, $email: String!, $password: String!) {
        addUser(name: $name, login: $login, email: $email) {
            token
            user {
                _id
                name
                login
                email              
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email) {
                token
                user {
                    _id
                    email
                }
            }
        }
`;

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

export const ADD_LOST_ITEM = gql`
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





     


