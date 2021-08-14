const { gql } = require('apollo-server');

const typeDef = gql`
  type Apparatus {
    name: String!
    moves: [Move]
  }
  extend type Query {
    apparatuses: [Apparatus]
  }
`;

module.exports = {
  typeDef,
};
