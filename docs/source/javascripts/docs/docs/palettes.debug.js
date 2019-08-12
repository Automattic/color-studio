const extend = require('../../../../../utilities/extend')
const determineContrast = require('./contrast')

module.exports = [
  formatDevelopmentPalette(require('../../../../../dist/colors.meta.debug.json'))
]

function formatDevelopmentPalette(palette) {
  return extend(palette, formatDisplayProperties(palette), {
    label: 'Development',
    colors: palette.colors.map(colorArray => formatColorArray(stripUtilityColors(colorArray)))
  })
}

function formatColorArray(colorArray, featuredShadeIndex = 50) {
  return colorArray.map(colorObject => {
    const meta = extend(colorObject._meta, formatColorProperties(colorObject, colorArray, featuredShadeIndex))
    return extend(colorObject, { _meta: meta })
  })
}

function formatDisplayProperties(paletteObject) {
  const { version } = paletteObject
  return {
    displayName: `v${version}`,
    downloadLink: 'https://github.com/Automattic/color-studio/tree/master/dist'
  }
}

function stripUtilityColors(colorArray) {
  return colorArray.filter(colorObject => {
    return !colorObject._meta.special && !colorObject._meta.alias
  })
}

function formatColorProperties(colorObject, colorArray, featuredShadeIndex) {
  return {
    featured: colorObject._meta.index === featuredShadeIndex,
    contrast: determineContrast(colorObject, colorArray)
  }
}
