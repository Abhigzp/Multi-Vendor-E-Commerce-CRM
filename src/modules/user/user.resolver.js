import { registerUser, loginUser } from "./user.service.js";

export const userResolver = {
  Query: {
    me: (_, __, { user }) => {
      if (!user) throw new Error("Unauthorized");
      return user;
    },
  },

  Mutation: {
    register: (_, { input }) => registerUser(input),
    login: (_, { email, password }) => loginUser(email, password),
  },
};