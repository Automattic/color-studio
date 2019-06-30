const toSketchPalette = require('../../utilities/to-sketch-palette')

describe('meta', () => {
  test('creates palette object', () => {
    const PALETTE = toSketchPalette([])

    expect(PALETTE).toHaveProperty('compatibleVersion')
    expect(PALETTE).toHaveProperty('pluginVersion')
    expect(PALETTE).toHaveProperty('colors')
    expect(PALETTE).toHaveProperty('gradients')
    expect(PALETTE).toHaveProperty('images')
  })

  test('extends palette object', () => {
    const PALETTE = toSketchPalette([], {
      foo: 'bar'
    })

    expect(PALETTE).toHaveProperty('compatibleVersion')
    expect(PALETTE).toHaveProperty('pluginVersion')
    expect(PALETTE).toHaveProperty('colors')
    expect(PALETTE).toHaveProperty('gradients')
    expect(PALETTE).toHaveProperty('images')
    expect(PALETTE).toHaveProperty('foo', 'bar')
  })
})

describe('handling flat arrays', () => {
  test('converts color values to palette values', () => {
    const PALETTE = toSketchPalette([
      'white',
      'black'
    ])

    expect(PALETTE).toHaveProperty(['colors', 0, 'red'],   1)
    expect(PALETTE).toHaveProperty(['colors', 0, 'green'], 1)
    expect(PALETTE).toHaveProperty(['colors', 0, 'blue'],  1)
    expect(PALETTE).toHaveProperty(['colors', 0, 'alpha'], 1)

    expect(PALETTE).toHaveProperty(['colors', 1, 'red'],   0)
    expect(PALETTE).toHaveProperty(['colors', 1, 'green'], 0)
    expect(PALETTE).toHaveProperty(['colors', 1, 'blue'],  0)
    expect(PALETTE).toHaveProperty(['colors', 1, 'alpha'], 1)

    expect(PALETTE).not.toHaveProperty(['colors', 2])
  })

  test('converts color objects to named palette values', () => {
    const PALETTE = toSketchPalette([
      { name: 'White', value: '#fff' },
      { name: 'Black', value: '#000' }
    ])

    expect(PALETTE).toHaveProperty(['colors', 0, 'name'], 'White')
    expect(PALETTE).toHaveProperty(['colors', 0, 'red'],   1)
    expect(PALETTE).toHaveProperty(['colors', 0, 'green'], 1)
    expect(PALETTE).toHaveProperty(['colors', 0, 'blue'],  1)
    expect(PALETTE).toHaveProperty(['colors', 0, 'alpha'], 1)

    expect(PALETTE).toHaveProperty(['colors', 1, 'name'], 'Black')
    expect(PALETTE).toHaveProperty(['colors', 1, 'red'],   0)
    expect(PALETTE).toHaveProperty(['colors', 1, 'green'], 0)
    expect(PALETTE).toHaveProperty(['colors', 1, 'blue'],  0)
    expect(PALETTE).toHaveProperty(['colors', 1, 'alpha'], 1)

    expect(PALETTE).not.toHaveProperty(['colors', 2])
  })
})

describe('formatting nested arrays into rows of 8 color values', () => {
  test('fills out empty palette slots with transparent colors', () => {
    const PALETTE = toSketchPalette([
      ['red'],
      ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red']
    ])

    // Row 1
    expect(PALETTE).toHaveProperty(['colors', 0,  'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 1,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 2,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 3,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 4,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 5,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 6,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 7,  'alpha'], 0)

    // Row 2
    expect(PALETTE).toHaveProperty(['colors', 8,  'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 9,  'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 10, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 11, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 12, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 13, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 14, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 15, 'alpha'], 1)

    expect(PALETTE).not.toHaveProperty(['colors', 16])
  })

  test('provides names to filler values', () => {
    const PALETTE = toSketchPalette([
      ['red']
    ])

    expect(PALETTE).not.toHaveProperty(['colors', 0, 'name'])

    expect(PALETTE).toHaveProperty(['colors', 1, 'name'])
    expect(PALETTE).toHaveProperty(['colors', 2, 'name'])
    expect(PALETTE).toHaveProperty(['colors', 3, 'name'])
    expect(PALETTE).toHaveProperty(['colors', 4, 'name'])
    expect(PALETTE).toHaveProperty(['colors', 5, 'name'])
    expect(PALETTE).toHaveProperty(['colors', 6, 'name'])
    expect(PALETTE).toHaveProperty(['colors', 7, 'name'])

    expect(PALETTE).not.toHaveProperty(['colors', 8])
  })

  test('gracefully overflows rows', () => {
    const PALETTE = toSketchPalette([
      ['red'],
      ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red'],
      ['red', 'red', 'red', 'red', 'red', 'red', 'red', 'red']
    ])

    // Row 1
    expect(PALETTE).toHaveProperty(['colors', 0,  'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 1,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 2,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 3,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 4,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 5,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 6,  'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 7,  'alpha'], 0)

    // Row 2
    expect(PALETTE).toHaveProperty(['colors', 8,  'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 9,  'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 10, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 11, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 12, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 13, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 14, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 15, 'alpha'], 1)

    // Row 3, the remaning values from the passed row 2
    expect(PALETTE).toHaveProperty(['colors', 16, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 17, 'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 18, 'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 19, 'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 20, 'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 21, 'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 22, 'alpha'], 0)
    expect(PALETTE).toHaveProperty(['colors', 23, 'alpha'], 0)

    // Row 4, the passed row 3
    expect(PALETTE).toHaveProperty(['colors', 24, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 25, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 26, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 27, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 28, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 29, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 30, 'alpha'], 1)
    expect(PALETTE).toHaveProperty(['colors', 31, 'alpha'], 1)

    expect(PALETTE).not.toHaveProperty(['colors', 32])
  })
})
