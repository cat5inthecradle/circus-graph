const { ApolloServer, gql } = require('apollo-server');
const moves = require('.');
const apparatuses = require('../apparatuses');
const { Move } = require('./Move');

const typeDefs = [
  gql`
    type Query
  `,
  moves.typeDef,
  apparatuses.typeDef,
];

describe('moves', () => {
  const fakeData = [
    {
      guid: 'E7FF6711-57A4-4357-A834-9EC230E73196',
      name: 'Meathook',
      apparatuses: [
        'Trapeze',
        'Lyra',
      ],
    },
    {
      guid: 'D282E8D2-442B-4D94-A3CE-F441E814BF42',
      name: 'Owl',
      apparatuses: [
        'Lyra',
      ],
    },
  ];

  const server = new ApolloServer({
    typeDefs,
    resolvers: [moves.resolvers],
  });

  describe('queries', () => {
    describe('all', () => {
      it('returns all moves', async () => {
        // create a test server to test against, using our production typeDefs,
        // resolvers, and dataSources.
        expect(3).toEqual(3);

        Move.all = jest.fn(() => fakeData);

        // run query against the server and snapshot the output
        const res = await server.executeOperation({
          query: gql`
            query Query {
              moves {
                name
              }
            }
          `,
        });

        // Failing because this isn't a good assertion yet.
        expect(res.data).toEqual(fakeData);
      });
    });
  });
});
