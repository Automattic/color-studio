const chroma = require('chroma-js')
const generateShades = require('../utilities/generate-shades')

const COLOR_DEFINITIONS = require('../data/color-definitions')
const PACKAGE = require('../package.json')

const paletteColors = COLOR_DEFINITIONS.colors.map(color => {
  const shades = generateShades(COLOR_DEFINITIONS.config, color.specs)
  return formatShades(color.name, shades)
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

function formatShades(colorName, shades) {
  const result = []

  shades.forEach(colorObject => {
    result.push({
      name: `${colorName} ${colorObject.index}`,
      value: colorObject.value,
      _meta: {
        baseName: colorName,
        index: colorObject.index
      }
    })
  })

  return result
}
