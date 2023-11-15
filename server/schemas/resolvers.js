const { users, foundItems, lostItems } = require('../models');

const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent, { id }, context) => {
            if (!context.user) {
                const getSingleUser = await users.findOne({ _id: id })
                // .populate('lostItems')
                .populate('foundItems')

                return getSingleUser;
            }
                throw new AuthenticationError('Not logged in');
            },
        getUsers: async (parent, args, context) => {
            if (!context.user) {
                const getUsers = await users.find({})
                // .populate('lostItems')
                .populate('foundItems')

                return getUsers;
            }
                throw new AuthenticationError('Not logged in');
            },
        getSingleItem: async (parent, { id }, context) => {
            if (!context.user) {
                const getSingleItem = await foundItems.findOne({ _id: id })
                // .populate('owner')

                return getSingleItem;
            }
                throw new AuthenticationError('Not logged in');
            },
        getItems: async (parent, args, context) => {
            if (!context.user) {
                // const getItems = await foundItems.find({ category: category })
                const getItems =await foundItems.find({})
                // .populate('owner')

                return getItems;
            }
                throw new AuthenticationError('Not logged in');
            },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await users.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await users.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        // addLostItem: async (parent, args) => {
        //     const item = await lostItems.create(args);
        //     return item;
        // },
        addFoundItem: async (parent, args) => {
            const item = await foundItems.create(args);
            return item;
        },
        removeItem: async (parent, { id }) => {
            return await foundItems.findOneAndDelete({ _id: id });
        },
    }
};

module.exports = resolvers;