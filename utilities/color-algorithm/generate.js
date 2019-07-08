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
  const hueSteps = generateHueSteps(specs)
  const saturationSteps = generateSaturationsSteps(specs)
  const luminositySteps = generateLuminositySteps(specs)

  return luminositySteps.map((luminosity, index) => {
    const rightIndex = specs.steps - index - 1

    const hue = hueSteps[rightIndex] % 360
    const saturation = Math.min(1, saturationSteps[rightIndex])

    return chroma.hsv(hue, saturation, luminosity)
  })
}

function generateHueSteps(specs) {
  return generateSteps(specs.steps, specs.hue_curve).map(step => {
    return distribute(step, 0, specs.hue_start, 1, specs.hue_end)
  })
}

function generateSaturationsSteps(specs) {
  return generateSteps(specs.steps, specs.sat_curve).map(step => {
    const saturation = distribute(step, 0, specs.sat_start / 100, 1, specs.sat_end / 100)
    return saturation * specs.sat_rate / 100
  })
}

function generateLuminositySteps(specs) {
  const customSteps = specs.lum_steps

  if (Array.isArray(customSteps) && customSteps.length === specs.steps) {
    return customSteps.map(step => step / 100)
  }

  return generateSteps(specs.steps, specs.lum_curve).map(step => {
    return distribute(step, 0, specs.lum_end / 100, 1, specs.lum_start / 100)
  })
}

function generateSteps(count, easing) {
  const ease = isString(easing) ? Curves[easing] : easing
  const steps = range(count).map(index => ease(index / (count - 1)))

  return reverse(steps)
}

function distribute(value, fromLow, toLow, fromHigh, toHigh) {
  const result = toLow + (((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow))

  return toLow < toHigh ?
    Math.max(toLow, Math.min(result, toHigh)) :
    Math.min(toLow, Math.max(result, toHigh))
}
