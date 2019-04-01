const chroma = require('chroma-js')
const drop = require('lodash/drop')
const last = require('lodash/last')

module.exports = baseColor => {
  const brightShades = createBrightShades(baseColor)
  const darkShades = createDarkShades(last(brightShades))

  const palette = mergePaletteShades(brightShades, darkShades).map((value, arrayIndex) => {
    return {
      value,
      index: arrayIndex <= 1 ? (50 * arrayIndex) : (100 * (arrayIndex - 1))
    }
  })

  return palette
}

function createBrightShades(baseColor) {
  const first = chroma.mix(baseColor, 'white', 0.85, 'lch')
  const last = darkenUntilAccessible(baseColor)
  const endColors = chroma.scale([first, baseColor, last]).mode('lch').correctLightness().colors(6)

  const zero = chroma.mix(first, 'white', 0.6)
  const startColors = chroma.scale([zero, first, endColors[1]]).correctLightness().colors(3)

  return startColors.concat(drop(endColors, 2))
}

function createDarkShades(baseColor) {
  const last = chroma(baseColor).darken(2).desaturate(0.5)
  const colors = chroma.scale([baseColor, last]).mode('lch').colors(5)
  return colors
}

function mergePaletteShades(brightShades, darkShades) {
  const shades = [].concat(brightShades)
  shades.pop()
  return shades.concat(darkShades)
}

function darkenUntilAccessible(baseColor) {
  const baseColorObject = chroma(baseColor)
  const hue = baseColorObject.get('hsl.h')
  const saturation = baseColorObject.get('hsl.s')

  let darkFactor = 0
  let hueFactor = hue
  let color = baseColor

  while (chroma.contrast(color, 'white') < 4.5) {
    darkFactor += 0.05
    hueFactor = Math.min(hueFactor + 0.1, 360)

    color = baseColorObject
      .darken(darkFactor)
      .set('hsl.h', hueFactor)
      .set('hsl.s', saturation)
      .hex()
  }

  return color
}
