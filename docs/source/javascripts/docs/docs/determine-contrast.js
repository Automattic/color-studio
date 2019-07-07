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
  const isBrighter = !isAccessibleContrast(backgroundColor, COLOR_WHITE) && contastBlack > contastWhite

  return {
    black: contastBlack,
    white: contastWhite,
    displayColor: isBrighter ?
      determineDisplayColor(backgroundColor, textColors, COLOR_BLACK) :
      determineDisplayColor(backgroundColor, reverse(textColors), COLOR_WHITE)
  }
}

function determineDisplayColor(backgroundColor, textColors, fallbackColor) {
  for (const textColor of textColors) {
    if (isAccessibleContrast(backgroundColor, textColor)) {
      return textColor
    }
  }

  return fallbackColor
}

function isAccessibleContrast(color1, color2) {
  return contrast(color1, color2) >= 4.5
}
