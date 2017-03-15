'use strict'

const { argv: [,, ...args] } = process
// console.log('input:', args)
const output = require('./calculator.js')(args[0], args[2], args[1])

console.log('output:', output)
