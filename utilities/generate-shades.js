const colorbox = require('colorbox')

module.exports = specs => {
  const properties = Object.assign({}, specs, {
    steps: 12,
    modifier: 1
  })

  const palette = colorbox({ specs: properties }).map(colorObject => {
    const arrayIndex = colorObject.label

    return {
      value: colorObject.hex,
      index: arrayIndex <= 1 ? (5 * arrayIndex) : (10 * (arrayIndex - 1))
    }
  })

  return palette
}
