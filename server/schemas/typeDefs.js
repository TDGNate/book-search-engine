const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    books: [String]!
  }

  type Book {
    bookId: ID!
    authors: [User]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(name: String!, email: String!, password: String!): Auth

    saveBook(author: String!, description: String!, title: String!, bookId: ID!, image: String!): User

    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;