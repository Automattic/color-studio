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
const SWIFT_PATH = path.join(OUTPUT_PATH, 'ColorStudioPalette.swift')

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

function createSwiftRawData(colors) {
  const data = {}
  colors.forEach(colorArray => {
    colorArray.forEach(colorObject => {
      const matches = colorObject.name.replaceAll(/\s+/g, '').match(/^(?<color>\D+)(?<shade>\d*)/)

      if (matches !== null) {
        const color = matches.groups.color
        let shade = String(matches.groups.shade)

        if (shade === '') {
          shade = 'base'
        }

        data[color] ??= {}

        data[color][shade] = chroma(colorObject.value)
      }
    })
  })
  return data
}

function createSwiftCode(data) {
  let output = `import Foundation

enum ColorStudioShade: Int8 {
    case shade0 = 0
    case shade5 = 5
    case shade10 = 10
    case shade20 = 20
    case shade30 = 30
    case shade40 = 40
    case shade50 = 50
    case shade60 = 60
    case shade70 = 70
    case shade80 = 80
    case shade90 = 90
    case shade100 = 100
}

protocol ColorStudioPalette {
    static var colorTable: [ColorStudioShade: UIColor] { get }
    static var base: UIColor
}

extension ColorStudioPalette {
    static func shade(_ shade: ColorStudioShade) -> UIColor {
        colorTable[shade]!
    }
}

struct CSColor {\n`
  Object.keys(data).forEach(key => {
    const shades = Object.keys(data[key])
    if (shades.length === 1) { // If this is a special color like black or white
      const colorObject = data[key].base
      output += `\n    struct ${key} {
        static let base = UIColor(red: ${colorObject.get('rgb.r')}, green: ${colorObject.get('rgb.g')}, blue: ${colorObject.get('rgb.b')}, alpha: ${colorObject.alpha()})
    }\n`
    } else {
      let base = ''
      output += `\n    struct ${key}: ColorStudioPalette {
      static let colorTable: [ColorStudioShade: UIColor] = [
`
      shades.forEach(shade => {
        const colorObject = data[key][shade]
        const name = `shade${shade}`

        if (shade === 'base') {
          base += `      static let base = UIColor(red: ${colorObject.get('rgb.r') / 255}, green: ${colorObject.get('rgb.g') / 255}, blue: ${colorObject.get('rgb.b') / 255}, alpha: ${colorObject.alpha()})\n`
        } else {
          output += `        .${name}: UIColor(red: ${colorObject.get('rgb.r') / 255}, green: ${colorObject.get('rgb.g') / 255}, blue: ${colorObject.get('rgb.b') / 255}, alpha: ${colorObject.alpha()}),\n`
        }
      })
      output += `      ]\n${base}  }\n`
    }
  })
  output += '}\n'
  return output
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

const swiftData = createSwiftRawData(PALETTE.colors)
const swiftCode = createSwiftCode(swiftData)
createFile(SWIFT_PATH, swiftCode)

