const fs = require('node:fs')
const path = require('node:path')
const { execSync } = require('node:child_process')
const chroma = require('chroma-js')
const extend = require('../utilities/extend')
const print = require('../utilities/print')
const PALETTE = require('../dist/colors.meta.json')

const INFO_TEMPLATE = {
  info: {
    author: 'blog.color-studio',
    version: PALETTE.version,
  },
}

const OUTPUT_PATH = path.join(__dirname, '../dist/ios')
const ASSETS_PATH = path.join(OUTPUT_PATH, 'ColorStudioPalette.xcassets')

const directoriesToCreate = [OUTPUT_PATH, ASSETS_PATH]
const filesToCreate = [defineContentsFile(ASSETS_PATH)]

PALETTE.colors.forEach(colorArray => {
  colorArray.forEach(colorObject => {
    const colorPath = path.join(ASSETS_PATH, `${colorObject.name.replaceAll(/\s+/g, '')}.colorset`)
    const chromaObject = chroma(colorObject.value)

    directoriesToCreate.push(colorPath)
    filesToCreate.push(defineContentsFile(colorPath, {
      /* eslint-disable quote-props */
      'colors': [
        {
          'idiom': 'universal',
          'color': {
            'components': {
              'red':   String(chromaObject.get('rgb.r')),
              'green': String(chromaObject.get('rgb.g')),
              'blue':  String(chromaObject.get('rgb.b')),
              'alpha': chromaObject.alpha(),
            },
            'color-space': 'srgb',
          },
        },
      ],
      /* eslint-enable quote-props */
    }))
  })
})

function defineContentsFile(dirname, contents) {
  const json = extend(INFO_TEMPLATE, contents || {})

  return {
    path: path.join(dirname, 'Contents.json'),
    contents: print.prepare(json),
  }
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

const removeDirectory = name => {
  try {
    execSync(`rm -rf ${name}`)
  } catch (error) {
    throw new Error(`Can’t remove ${name}:\n${error.message}`)
  }
}

removeDirectory(OUTPUT_PATH)
directoriesToCreate.forEach(createDirectory)
filesToCreate.forEach(fileObject => {
  createFile(fileObject.path, fileObject.contents)
})
