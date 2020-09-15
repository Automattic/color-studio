const toFormattedHexValue = require('./to-formatted-hex-value')
const toKebabCase = require('lodash/kebabCase')

module.exports = colorArrays => {
  const collection = {}

  colorArrays.forEach(colorArray => {
    colorArray.forEach(colorObject => {
      // No need to record alias colours...
      if (colorObject._meta && colorObject._meta.alias) {
        return
      }

      const slug = colorObject._meta.baseName ?
        toKebabCase(colorObject._meta.baseName) :
        toKebabCase(colorObject.name)

      if (!collection[slug]) {
        collection[slug]  = {}
      }

      if (colorObject._meta.index !== undefined) {
        collection[slug][colorObject._meta.index] = {
          value: toFormattedHexValue(colorObject.value),
          comment: colorObject.name
        }
      } else {
        collection[slug] = {
          value: toFormattedHexValue(colorObject.value),
          comment: colorObject.name,
          type: 'color'
        }
      }
    })
  })
  return collection
}
