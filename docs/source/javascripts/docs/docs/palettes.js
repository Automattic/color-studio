const uniqBy = require('lodash/uniqBy')
const versionLowerThan = require('semver/functions/lt')
const satisfies = require('semver/functions/satisfies')
const extend = require('../../../../../utilities/extend')
const determineContrast = require('./contrast')

module.exports = formatPalettes([
  require('../../../../../dist/colors.meta.json'),
  require('../../../../../dist-archive/colors.meta-2.4.0.json'),
  require('../../../../../dist-archive/colors.meta-2.3.1.json'),
  require('../../../../../dist-archive/colors.meta-2.2.1.json'),
  require('../../../../../dist-archive/colors.meta-2.1.0.json'),
  require('../../../../../dist-archive/colors.meta-2.0.1.json'),
  require('../../../../../dist-archive/colors.meta-1.0.6.json'),
])

function formatPalettes(paletteArray) {
  const palettes = paletteArray.map((palette, index) => {
    if (index === 0) {
      return formatMostRecentPalette(palette)
    }

    const isLegacy = versionLowerThan(palette.version, '2.0.0')
    const format = isLegacy ? formatDeprecatedPaletteVersion1 : formatDeprecatedPalette
    return format(palette)
  })

  return uniqBy(palettes, 'version')
}

function formatMostRecentPalette(palette) {
  return extend(palette, formatDisplayProperties(palette), {
    label: 'Most Recent',
    colors: palette.colors.map(colorArray => formatColorArray(colorArray, palette.version)),
  })
}

function formatDeprecatedPalette(palette) {
  return extend(formatMostRecentPalette(palette), {
    label: 'Deprecated',
  })
}

function formatDeprecatedPaletteVersion1(palette) {
  return extend(palette, formatDisplayProperties(palette), {
    label: 'Deprecated',
    colors: palette.colors.map(colorArray => formatColorArray(colorArray, palette.version, 500).concat(createEmptyColor())),
  })
}

function formatColorArray(colorArray, paletteVersion, featuredShadeIndex = 50) {
  const defaultShadeIndex = determineDefaultColorIndex(colorArray)

  return stripUtilityColors(colorArray).map(colorObject => {
    const meta = extend(colorObject._meta, formatColorProperties(colorObject, colorArray, defaultShadeIndex, featuredShadeIndex, paletteVersion))
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
    downloadLink: `https://github.com/Automattic/color-studio/tree/${version}/dist`,
  }
}

function stripUtilityColors(colorArray) {
  return colorArray.filter(colorObject => {
    return !colorObject._meta.special && !colorObject._meta.alias
  })
}

function formatColorProperties(colorObject, colorArray, defaultShadeIndex, featuredShadeIndex, paletteVersion) {
  const { index } = colorObject._meta
  return {
    contrast: determineContrast(colorObject, colorArray),
    isDefaultIndex: index === defaultShadeIndex,
    isDeprecated: isColorDeprecated(colorObject, paletteVersion),
    isFeaturedIndex: index === featuredShadeIndex,
  }
}

function isColorDeprecated(colorObject, paletteVersion) {
  return Boolean(colorObject._meta.baseName === 'WordPress Blue' && satisfies(paletteVersion, '>=2.4.0 <2.6.1'))
}

function createEmptyColor() {
  return {
    _empty: true,
  }
}
