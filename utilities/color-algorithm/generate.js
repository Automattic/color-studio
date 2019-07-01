// Color Studio’s color set generator is based on ColorBox’s algorithm
// developed by Lyft and licensed under Apache License 2.0.
//
// https://github.com/lyft/coloralgorithm

const chroma = require('chroma-js')
const isString = require('lodash/isString')
const range = require('lodash/range')
const reverse = require('lodash/reverse')

const Curves = require('./curves')

module.exports = ({ specs }) => {
  const stepCount = specs.steps

  const hueSteps = generateSteps(stepCount, specs.hue_curve).map(step => {
    return distribute(step, 0, specs.hue_start, 1, specs.hue_end)
  })

  const saturationSteps = generateSteps(stepCount, specs.sat_curve).map(step => {
    const saturation = distribute(step, 0, specs.sat_start / 100, 1, specs.sat_end / 100)
    return saturation * specs.sat_rate / 100
  })

  const luminositySteps = generateSteps(stepCount, specs.lum_curve).map(step => {
    return distribute(step, 0, specs.lum_end / 100, 1, specs.lum_start / 100)
  })

  return luminositySteps.map((luminosity, index) => {
    const rightIndex = stepCount - index - 1

    const hue = hueSteps[rightIndex]
    const saturation = Math.min(1, saturationSteps[rightIndex])

    return chroma.hsv(hue, saturation, luminosity)
  })
}

function generateSteps(stepCount, easing) {
  const ease = isString(easing) ? Curves[easing] : easing
  const steps = range(stepCount).map(index => ease(index / (stepCount - 1)))

  return reverse(steps)
}

function distribute(value, fromLow, toLow, fromHigh, toHigh) {
  const result = toLow + (((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow))

  return toLow < toHigh ?
    Math.max(toLow, Math.min(result, toHigh)) :
    Math.min(toLow, Math.max(result, toHigh))
}
