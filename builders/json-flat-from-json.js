const toNamedColorCollection = require('../utilities/to-named-color-collection')

const PALETTE_DATA = require('./json')

const PALETTE_FLAT_DATA = Object.assign({}, PALETTE_DATA, {
  colors: toNamedColorCollection(PALETTE_DATA.colors)
})

print(PALETTE_FLAT_DATA)

function print(data) {
  console.log(JSON.stringify(data, null, 2))
}
