const { contrast } = require('chroma-js')
const round = require('lodash/round')

const PALETTE_JSON = require('../dist/colors.json')

const toNamedColorCollection = require('../utilities/to-named-color-collection')

const PALETTE = toNamedColorCollection(PALETTE_JSON.colors)

expect.extend({
  toBeContrastRatioBetween: (expected, color1, color2) => {
    const computed = contrast(color1, color2)
    const result = {
      message: () => `expected contrast ratio between ${color1} and ${color2} (${round(computed, 2)}) to be ≥ ${expected}`
    }
    return Object.assign(result, {
      pass: computed >= expected
    })
  }
})

describe('light mode accessibility', () => {
  test('shades 500 pass AA against pure white', () => {
    expect(4.5).toBeContrastRatioBetween(PALETTE['Gray 500'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Gray 500'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Blue 500'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Purple 500'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Pink 500'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Red 500'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Yellow 500'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Green 500'], 'white')
  })
})

describe.skip('dark mode accessibility', () => {
  test('shades 400 pass AA against Gray 1000', () => {
    expect(4.5).toBeContrastRatioBetween(PALETTE['Gray 400'], PALETTE['Gray 1000'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Blue 400'], PALETTE['Gray 1000'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Purple 400'], PALETTE['Gray 1000'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Pink 400'], PALETTE['Gray 1000'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Red 400'], PALETTE['Gray 1000'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Yellow 400'], PALETTE['Gray 1000'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Green 400'], PALETTE['Gray 1000'])
  })
})
