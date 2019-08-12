const extend = require('../utilities/extend')
const print = require('../utilities/print')
const toNamedColorCollection = require('../utilities/to-named-color-collection')

const PALETTE_DATA = require('./json')

const PALETTE_FLAT_DATA = extend(PALETTE_DATA, {
  colors: toNamedColorCollection(PALETTE_DATA.colors)
})

print(PALETTE_FLAT_DATA)
