const chroma = require('chroma-js')

module.exports = {
  mix: (color1, color2, ratio = 0.5) => {
    return chroma.mix(color1, color2, ratio, 'lch').hex()
  }
}
