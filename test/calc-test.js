'use strict'

const { assert: {isObject, isFunction} } = require('chai')
const calc = require('../lib/calculator.js')

describe('calc', () => {
  it('should export an object', () => {
    isObject(calc)
  });

  it('should have access to divide module', () => {
    isFunction(divide)
  });

  it('should have access to mutiply module', () => {
    isFunction(multiply)
  });

  it('should have access to add module', () => {
    isFunction(add)
  });

  it('should have access to subtract module', () => {
    isFunction(subtract)
  });

})
