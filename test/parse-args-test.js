'use strict'

const { assert: {equal} } = require('chai')
const { parseArgs } = require('../lib/parse-args')

describe('parseArgs', () => {
  it('should export an array with two elements', () => {
    equal(parseArgs.length, 2);
  })
})
