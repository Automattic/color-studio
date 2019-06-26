const { contrast } = require('chroma-js')
const round = require('lodash/round')
const unique = require('lodash/uniq')

const PALETTE_JSON = require('../builders/json')

const toNamedColorCollection = require('../utilities/to-named-color-collection')

const PALETTE = toNamedColorCollection(PALETTE_JSON.colors)

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
  const COLOR_NAMES = Object.keys(PALETTE)
  const COLOR_VALUES = Object.values(PALETTE)

  test('all names are unique', () => {
    expect(COLOR_NAMES).toEqual(unique(COLOR_NAMES))
  })

  test('all values are unique', () => {
    expect(COLOR_VALUES).toEqual(unique(COLOR_VALUES))
  })
})

describe('light mode accessibility', () => {
  test('shades #50 pass AA against pure white', () => {
    const SURFACE_COLOR = PALETTE['White']

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Brand Blue 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Product Blue 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 50'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 50'])
  })
})

describe.skip('dark mode accessibility', () => {
  // Properties › Accessibility and Contrast
  // https://material.io/design/color/dark-theme.html#properties-figure-caption-6
  test('Gray 100 is dark enough to be used as the dark surface color', () => {
    expect(15.8).toBeContrastRatioBetween(PALETTE['Gray 100'], PALETTE['White'])
  })

  test('shades #30 pass AA against pure black', () => {
    const SURFACE_COLOR = PALETTE['Black']

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Brand Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Product Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 30'])
  })

  // UI Application › Theme Colors
  // https://material.io/design/color/dark-theme.html#ui-application
  test('shades #30 pass AA against Gray 100', () => {
    const SURFACE_COLOR = PALETTE['Gray 100']

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Brand Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Product Blue 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 30'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 30'])
  })

  // Properties › Elevation
  // https://material.io/design/color/dark-theme.html#properties-figure-caption-3
  //
  // Using the second darkest Gray shade. Run `yarn info:material-elevation`
  // to see how the predefined palette colors correspond to Material Design’s
  // elevation changes in a dark theme.
  test('shades #30 pass AA Large against Gray 90', () => {
    const SURFACE_COLOR = PALETTE['Gray 90']

    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Brand Blue 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Product Blue 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 30'])
  })

  test('shades #30 pass AA Large against Gray 80', () => {
    const SURFACE_COLOR = PALETTE['Gray 80']

    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Brand Blue 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Product Blue 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 30'])
    expect(3.0).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 30'])
  })
})
