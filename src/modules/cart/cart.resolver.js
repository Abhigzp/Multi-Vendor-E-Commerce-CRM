import { addToCart, getCart } from "./cart.service.js";

export const cartResolvers = {
  Query: {
    myCart: (_, __, { user }) => {
      if (!user) throw new Error("Unauthorized");
      return getCart(user._id.toString());
    }
  },
  Mutation: {
    addToCart: (_, { productId, quantity }, { user }) => {
      if (!user) throw new Error("Unauthorized");
      return addToCart(user._id.toString(), productId, quantity);
    }
  }
};