import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
import { productLoader } from "./loaders/product.loader.js";

export const createApp = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      const user = await authMiddleware(req);
      return {
        user,
        loaders: {
          productLoader: productLoader()
        }
      };
    }
  });

  await server.start();
  server.applyMiddleware({ app });

  return app;
};