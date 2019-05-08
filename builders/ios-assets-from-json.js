const fs = require('fs')
const path = require('path')

const chroma = require('chroma-js')
const removeDirectory = require('rimraf').sync

const PALETTE = require('../dist/colors.json')

const INFO_TEMPLATE = {
  info: {
    author: 'io.github.automattic.color-studio',
    version: PALETTE.version
  }
}

const OUTPUT_PATH = path.join(__dirname, '../dist/ios')
const ASSETS_PATH = path.join(OUTPUT_PATH, 'ColorPalette.xassets')

const directoriesToCreate = [OUTPUT_PATH, ASSETS_PATH]
const filesToCreate = [
  {
    path: path.join(ASSETS_PATH, 'Contents.json'),
    contents: createContentsFile()
  }
]

PALETTE.colors.forEach(colorArray => {
  colorArray.forEach(colorObject => {
    const colorPath = path.join(ASSETS_PATH, `${colorObject.name.replace(/\s+/, '-')}.colorset`)
    const chromaObject = chroma(colorObject.value)

    directoriesToCreate.push(colorPath)
    filesToCreate.push({
      path: path.join(colorPath, 'Contents.json'),
      contents: createContentsFile({
        /* eslint-disable quote-props */
        'colors': {
          'idiom': 'universal',
          'display-gamut': 'sRGB',
          'color': {
            'components': {
              'red':   chromaObject.get('rgb.r'),
              'green': chromaObject.get('rgb.g'),
              'blue':  chromaObject.get('rgb.b'),
              'alpha': chromaObject.alpha()
            },
            'color-space': 'srgb'
          }
        }
        /* eslint-enable quote-props */
      })
    })
  })
})

function createContentsFile(contents) {
  const json = Object.assign({}, INFO_TEMPLATE, contents || {})
  return JSON.stringify(json, null, 2)
}

function createDirectory(name) {
  if (fs.existsSync(name)) {
    throw new Error(`${name} already exists`)
  } else {
    fs.mkdirSync(name)
  }
}

function createFile(name, contents) {
  if (fs.existsSync(name)) {
    throw new Error(`${name} already exists`)
  } else {
    fs.writeFileSync(name, contents)
  }
}

removeDirectory(OUTPUT_PATH)
directoriesToCreate.forEach(createDirectory)
filesToCreate.forEach(fileObject => {
  createFile(fileObject.path, fileObject.contents)
})
