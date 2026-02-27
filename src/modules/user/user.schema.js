import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
  }

  type AuthPayload {
    accessToken: String!
    refreshToken: String!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    register(input: RegisterInput!): User
    login(email: String!, password: String!): AuthPayload
  }
`;