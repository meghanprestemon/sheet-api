const Row = require('./Row');

class Sheet {
  constructor(sheet) {
    this.sheet = sheet;
    this.range = this.sheet.range;
    this.values = this.sheet.values;
  }
}

module.exports = Sheet;
