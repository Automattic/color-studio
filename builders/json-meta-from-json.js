const PALETTE_DATA = require('./json')

print(PALETTE_DATA)

function print(data) {
  console.log(JSON.stringify(data, null, 2))
}
