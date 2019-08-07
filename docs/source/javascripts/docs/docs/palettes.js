const PALETTE_OLD = require('@automattic/color-studio') // v1
const PALETTE_NEW = require('../../../../../dist/colors.meta.json')

const determineContrast = require('./contrast')

module.exports = [
  formatNewPalette(PALETTE_NEW),
  formatOldPalette(PALETTE_OLD)
]

function formatNewPalette(palette) {
  return extend(palette, {
    displayName: `v${palette.version}`,
    downloadLink: `https://github.com/Automattic/color-studio/tree/${palette.version}/dist`,
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

function formatOldPalette(palette) {
  return extend(palette, {
    displayName: `v${palette.version} (deprecated)`,
    downloadLink: `https://github.com/Automattic/color-studio/tree/${palette.version}/dist`,
    colors: palette.colors.map(colorArray => {
      return colorArray.map(colorObject => {
        const meta = {
          baseName: colorObject._meta.baseName,
          index: colorObject._meta.shadeIndex,
          featured: colorObject._meta.shadeIndex === 500,
          contrast: determineContrast(colorObject, colorArray)
        }
        return extend(colorObject, { _meta: meta })
      })
    })
  })
}

function extend(target, source) {
  return Object.assign({}, target, source)
}
