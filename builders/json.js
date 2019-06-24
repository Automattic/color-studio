const chroma = require('chroma-js')

const BASE_COLORS = require('../data/color-definitions.json')
const PACKAGE = require('../package.json')

const generateShades = require('../utilities/generate-shades')

const paletteColors = BASE_COLORS.map(colorObject => {
  const shades = generateShades(colorObject.specs)
  return formatShades(colorObject, shades)
})

const specialColors = ['White', 'Black'].map(color => {
  return {
    name: color,
    value: chroma(color).hex(),
    _meta: {
      special: true
    }
  }
})

module.exports = {
  version: PACKAGE.version,
  colors: [specialColors].concat(paletteColors)
}

function formatShades(baseColorObject, shades) {
  const result = []

  shades.forEach(colorObject => {
    result.push({
      name: `${baseColorObject.name} ${colorObject.index}`,
      value: colorObject.value,
      _meta: {
        baseName: baseColorObject.name,
        index: colorObject.index
      }
    })
  })

  return result
}
