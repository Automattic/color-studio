const extend = require('../../../../../utilities/extend')
const determineContrast = require('./contrast')

module.exports = [
  formatMostRecentPalette(require('../../../../../dist/colors.meta.json')),
  formatDeprecatedPalette(require('./palette-archive/2.2.1.json')),
  formatDeprecatedPalette(require('./palette-archive/2.1.0.json')),
  formatDeprecatedPalette(require('./palette-archive/2.0.1.json')),
  formatDeprecatedPaletteVersion1(require('./palette-archive/1.0.6.json'))
]

function formatMostRecentPalette(palette) {
  return extend(palette, formatDisplayProperties(palette), {
    label: 'Most Recent',
    colors: palette.colors.map(colorArray => formatColorArray(colorArray))
  })
}

function formatDeprecatedPalette(palette) {
  return extend(formatMostRecentPalette(palette), {
    label: 'Deprecated'
  })
}

function formatDeprecatedPaletteVersion1(palette) {
  return extend(palette, formatDisplayProperties(palette), {
    label: 'Deprecated',
    colors: palette.colors.map(colorArray => formatColorArray(colorArray, 500).concat(createEmptyColor()))
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
  const colorObject = colorArray.filter(colorObject => colorObject._meta.alias)[0]
  return colorObject ? colorObject._meta.index : -1
}

function formatDisplayProperties(paletteObject) {
  const { version } = paletteObject
  return {
    displayName: `v${version}`,
    downloadLink: `https://github.com/Automattic/color-studio/tree/${version}/dist`
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

function createEmptyColor() {
  return {
    _empty: true
  }
}
