const { mix } = require('../utilities/base-color-helpers')

const values = {
  gray: '#707070',
  blue: '#016087',
  purple: '#96588a',
  pink: '#d52c82',
  red: '#eb0001',
  yellow: '#f6c200',
  green: '#00be27'
}

values.gray = mix(values.gray, values.blue, 0.2)

module.exports = [
  {
    name: 'Gray',
    value: values.gray
  },
  {
    name: 'Blue',
    value: values.blue
  },
  {
    name: 'Purple',
    value: values.purple
  },
  {
    name: 'Pink',
    value: values.pink
  },
  {
    name: 'Red',
    value: values.red
  },
  {
    name: 'Yellow',
    value: values.yellow
  },
  {
    name: 'Green',
    value: values.green
  }
]
