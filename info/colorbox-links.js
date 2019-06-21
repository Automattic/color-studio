const forIn = require('lodash/forIn')
const Table = require('easy-table')

const COLOR_SPECS = require('../data/base-colors.json')

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

  forIn(Object.assign({ steps: 12 }, specs), (value, key) => {
    path += `#${key}=${value}`
  })

  return `http://colorbox.io/${path}\n`
}
