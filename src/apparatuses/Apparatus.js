const { apparatuses } = require('./data');

class Apparatus {
  static all() {
    return apparatuses;
  }

  static getWhereNameIn(names) {
    return apparatuses.filter((apparatus) => names.includes(apparatus.name));
  }
}

module.exports = {
  Apparatus,
};
