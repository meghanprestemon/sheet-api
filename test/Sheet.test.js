/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
// const nock = require('nock');
const Sheet = require('../src/models/Sheet');
const data = require('../src/mockdata');

describe('Sheet model', () => {
  const sheet = new Sheet(data.SHEET1_DATA);

  it('should work', () => {
    expect(true).to.be.ok;
  });

  it('should fetch the sheet range', () => {
    expect(sheet.range).to.equal('Sheet1!A1:Z1000');
  });

  it('should fetch the majorDimension of the sheet', () => {
    expect(sheet.majorDimension).to.equal('ROWS');
  });

  it('should fetch the sheet values', () => {
    expect(sheet.values).to.equal(data.SHEET1_DATA.values);
  });
});
