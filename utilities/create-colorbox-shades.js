const colorbox = require('colorbox')

module.exports = specs => {
  const palette = colorbox({ specs }).map(colorObject => {
    const arrayIndex = colorObject.label

    return {
      value: colorObject.hex,
      index: arrayIndex <= 1 ? (5 * arrayIndex) : (10 * (arrayIndex - 1))
    }
  })

  return palette
}
