const { AuthenticationError } = require('apollo-server-express');
const { User, Save } = require('../models');
const { signToken } = require('../utils/auth');

const resolves = {
    Query: {
        users: async () => {
            return User.find().populate('saves');
          },
        user: async (parent, { username }) => {
        return User.findOne({ username }).populate('saves');
        },
        me: async (parent, context) => {
        if (context.user) {
            return User.findOne({ _id: context.user._id }).populate('saves');
        }
        throw new AuthenticationError('You need to be logged in!');
        },
        save: async(parent, context) => {
            return Save.findOne({_id: context._id})
        }
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect email or password');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect email or password');
            }

            const token = signToken(user);

            return { token, user };
        },
        addSave: async (parent, {title, cubeArray}) => {
            const updateDate = new Date();
            const save = await Save.create({title, cubeArray, updateDate})

            return save
        }
    }
}