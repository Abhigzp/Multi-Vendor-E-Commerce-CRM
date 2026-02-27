import { createProduct, getProducts } from "./product.service.js";

export const productResolvers = {
  Query: {
    products: (_, args) => getProducts(args)
  },
  Mutation: {
    createProduct: (_, { input }, { user }) => {
      if (!user) throw new Error("Unauthorized");
      return createProduct(input, user);
    }
  },
  Product: {
    vendor: (parent, _, { loaders }) =>
      loaders.userLoader.load(parent.vendor.toString())
  }
};