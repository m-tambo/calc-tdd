'use strict'


const { argv: [,, ...args] } = process
const { output } = require('./calculator.js')(args[0], args[2], args[1])

console.log(output)
