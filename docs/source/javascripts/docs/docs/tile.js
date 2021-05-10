const compact = require('lodash/compact')
const floor = require('lodash/floor')
const toFormattedHexValue = require('../../../../../utilities/to-formatted-hex-value')

const COLOR_BLACK = 'black'
const COLOR_WHITE = 'white'

module.exports = colorObject => {
  if (colorObject._empty) {
    return renderEmptyTile()
  }

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

function renderEmptyTile() {
  return '<div class="tile tile--empty"></div>'
}

function getTileElementAttributes(colorObject) {
  const { value } = colorObject
  const { contrast, isDeprecated, isFeaturedIndex } = colorObject._meta

  const classAttribute = compact([
    'tile',
    isFeaturedIndex && 'tile--featured',
    isDeprecated && 'tile--deprecated',
    'text-center'
  ]).join(' ')

  const styleAttribute = `background: ${value}; color: ${contrast.displayColor}`
  const otherAttributes = isDeprecated ? 'title="Deprecated"' : ''

  return `class="${classAttribute}" style="${styleAttribute}" data-color="${value}" ${otherAttributes}`.trim()
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
  return colorObject.value
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
