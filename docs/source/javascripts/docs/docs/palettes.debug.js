const extend = require('../../../../../utilities/extend')
const determineContrast = require('./contrast')

module.exports = [
  formatDevelopmentPalette(require('../../../../../dist/colors.meta.debug.json'))
]

function formatDevelopmentPalette(palette) {
  return extend(palette, formatDisplayProperties(palette), {
    label: 'Development',
    colors: palette.colors.map(colorArray => formatColorArray(colorArray))
  })
}

function formatColorArray(colorArray, featuredShadeIndex = 50) {
  const defaultShadeIndex = determineDefaultColorIndex(colorArray)

  return stripUtilityColors(colorArray).map(colorObject => {
    const meta = extend(colorObject._meta, formatColorProperties(colorObject, colorArray, defaultShadeIndex, featuredShadeIndex))
    return extend(colorObject, { _meta: meta })
  })
}

function determineDefaultColorIndex(colorArray) {
  const colorObject = colorArray.find(colorObject => colorObject._meta.alias)
  return colorObject ? colorObject._meta.index : -1
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

function formatColorProperties(colorObject, colorArray, defaultShadeIndex, featuredShadeIndex) {
  const { index } = colorObject._meta
  return {
    contrast: determineContrast(colorObject, colorArray),
    isDefaultIndex: index === defaultShadeIndex,
    isFeaturedIndex: index === featuredShadeIndex
  }
}
