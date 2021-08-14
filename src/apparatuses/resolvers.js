const { Apparatus } = require('./Apparatus');
const { Move } = require('../moves');

const resolvers = {
  Query: {
    apparatuses: () => Apparatus.all(),
  },
  Apparatus: {
    moves(parent) {
      return Move.getByApparatusName(parent.name);
    },
  },
};

module.exports = {
  resolvers,
};
