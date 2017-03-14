const { assert: {isNumber, isFunction, isNotNaN, equal} } = require('chai')
const add = require('../lib/add')

describe('add', () => {
  it('should return a number', () => {
    let num = add()
    console.log(num)
    isNotNaN(add(1, "2"))
  });

  it('is a function', () => {
    isFunction(add)
  });

  it('should return the sum of two numbers', () => {
    equal(add(2, 2), 4)
  })

  // it('should accept only numbers as arguments', () => {
  //   isNumber('x', 'y')
  // })
})
