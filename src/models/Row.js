const Cell = require('./Cell');

class Row {
  constructor(row) {
    this.row = row;
  }
  get cells() {
    return this.row.map(cell => new Cell(cell));
  }
}

module.exports = Row;
