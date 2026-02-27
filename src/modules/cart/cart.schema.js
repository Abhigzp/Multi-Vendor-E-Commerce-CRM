import { gql } from "graphql-tag";

export const cartTypeDefs = gql`
  type CartItem {
    productId: ID!
    quantity: Int!
  }

  extend type Query {
    myCart: [CartItem]
  }

  extend type Mutation {
    addToCart(productId: ID!, quantity: Int!): [CartItem]
  }
`;