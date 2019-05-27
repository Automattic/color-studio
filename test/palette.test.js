const { contrast, mix } = require('chroma-js')
const round = require('lodash/round')

const PALETTE_JSON = require('../dist/colors.json')

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

describe('light mode accessibility', () => {
  test('shades no. 50 pass AA against pure white', () => {
    expect(4.5).toBeContrastRatioBetween(PALETTE['Gray 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Gray 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Brand Blue 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Product Blue 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Purple 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Pink 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Red 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Orange 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Yellow 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Green 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Celadon 50'], 'white')
  })
})

describe('dark mode accessibility', () => {
  // Properties › Accessibility and Contrast
  // https://material.io/design/color/dark-theme.html#properties-figure-caption-6
  test('Gray 100 is dark enough to be used as the surface color', () => {
    expect(15.8).toBeContrastRatioBetween(PALETTE['Gray 100'], 'white')
  })

  // UI Application › Theme Colors
  // https://material.io/design/color/dark-theme.html#ui-application
  test('shades no. 20 and 30 pass AA against the surface color', () => {
    const SURFACE_COLOR = PALETTE['Gray 100']

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Brand Blue 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Product Blue 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 20'])

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
  test.skip('shades no. 20 and 30 pass AA against the surface color at 24dp elevation', () => {
    const SURFACE_COLOR = mix(PALETTE['Gray 100'], 'white', 0.16)

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Gray 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Brand Blue 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Product Blue 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Purple 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Pink 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Red 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Orange 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Yellow 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Green 20'])
    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, PALETTE['Celadon 20'])

    expect(4.5).toBeContrastRatioBetween(SURFACE_COLOR, 'white')
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
})
