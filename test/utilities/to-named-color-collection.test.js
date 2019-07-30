const toNamedColorCollection = require('../../utilities/to-named-color-collection')

const PALETTE_COLORS = [
  [
    {
      name: 'Gray 0',
      value: '#FAFAFA'
    },
    {
      name: 'Gray 5',
      value: '#999'
    },
    {
      name: 'Gray 50',
      value: '#555555'
    },
    {
      name: 'Gray 100',
      value: '#111'
    }
  ],
  [
    {
      name: 'Jetpack Green',
      value: '#00ba37',
      _meta: {
        alias: true
      }
    },
    {
      name: 'Jetpack Green 30',
      value: '#00ba37'
    }
  ],
  [
    {
      name: 'White',
      value: 'white'
    }
  ]
]

describe('defaults', () => {
  const PALETTE = toNamedColorCollection(PALETTE_COLORS)

  test('contains each of the passed colors', () => {
    expect(Object.keys(PALETTE)).toHaveLength(7)
  })

  test('uses the color names as keys', () => {
    expect(PALETTE).toHaveProperty('Gray 0')
    expect(PALETTE).toHaveProperty('Gray 5')
    expect(PALETTE).toHaveProperty('Gray 50')
    expect(PALETTE).toHaveProperty('Gray 100')
    expect(PALETTE).toHaveProperty('Jetpack Green')
    expect(PALETTE).toHaveProperty('Jetpack Green 30')
    expect(PALETTE).toHaveProperty('White')
  })

  test('formats the color values as the shortest hexadecimal strings possible', () => {
    expect(PALETTE['Gray 0']).toEqual('#fafafa')
    expect(PALETTE['Gray 50']).toEqual('#555')
    expect(PALETTE['Jetpack Green 30']).toEqual('#00ba37')
    expect(PALETTE['White']).toEqual('#fff')
  })
})

describe('with `excludeAliases: true`', () => {
  const PALETTE = toNamedColorCollection(PALETTE_COLORS, {
    excludeAliases: true
  })

  test('contains each of the passed colors with aliases excluded', () => {
    expect(Object.keys(PALETTE)).toHaveLength(6)
  })

  test('uses the color names as keys', () => {
    expect(PALETTE).toHaveProperty('Gray 0')
    expect(PALETTE).toHaveProperty('Gray 5')
    expect(PALETTE).toHaveProperty('Gray 50')
    expect(PALETTE).toHaveProperty('Gray 100')
    expect(PALETTE).not.toHaveProperty('Jetpack Green')
    expect(PALETTE).toHaveProperty('Jetpack Green 30')
    expect(PALETTE).toHaveProperty('White')
  })
})
