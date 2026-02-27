import { gql } from "graphql-tag";

export const productTypeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    stock: Int!
    category: String
    vendor: User
  }

  input ProductInput {
    name: String!
    description: String
    price: Float!
    stock: Int
    category: String
  }

  extend type Query {
    products(page: Int, limit: Int, search: String): [Product]
  }

  extend type Mutation {
    createProduct(input: ProductInput!): Product
  }
`;