const chroma = require('chroma-js')
const isNumber = require('lodash/isNumber')
const generateShades = require('../utilities/generate-shades')
const toFormattedHexValue = require('../utilities/to-formatted-hex-value')
const COLOR_DEFINITIONS = require('../data/color-definitions')
const PACKAGE = require('../package.json')

const createFormattedShades = (color, shades, alias) => {
  const baseName = alias ? color.alias : color.name

  const formattedShades = shades.map(colorObject => {
    const shade =  formatShade(baseName, colorObject.index, colorObject.value, {
      _debug: colorObject.properties,
    })

    shade._meta.baseName = color.name

    if (alias) {
      shade._meta.alias = true
    }

    return shade
  })

  if (isNumber(color.default)) {
    const defaultShade = shades.find(colorObject => colorObject.index === color.default)
    const alias = formatAliasShade(baseName, defaultShade)
    formattedShades.push(alias)
  }

  return formattedShades
}

const paletteColors = COLOR_DEFINITIONS.colors.map(color => {
  const shades = generateShades(COLOR_DEFINITIONS.config, color.specs)
  const formattedShades = createFormattedShades(color, shades, false)

  if (color.alias) {
    const aliasShades = createFormattedShades(color, shades, true)
    return [...formattedShades, ...aliasShades]
  }

  return formattedShades
})

const specialColors = ['White', 'Black'].map(color => {
  return formatSpecialShade(color, chroma(color).hex())
})

module.exports = {
  version: PACKAGE.version,
  colors: [specialColors].concat(paletteColors),
}

function formatShade(baseName, index, value, _meta = {}) {
  const shade = {
    name: baseName,
    value: toFormattedHexValue(value),
    _meta,
  }

  if (isNumber(index)) {
    shade.name = `${baseName} ${index}`
    shade._meta = Object.assign(shade._meta, {
      baseName,
      index,
    })
  }

  return shade
}

function formatSpecialShade(baseName, value) {
  return formatShade(baseName, false, value, {
    special: true,
  })
}

function formatAliasShade(baseName, colorObject) {
  const shade = formatShade(baseName, colorObject.index, colorObject.value, {
    alias: true,
  })

  shade.name = baseName
  return shade
}
