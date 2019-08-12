const prepare = (data, indent = 2) => {
  return JSON.stringify(data, null, indent)
}

module.exports = (...args) => {
  console.log(prepare(...args))
}

module.exports.prepare = prepare
