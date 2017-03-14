const { assert: { isNumber, equal }} = require('chai')
const divide = require('../lib/divide.js')

describe('divide', () => {
  it('should return a number', () => {
    isNumber(divide())
  });

  it('should return the dividend of two numbers', () => {
    equal(divide(10, 2), 5)
  });

})
