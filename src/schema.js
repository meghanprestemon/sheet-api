const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type User {
    userAvatar: String!
  }

  type Sheets {
    sheets: [Sheet]
  }

  type Sheet {
    sheet: [Rows]
  }

  type Rows {
    rows: [Row]
  }

  type Row {
    row: [Cells]
  }

  type Cells {
    cells: [Cell]
  }

  type Cell {
    cell: String
  }

  type Query {
    user(userName: String!): User
    sheets(userName: String!, sheetName: String): Sheets
  }
`);

module.exports = schema;
