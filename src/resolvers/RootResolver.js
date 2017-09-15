const User = require('../models/User');
const Sheets = require('../models/Sheets');

const root = {
  user(userName) {
    return new User(userName);
  },

  sheets({ userName, sheetName }) {
    return new Sheets(userName, sheetName);
  },
};

module.exports = root;
