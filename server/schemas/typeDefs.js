const typeDefs = `
    type Query {
        getUser(id: ID!): User
        getUsers: [User]
        getItem(id: ID!): Item
        getItems(category: String): [Item]
    }

    type User {
        _id: ID!
        name: String!
        username: String!
        email: String!
        lostItems: [Item]
        foundItems: [Item]
    }

    type Item {
        _id: ID!
        name: String!
        description: String
        category: String!
        location: String!
        dateLost: String
        dateFound: String
        owner: User
    }

    type Mutation {
        addUser(name: String!, username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addLostItem(input: ItemInput!): Item
        addFoundItem(input: ItemInput!): Item
        removeItem(id: ID!): Item
    }

    input ItemInput {
        name: String!
        description: String
        category: String!
        location: String!
        dateLost: String
        dateFound: String
        ownerID: ID!
    }

    type Auth {
        token: ID!
        user: User
    }
}`


module.exports = typeDefs;