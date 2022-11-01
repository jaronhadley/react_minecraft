const { AuthenticationError } = require('apollo-server-express');
const { User, World } = require('../models');
const { signToken } = require('../utils/auth');

const resolves = {
    Query: {
        users: async () => {
            return User.find().populate('worlds');
          },
        user: async (parent, { username }) => {
        return User.findOne({ username }).populate('worlds');
        },
        me: async (parent, context) => {
        if (context.user) {
            return User.findOne({ _id: context.user._id }).populate('worlds');
        }
        throw new AuthenticationError('You need to be logged in!');
        },
        world: async(parent, context) => {
            return World.findOne({_id: context._id})
        },
        worlds: async(parent, context) => {
            return World.find();
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
        addWorld: async (parent, {title, cubeArray}) => {
            const updateDate = new Date();
            const world = await World.create({title, cubeArray, updateDate})

            return world
        }
    }
}