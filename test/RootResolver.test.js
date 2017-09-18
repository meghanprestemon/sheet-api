/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
// require('chai').use(require('sinon-chai'));
// const sinon = require('sinon');
const root = require('../src/resolvers/RootResolver');

describe('RootResolver model', () => {
  it('should have a spreadsheet function', () => {
    expect(root.spreadsheet).to.be.a('function');
  });

  it('should have a sheet function', () => {
    expect(root.sheet).to.be.a('function');
  });
});
