/* eslint-env browser */

const round = require('lodash/round')
const toFormattedHexValue = require('../../../../../utilities/to-formatted-hex-value')

const COLOR_BLACK = 'black'
const COLOR_WHITE = 'white'

module.exports = colorObject => {
  /* eslint-disable indent */
  return [
    `<div ${getTileElementAttributes(colorObject)}>`,
      '<div class="tile__title font-weight-bold">',
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

  const classAttribute = `${colorObject._meta.featured ? 'tile tile--featured' : 'tile'} text-center`
  const styleAttribute = `background: ${value}; color: ${colorObject._meta.contrast.displayColor}`

  return `class="${classAttribute}" style="${styleAttribute}" data-color="${value}"`
}

function getName(colorObject) {
  const colorName = colorObject._meta.featured ? colorObject.name : colorObject._meta.index
  const displayName = String(colorName).replace(/\s+/g, '&nbsp;')

  return isAA(colorObject, COLOR_WHITE) ?
    `<span style="color: ${toFormattedHexValue(COLOR_WHITE)}">${displayName}</span>` :
    displayName
}

function getValue(colorObject) {
  return colorObject.value
}

function getContrastScore(colorObject, contrastColorName, prefix) {
  const ratioAAA = isAAA(colorObject, contrastColorName)
  const ratioAA = isAA(colorObject, contrastColorName)
  const ratio = colorObject._meta.contrast[contrastColorName]
  let score = round(ratio, 2)

  if (ratioAAA) {
    score = 'AAA'
  } else if (ratioAA) {
    score = 'AA'
  }

  if (prefix) {
    score = [prefix, score].join(':')
  }

  return `<span title="${ratio}">${score}</span>`
}

function isAA(colorObject, contrastColorName) {
  return colorObject._meta.contrast[contrastColorName] >= 4.5
}

function isAAA(colorObject, contrastColorName) {
  return colorObject._meta.contrast[contrastColorName] >= 7.5
}
