const forIn = require('lodash/forIn')
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
    table.cell('Link', composeColorboxURL(entry.specs))
    table.newRow()
  })

  console.log(table.toString())
}

function composeColorboxURL(specs) {
  let path = ''

  forIn(Object.assign({}, specs, COLOR_SPEC_DEFAULTS), (value, key) => {
    path += `#${key}=${value}`
  })

  return `http://colorbox.io/${path}\n`
}
