const BASE_COLORS = require('../data/base-colors')
const PACKAGE = require('../package.json')

const createPrimaryShades = require('../utilities/create-primary-shades')

const paletteColors = BASE_COLORS.map(colorObject => {
  const shades = createPrimaryShades(colorObject.value)
  return formatShades(colorObject, shades)
})

const paletteData = {
  version: PACKAGE.version,
  colors: paletteColors
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
