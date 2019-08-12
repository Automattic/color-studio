const clone = require('lodash/cloneDeep')
const print = require('../utilities/print')

const PALETTE_DATA = require('./json')

const PALETTE_FILTERED_DATA = removeDebugData(PALETTE_DATA)

print(PALETTE_FILTERED_DATA)

function removeDebugData(paletteObject) {
  const palette = clone(paletteObject)

  palette.colors.forEach(colorArray => {
    colorArray.forEach(colorObject => {
      if (colorObject._meta) {
        delete colorObject._meta._debug
      }
    })
  })

  return palette
}
