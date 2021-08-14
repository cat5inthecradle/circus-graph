const { Apparatus } = require('../apparatuses');
const { Move } = require('./Move');

const resolvers = {
  Query: {
    moves: (parent, args) => {
      const filter = args?.filter?.toLowerCase();
      if (!filter) {
        return Move.all();
      }
      // eslint-disable-next-line arrow-body-style
      return Move.all().filter((move) => {
        return move.name?.toLowerCase().includes(filter)
            || move.aliases?.some((alias) => alias.toLowerCase().includes(filter));
      });
    },
  },
  Move: {
    apparatuses(parent) {
      return Apparatus.getWhereNameIn(parent.apparatuses);
    },
  },
};

module.exports = {
  resolvers,
};
