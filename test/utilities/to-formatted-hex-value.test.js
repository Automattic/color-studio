const toFormattedHexValue = require('../../utilities/to-formatted-hex-value')

test('formats 6-digit color values as the shortest hexadecimal strings possible', () => {
  expect(toFormattedHexValue('#000000')).toEqual('#000')
  expect(toFormattedHexValue('#000001')).toEqual('#000001')
  expect(toFormattedHexValue('#ffffff')).toEqual('#fff')
  expect(toFormattedHexValue('#FFFFFF')).toEqual('#fff')
  expect(toFormattedHexValue('#00AAFF')).toEqual('#0af')
})

test('formats 8-digit color values as the shortest hexadecimal strings possible', () => {
  expect(toFormattedHexValue('#00000000')).toEqual('#0000')
  expect(toFormattedHexValue('#00000001')).toEqual('#00000001')
  expect(toFormattedHexValue('#ffffffff')).toEqual('#ffff')
  expect(toFormattedHexValue('#FFFFFFFF')).toEqual('#ffff')
  expect(toFormattedHexValue('#00AAFF00')).toEqual('#0af0')
})

test('accepts 3- and 4-digit color values', () => {
  expect(toFormattedHexValue('#000')).toEqual('#000')
  expect(toFormattedHexValue('#0000')).toEqual('#0000')
  expect(toFormattedHexValue('#fff')).toEqual('#fff')
  expect(toFormattedHexValue('#ffff')).toEqual('#ffff')
  expect(toFormattedHexValue('#0af')).toEqual('#0af')
  expect(toFormattedHexValue('#0af0')).toEqual('#0af0')
})

test('accepts ‘black’ and ‘white’ as supported color values', () => {
  expect(toFormattedHexValue('white')).toEqual('#fff')
  expect(toFormattedHexValue('WHITE')).toEqual('#fff')
  expect(toFormattedHexValue('black')).toEqual('#000')
  expect(toFormattedHexValue('BLACK')).toEqual('#000')
})

test('throws with unsupported values', () => {
  expect(() => toFormattedHexValue('red')).toThrow()
  expect(() => toFormattedHexValue('#')).toThrow()
  expect(() => toFormattedHexValue('#fffff')).toThrow()
  expect(() => toFormattedHexValue('#gggggg')).toThrow()
  expect(() => toFormattedHexValue('#ggg')).toThrow()
  expect(() => toFormattedHexValue('111111')).toThrow()
  expect(() => toFormattedHexValue(111111)).toThrow()
})
