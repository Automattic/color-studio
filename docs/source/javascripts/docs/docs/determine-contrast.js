const { contrast } = require('chroma-js')
const reverse = require('lodash/reverse')

const COLOR_BLACK = 'black'
const COLOR_WHITE = 'white'

module.exports = (colorObject, colorArray) => {
  const backgroundColor = colorObject.value
  const textColors = colorArray
    .map(colorObject => colorObject.value)
    .filter(colorValue => colorValue !== backgroundColor)

  const contastBlack = contrast(backgroundColor, COLOR_BLACK)
  const contastWhite = contrast(backgroundColor, COLOR_WHITE)

  return {
    black: contastBlack,
    white: contastWhite,
    displayColor: contastWhite < contastBlack ?
      determineDisplayColor(backgroundColor, textColors, COLOR_BLACK) :
      determineDisplayColor(backgroundColor, reverse(textColors), COLOR_WHITE)
  }
}

function determineDisplayColor(backgroundColor, textColors, fallbackColor) {
  for (const textColor of textColors) {
    if (contrast(backgroundColor, textColor) >= 4.5) {
      return textColor
    }
  }

  return fallbackColor
}
