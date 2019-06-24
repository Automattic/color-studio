const forIn = require('lodash/forIn')
const Table = require('easy-table')

const COLOR_SPECS = require('../data/color-definitions.json')

const COLOR_SPEC_DEFAULTS = {
  /* eslint-disable camelcase */
  steps: 12,
  minor_steps_map: 'none'
  /* eslint-enable camelcase */
}

printInTable(COLOR_SPECS)

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
