const typeDefs = `
    type Query {
        getSingleUser(id: ID!): User
        getUsers: [User]
        getSingleItem(id: ID!): Item
        getItems(category: String): [Item]
    }

    type User {
        _id: ID!
        name: String!
        username: String!
        email: String!
        foundItems: [Item]
    }

    type Item {
        _id: ID!
        name: String!
        description: String
        category: String!
        location: String!
    }

    type Mutation {
        addUser(name: String!, username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addFoundItem(input: ItemInput!): Item
        removeItem(id: ID!): Item
    }

    input ItemInput {
        name: String!
        description: String
        category: String!
        location: String!
    }

    type Auth {
        token: ID!
        user: User
    }
`;


module.exports = typeDefs;