const { contrast } = require('chroma-js')
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
  test('shades 50 pass AA against pure white', () => {
    expect(4.5).toBeContrastRatioBetween(PALETTE['Gray 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Gray 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Brand Blue 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Product Blue 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Purple 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Pink 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Red 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Yellow 50'], 'white')
    expect(4.5).toBeContrastRatioBetween(PALETTE['Green 50'], 'white')
  })
})

describe.skip('dark mode accessibility', () => {
  test('shades 40 pass AA against Gray 100', () => {
    expect(4.5).toBeContrastRatioBetween(PALETTE['Gray 40'], PALETTE['Gray 100'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Brand Blue 40'], PALETTE['Gray 100'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Product Blue 40'], PALETTE['Gray 100'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Purple 40'], PALETTE['Gray 100'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Pink 40'], PALETTE['Gray 100'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Red 40'], PALETTE['Gray 100'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Yellow 40'], PALETTE['Gray 100'])
    expect(4.5).toBeContrastRatioBetween(PALETTE['Green 40'], PALETTE['Gray 100'])
  })
})
