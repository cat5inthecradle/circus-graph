const { gql } = require('apollo-server');

const typeDef = gql`
  type Move {
    guid: ID!
    name: String!
    aliases: [String]
    apparatuses: [Apparatus]
  }
  extend type Query {
    moves(filter: String): [Move]
  }
`;

module.exports = {
  typeDef,
};
