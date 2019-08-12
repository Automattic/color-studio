const chroma = require('chroma-js')
const isNumber = require('lodash/isNumber')
const generateShades = require('../utilities/generate-shades')

const COLOR_DEFINITIONS = require('../data/color-definitions')
const PACKAGE = require('../package.json')

const paletteColors = COLOR_DEFINITIONS.colors.map(color => {
  const shades = generateShades(COLOR_DEFINITIONS.config, color.specs)
  const formattedShades = shades.map(colorObject => {
    return formatShade(color.name, colorObject.index, colorObject.value, {
      _debug: colorObject.properties
    })
  })

  if (isNumber(color.default)) {
    const defaultShade = shades.filter(colorObject => colorObject.index === color.default)[0]
    const alias = formatAliasShade(color.name, defaultShade)
    formattedShades.unshift(alias)
  }

  return formattedShades
})

const specialColors = ['White', 'Black'].map(color => {
  return formatSpecialShade(color, chroma(color).hex())
})

module.exports = {
  version: PACKAGE.version,
  colors: [specialColors].concat(paletteColors)
}

function formatShade(baseName, index, value, _meta = {}) {
  const shade = {
    name: baseName,
    value,
    _meta
  }

  if (isNumber(index)) {
    shade.name = `${baseName} ${index}`
    shade._meta = Object.assign(shade._meta, {
      baseName,
      index
    })
  }

  return shade
}

function formatSpecialShade(baseName, value) {
  return formatShade(baseName, false, value, {
    special: true
  })
}

function formatAliasShade(baseName, colorObject) {
  const shade = formatShade(baseName, colorObject.index, colorObject.value, {
    alias: true
  })

  shade.name = baseName
  return shade
}
