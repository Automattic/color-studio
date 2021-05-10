const floor = require('lodash/floor')
const round = require('lodash/round')
const toFormattedHexValue = require('../../../../../utilities/to-formatted-hex-value')

const COLOR_BLACK = 'black'
const COLOR_WHITE = 'white'

module.exports = colorObject => {
  /* eslint-disable indent */
  return [
    `<div ${getTileElementAttributes(colorObject)}>`,
      '<div class="tile__title fw-bold">',
        getName(colorObject),
      '</div>',
      '<div class="tile__meta text-uppercase">',
        getValue(colorObject),
      '</div>',
      '<div class="tile__meta tile__meta--tiny pt-1">',
        getContrastScore(colorObject, COLOR_WHITE, 'W'),
      '</div>',
      '<div class="tile__meta tile__meta--tiny">',
        getContrastScore(colorObject, COLOR_BLACK, 'B'),
      '</div>',
    '</div>'
  ].join('')
  /* eslint-enable indent */
}

function getTileElementAttributes(colorObject) {
  const { value } = colorObject
  const { contrast, isFeaturedIndex } = colorObject._meta

  const classAttribute = `${isFeaturedIndex ? 'tile tile--featured' : 'tile'} text-center`
  const styleAttribute = `background: ${value}; color: ${contrast.displayColor}`

  return `class="${classAttribute}" style="${styleAttribute}" data-color="${value}"`
}

function getName(colorObject) {
  const { index, isDefaultIndex, isFeaturedIndex } = colorObject._meta

  const colorName = isFeaturedIndex ? colorObject.name : (isDefaultIndex ? `(${index})` : index)
  const displayName = String(colorName).replace(/\s+/g, '&nbsp;')

  return isAccessibleContrast(colorObject, COLOR_WHITE) ?
    `<span style="color: ${toFormattedHexValue(COLOR_WHITE)}">${displayName}</span>` :
    displayName
}

function getValue(colorObject) {
  const properties = colorObject._meta._debug
  const values = [
    colorObject.value,
    `H:${round(properties.hue, 2)}`,
    `S:${round(properties.saturation * 100, 2)}`,
    `V:${round(properties.luminosity * 100, 2)}`
  ]

  return values.join('<br>')
}

function getContrastScore(colorObject, contrastColorName, prefix) {
  const ratio = colorObject._meta.contrast[contrastColorName]
  const roundRatio = floor(ratio, 2)
  const score = prefix ? [prefix, roundRatio].join(':') : roundRatio

  return `<span title="${ratio}">${score}</span>`
}

function isAccessibleContrast(colorObject, contrastColorName) {
  return colorObject._meta.contrast[contrastColorName] >= 4.5
}
