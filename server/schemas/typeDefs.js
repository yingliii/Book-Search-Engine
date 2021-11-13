const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # set up types from models

  type User {
    _id: ID!
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    _id: ID!
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  # Auth
  type Auth {
    token: ID!
    user: User
  }

  # Query
  type Query {
    me: User
  }

  input SavedBookInput {
    authors: [String]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
  }

  # Mutation
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth

    # COMMENT: see clients/utils/mutations for saveBook
    saveBook(book: SavedBookInput!): User

    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
