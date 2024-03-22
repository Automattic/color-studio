const prepare = (data, indent = 2) => {
  return JSON.stringify(data, null, indent)
}

module.exports = (...values) => {
  console.log(prepare(...values))
}

module.exports.prepare = prepare
