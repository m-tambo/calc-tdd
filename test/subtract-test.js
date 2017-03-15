'use strict'

const { assert: { isNumber, equal }} = require('chai')
const { subtract } = require('../lib/subtract.js')

describe('subtract', () => {
  it('should return a number', () => {
    isNumber(subtract())
  });

  it('should return the difference of two numbers', () => {
    equal(subtract(10, 2), 8)
  });

})
