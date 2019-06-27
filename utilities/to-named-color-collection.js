const toFormattedHexValue = require('./to-formatted-hex-value')

module.exports = colorArrays => {
  const collection = {}

  colorArrays.forEach(colorArray => {
    colorArray.forEach(colorObject => {
      collection[colorObject.name] = toFormattedHexValue(colorObject.value)
    })
  })

  return collection
}
