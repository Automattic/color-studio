const BASE_COLORS = require('../data/base-colors')
const PACKAGE = require('../package.json')

const createPrimaryShades = require('../utilities/create-primary-shades')
const createSecondaryShades = require('../utilities/create-secondary-shades')
const createBrandShades = require('../utilities/create-brand-shades')

const paletteColors = BASE_COLORS.map(colorObject => {
  let shades = []

  if (colorObject.formula === 'primary') {
    shades = createPrimaryShades(colorObject.value)
  } else if (colorObject.formula === 'secondary') {
    shades = createSecondaryShades(colorObject.value)
  } else if (colorObject.formula === 'brand') {
    shades = createBrandShades(colorObject.value)
  } else {
    throw new Error('Unknown formula')
  }

  return formatShades(colorObject, shades)
})

console.log('<?xml version="1.0" encoding="utf-8"?>')
console.log('\n<resources')
console.log('    xmlns:tools="http://schemas.android.com/tools"')
console.log('    tools:ignore="UnusedResources">')
console.log('\n    <!-- STUDIO v' + PACKAGE.version + '-->')
print(paletteColors)
console.log('\n</resources>')

function formatShades(baseColorObject, shades) {
  const result = []

  shades.forEach(colorObject => {
    result.push(
      '    <color name="' +
      `${baseColorObject.name} ${colorObject.index}`.toLowerCase().split(' ').join('_') +
      '">' +
      colorObject.value +
      '</color>'
    )
  })

  return result
}

function print(data) {
  const sortedData = data.sort()

  sortedData.forEach(group => {
    group.forEach(item => {
      console.log(item.toString())
    })
  })
}
