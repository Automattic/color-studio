const formatHexValue = require('./format-hex-value')

module.exports = colorArrays => {
  const collection = {}

  colorArrays.forEach(colorArray => {
    colorArray.forEach(colorObject => {
      collection[colorObject.name] = formatHexValue(colorObject.value)
    })
  })

  return collection
}
