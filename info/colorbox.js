const isString = require('lodash/isString')
const Table = require('easy-table')

const COLOR_DEFINITIONS = require('../data/color-definitions')

const COLOR_SPEC_DEFAULTS = Object.assign({}, COLOR_DEFINITIONS.config, {
  minor_steps_map: 'none' /* eslint-disable-line camelcase */
})

printInTable(COLOR_DEFINITIONS.colors)

function printInTable(data) {
  const table = new Table()

  data.forEach(entry => {
    table.cell('Color', entry.name)
    table.cell('Link', composeColorBoxURL(entry.specs))
    table.newRow()
  })

  console.log(table.toString())
}

function composeColorBoxURL(specs) {
  const properties = Object.assign({}, specs, COLOR_SPEC_DEFAULTS)

  if (!supportsColorBox(properties)) {
    return 'Unsupported'
  }

  const path = Object.keys(properties)
    .map(key => `#${key}=${properties[key]}`)
    .join('')

  return `http://colorbox.io/${path}\n`
}

function supportsColorBox(specs) {
  return isString(specs.hue_curve) && isString(specs.sat_curve) && isString(specs.lum_curve)
}
