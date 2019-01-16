const clone = require('lodash/cloneDeep')
const flatten = require('lodash/flatten')
const toKebabCase = require('lodash/kebabCase')

const PALETTE = require('../dist/colors.json')

const colors = includeWhiteColor(PALETTE.colors).map(colorArray => {
  return colorArray.map(formatClassEntry)
})

printStylesheet(colors)

function formatClassEntry(colorObject) {
  const colorName = toKebabCase(colorObject.name)
  const className = `.color-${colorName}`
  const variableName = `$muriel-${colorName}`

  return `${className} {
  color: ${variableName};
}`
}

function includeWhiteColor(colorArrays) {
  const arrays = clone(colorArrays)
  arrays.unshift([{ name: 'White', value: '#ffffff' }])
  return arrays
}

function printStylesheet(colorArrays) {
  const blocks = flatten(colorArrays)

  blocks.unshift(`// v${PALETTE.version}`)
  console.log(blocks.join(`\n\n`))
}
