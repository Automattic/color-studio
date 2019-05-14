const chroma = require('chroma-js')
const formatHexValue = require('./format-hex-value')

module.exports = colorArrays => {
  const collection = {}

  colorArrays.forEach(colorArray => {
    colorArray.forEach(colorObject => {
      const value = chroma(colorObject.value).hex()
      collection[colorObject.name] = formatHexValue(value)
    })
  })

  return collection
}
