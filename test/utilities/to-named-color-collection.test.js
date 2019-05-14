const toNamedColorCollection = require('../../utilities/to-named-color-collection')

const PALETTE = toNamedColorCollection([
  [
    {
      name: 'Gray 0',
      value: '#FAFAFA'
    },
    {
      name: 'Gray 50',
      value: '#999'
    },
    {
      name: 'Gray 500',
      value: '#555555'
    },
    {
      name: 'Gray 1000',
      value: '#111'
    }
  ],
  [
    {
      name: 'Jetpack Green 500',
      value: '#00be27'
    }
  ],
  [
    {
      name: 'White',
      value: 'white'
    }
  ]
])

describe('returns an object with colors', () => {
  test('contains each of the passed colors', () => {
    expect(Object.keys(PALETTE)).toHaveLength(6)
  })

  test('uses the color names as keys', () => {
    expect(PALETTE).toHaveProperty('Gray 0')
    expect(PALETTE).toHaveProperty('Gray 50')
    expect(PALETTE).toHaveProperty('Gray 500')
    expect(PALETTE).toHaveProperty('Gray 1000')
    expect(PALETTE).toHaveProperty('Jetpack Green 500')
    expect(PALETTE).toHaveProperty('White')
  })

  test('formats the color values as the shortest hexadecimal strings possible', () => {
    expect(PALETTE['Gray 0']).toEqual('#fafafa')
    expect(PALETTE['Gray 500']).toEqual('#555')
    expect(PALETTE['Jetpack Green 500']).toEqual('#00be27')
    expect(PALETTE['White']).toEqual('#fff')
  })
})
