const { contrast } = require('chroma-js')
const flatten = require('lodash/flatten')
const round = require('lodash/round')
const unique = require('lodash/uniq')
const toNamedColorCollection = require('../utilities/to-named-color-collection')

const PALETTE_JSON = require('../builders/json')

const PALETTE = toNamedColorCollection(PALETTE_JSON.colors, {
  excludeAliases: true
})

expect.extend({
  toBeContrastRatioBetween: (expected, color1, color2) => {
    const computed = (color1 && color2) ? contrast(color1, color2) : NaN
    const result = {
      message: () => `expected contrast ratio between ${color1} and ${color2} (${round(computed, 2)}) to be ≥ ${expected}`
    }
    return Object.assign(result, {
      pass: computed >= expected
    })
  }
})

describe('palette colors', () => {
  const COLOR_NAMES = flatten(PALETTE_JSON.colors).map(c => c.name)
  const COLOR_VALUES = Object.values(PALETTE)

  test('all names are unique', () => {
    expect(COLOR_NAMES).toEqual(unique(COLOR_NAMES))
  })

  test('all values are unique (excluding aliases)', () => {
    expect(COLOR_VALUES).toEqual(unique(COLOR_VALUES))
  })
})

describe('light mode accessibility', () => {
  const SURFACE_COLOR = PALETTE['White']

  test('shades #40 pass AA Large against pure white', () => {
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Blue 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 40'])

    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WordPress Blue 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Simplenote Blue 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WooCommerce Purple 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Jetpack Green 40'])
  })

  test('shades #50 pass AA against pure white', () => {
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Blue 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 50'])

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WordPress Blue 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Simplenote Blue 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WooCommerce Purple 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Jetpack Green 50'])
  })
})

describe('dark mode accessibility', () => {
  const SURFACE_COLOR = PALETTE['Black']

  test('shades #30 pass AA against pure black', () => {
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 30'])

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WordPress Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Simplenote Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WooCommerce Purple 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Jetpack Green 30'])
  })

  test('shades #40 pass AA Large against pure black', () => {
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Blue 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 40'])

    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WordPress Blue 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Simplenote Blue 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WooCommerce Purple 40'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Jetpack Green 40'])
  })
})

describe('dark mode accessibility for Material Design', () => {
  // Properties › Accessibility and Contrast
  // https://material.io/design/color/dark-theme.html#properties-figure-caption-6
  test('Gray 100 is dark enough to be used as the dark surface color', () => {
    expect(15.8).toBeContrastRatioBetween(PALETTE['Gray 100'], PALETTE['White'])
  })

  // UI Application › Theme Colors
  // https://material.io/design/color/dark-theme.html#ui-application
  test('shades #30 pass AA against Gray 100', () => {
    const SURFACE_COLOR = PALETTE['Gray 100']

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 30'])

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WordPress Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Simplenote Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WooCommerce Purple 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Jetpack Green 30'])
  })

  // Properties › Elevation
  // https://material.io/design/color/dark-theme.html#properties-figure-caption-3
  //
  // Using the second darkest Gray shade. Run `yarn info:material-elevation`
  // to see how the predefined palette colors correspond to Material Design’s
  // elevation changes in a dark theme.
  test('shades #30 pass AA against Gray 90', () => {
    const SURFACE_COLOR = PALETTE['Gray 90']

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 30'])

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WordPress Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Simplenote Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WooCommerce Purple 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Jetpack Green 30'])
  })

  test('shades #30 pass AA Large against Gray 80', () => {
    const SURFACE_COLOR = PALETTE['Gray 80']

    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Blue 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 30'])

    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WordPress Blue 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Simplenote Blue 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['WooCommerce Purple 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Jetpack Green 30'])
  })
})
