const PALETTE = require('../../../../../dist/colors.meta.debug.json')

const determineContrast = require('./contrast')

module.exports = [
  formatPalette(PALETTE)
]

function formatPalette(palette) {
  return extend(palette, {
    displayName: `v${palette.version} (development)`,
    downloadLink: 'https://github.com/Automattic/color-studio/tree/master/dist',
    colors: palette.colors.map(colorArray => {
      return colorArray
        .filter(colorObject => {
          return !colorObject._meta.special && !colorObject._meta.alias
        })
        .map(colorObject => {
          const meta = extend(colorObject._meta, {
            featured: colorObject._meta.index === 50,
            contrast: determineContrast(colorObject, colorArray)
          })
          return extend(colorObject, { _meta: meta })
        })
    })
  })
}

function extend(target, source) {
  return Object.assign({}, target, source)
}
