/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
// const nock = require('nock');
const Spreadsheet = require('../src/models/Spreadsheet');
const Sheet = require('../src/models/Sheet');

describe('Spreadsheet model', () => {
  const spreadsheet = new Spreadsheet('1UcfQsQGTAAtjvyxv948z3hf0qiUnMNZF90-GcD7MF9g');

  it('should work', () => {
    expect(true).to.be.ok;
  });

  it('accepts spreadsheetId as a passed in argument', () => {
    const sheets = spreadsheet.sheets;
    expect(sheets[0]).to.be.an.instanceof(Sheet);
  });
});
