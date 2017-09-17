/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
const nock = require('nock');
const Spreadsheet = require('../src/models/Spreadsheet');
const Sheet = require('../src/models/Sheet');
const data = require('../src/mockdata');

describe('Spreadsheet model', () => {
  const spreadsheet = new Spreadsheet('1UcfQsQGTAAtjvyxv948z3hf0qiUnMNZF90-GcD7MF9g');
  const sheet1 = new Sheet(data.SHEET1_DATA);
  const sheet2 = new Sheet(data.SHEET2_DATA);

  it('should work', () => {
    expect(true).to.be.ok;
  });

  it('accepts spreadsheetId as a passed in argument', () => {
    console.log(spreadsheet.sheets == [sheet1, sheet2]);
    console.log([sheet1, sheet2].length);
    console.log(Object.keys(spreadsheet.sheets[0]), Object.keys(sheet1));
    console.log(spreadsheet.sheets[0].range, sheet1.range);
    expect(spreadsheet.sheets).to.equal([sheet1, sheet2]);
  });
});
