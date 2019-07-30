const toFormattedHexValue = require('./to-formatted-hex-value')

module.exports = (colorArrays, config = {}) => {
  const defaults = {
    excludeAliases: false
  }

  const options = Object.assign(defaults, config)
  const collection = {}

  colorArrays.forEach(colorArray => {
    colorArray.forEach(colorObject => {
      if (options.excludeAliases && colorObject._meta && colorObject._meta.alias) {
        return
      }

      collection[colorObject.name] = toFormattedHexValue(colorObject.value)
    })
  })

  return collection
}
