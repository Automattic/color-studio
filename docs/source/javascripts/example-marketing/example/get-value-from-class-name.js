const toKebabCase = require('lodash/kebabCase')
const transform = require('lodash/transform')
const PALETTE = require('../../../../../dist/colors.json')

const PALETTE_CLASS_NAMES = transform(PALETTE.colors, (result, value, key) => {
  result[toClassName(key)] = value
})

module.exports = className => {
  return PALETTE_CLASS_NAMES[className]
}

function toClassName(name) {
  return `color-${toKebabCase(name.toLowerCase())}`
}
