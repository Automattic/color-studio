const chroma = require('chroma-js')

const BASE_COLORS = require('../data/base-colors.json')
const PACKAGE = require('../package.json')

const createColorboxShades = require('../utilities/create-colorbox-shades')
const createPrimaryShades = require('../utilities/create-primary-shades')

const paletteColors = BASE_COLORS.map(colorObject => {
  const shades = 'specs' in colorObject ?
    createColorboxShades(colorObject.specs) :
    createPrimaryShades(colorObject.value)

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

const paletteData = {
  version: PACKAGE.version,
  colors: [specialColors].concat(paletteColors)
}

print(paletteData)

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

function print(data) {
  console.log(JSON.stringify(data, null, 2))
}
