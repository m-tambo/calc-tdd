'use strict'

const { assert: { isNumber, equal }} = require('chai')
const { multiply } = require('../lib/multiply.js')

describe('multiply', () => {
  it('should return a number', () => {
    isNumber(multiply())
  });

  it('should return the product of two numbers', () => {
    equal(multiply(10, 2), 20)
  });

})
