const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # set up types from models

  type User {
    _id: ID
    username: String
    email: String
    password: String
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

  # Query

  # Mutation
`;

module.exports = typeDefs;
