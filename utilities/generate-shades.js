const generate = require('./color-algorithm/generate')

module.exports = (config, specs) => {
  const properties = Object.assign({}, config, specs)

  const palette = generate({ specs: properties }).map((colorObject, arrayIndex) => {
    return {
      value: colorObject.hex(),
      index: arrayIndex <= 1 ? (5 * arrayIndex) : (10 * (arrayIndex - 1))
    }
  })

  return palette
}
