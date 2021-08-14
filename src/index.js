const { ApolloServer, gql } = require('apollo-server');
const moves = require('./moves');
const apparatuses = require('./apparatuses');

const typeDef = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [
    typeDef,
    moves.typeDef,
    apparatuses.typeDef,
  ],
  resolvers: [
    moves.resolvers,
    apparatuses.resolvers,
  ],
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`);
});
