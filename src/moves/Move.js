const { moves } = require('./data');

class Move {
  static all() {
    return moves;
  }

  static getByApparatusName(name) {
    return moves.filter((move) => move.apparatuses.includes(name));
  }
}

module.exports = {
  Move,
};
