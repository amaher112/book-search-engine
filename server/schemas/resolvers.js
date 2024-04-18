const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (_, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (_, { authors, description, title, bookId, image, link}, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: {authors, description, title, bookId, image, link} } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    removeBook: async (_, { bookId }, context) => {
        if (context.user) {
          return User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: {bookId} } },
            { new: true }
          );
        }
        throw AuthenticationError;
      },
  }
};

module.exports = resolvers;
