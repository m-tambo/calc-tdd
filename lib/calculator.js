'use strict'


const { add } = require('./add.js')
const { subtract } = require('./subtract.js')
const { divide } = require('./divide.js')
const { multiply } = require('./multiply.js')
// const { num1, num2 } = require('./parse-args.js')

const calc = (x, y, op) => {
  let num1 = Number(x)
  let num2 = Number(y)

  if (op === '+') {
    return add(num1, num2)
  } else
  if (op === '-') {
    return subtract(num1, num2)
  } else
  if (op === '/') {
    return divide(num1, num2)
  } else
  if (op === 'x') {
    return multiply(num1, num2)
  } else {
    console.log('operation cannot be performed')
  }


}


module.exports = calc
