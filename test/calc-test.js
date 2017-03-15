'use strict'

const { assert: {isDefined, equal, isNumber} } = require('chai')
const calc = require('../lib/calculator.js')

describe('calc', () => {
  it('should return a number', () => {
    isNumber(calc(1,2,'+'))
  })

  it('should use the add function if the operator is "+"', () => {
    equal(calc())
  })
})
