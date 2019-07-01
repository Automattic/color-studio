const SUPPORTED_NAMED_COLORS = {
  black: '#000',
  white: '#fff'
}

module.exports = value => {
  const colorValue = String(value).trim().toLowerCase()
  const supportedNameValue = SUPPORTED_NAMED_COLORS[colorValue]

  if (supportedNameValue) {
    return supportedNameValue
  }

  if (!isSupportedHexValue(colorValue)) {
    throw new Error(colorValue + ' Unsupported color value')
  }

  if (isShortHexValue(colorValue)) {
    return colorValue
  }

  return shortenHexValue(colorValue)
}

function isSupportedHexValue(value) {
  return [4, 5, 7, 9].includes(value.length) && /#[0-9a-f]+$/.test(value)
}

function isShortHexValue(value) {
  return [4, 5].includes(value.length)
}

function shortenHexValue(value) {
  const positions = [0, 1, 3, 5]
  const c = value.split('')

  if (c[1] === c[2] && c[3] === c[4] && c[5] === c[6]) {
    if (!c[7]) {
      return assembleString(c, positions)
    }

    if (c[7] === c[8]) {
      positions.push(7)
      return assembleString(c, positions)
    }
  }

  return value
}

function assembleString(characterArray, positions) {
  return positions.map(i => characterArray[i]).join('')
}
