'use strict'

module.exports = function (num1, num2) {
  // num1 = num1 === NaN ? Number(num1) : num1
  // num2 = num2 === NaN ? Number(num2) : num2
  let numDiv = Number(num1) / Number(num2)
  return numDiv
}
