const print = require('../utilities/print')
const toNamedStyledDictionary = require('../utilities/to-named-styled-dictionary')

const PALETTE_DATA = require('./json')

print({
  color: {
    studio: toNamedStyledDictionary(PALETTE_DATA.colors)
  }
})
