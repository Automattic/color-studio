const chroma = require('chroma-js')
const forIn = require('lodash/forIn')
const isNumber = require('lodash/isNumber')
const Table = require('easy-table')

const PALETTE_JSON = require('../dist/colors.json')

const toNamedColorCollection = require('../utilities/to-named-color-collection')

const PALETTE = toNamedColorCollection(PALETTE_JSON.colors)

// Properties › Elevation
// https://material.io/design/color/dark-theme.html#properties-figure-caption-1
//
// “The higher a surface’s elevation (raising it closer to an implied light
// source), the lighter that surface becomes. That lightness is expressed
// through the application of a semi-transparent white overlay.”
//
// Calculating the closest palette colors to possible surface colors
// depending on elevation.
const SURFACE_COLOR = PALETTE['Gray 100']
const SURFACE_OVERLAYS = {
  '0dp': 0,
  '1dp': 0.05,
  '2dp': 0.07,
  '3dp': 0.08,
  '4dp': 0.09,
  '6dp': 0.11,
  '8dp': 0.12,
  '12dp': 0.14,
  '16dp': 0.15,
  '24dp': 0.16
}

const surfaceColorCalucations = []

forIn(SURFACE_OVERLAYS, (overlay, elevation) => {
  const elevatedColorValue = applyOverlay(SURFACE_COLOR, overlay)

  surfaceColorCalucations.push({
    elevation,
    overlay,
    elevatedColorValue,
    ...findClosestPaletteColor(elevatedColorValue)
  })
})

printInTable(surfaceColorCalucations)

function applyOverlay(color, overlay) {
  return overlay > 0 ? chroma.mix(color, 'white', overlay).hex() : color
}

function findClosestPaletteColor(color) {
  let closestColorDistance
  let closestColorName
  let closestColorValue

  forIn(PALETTE, (colorValue, colorName) => {
    if (colorValue === color) {
      closestColorName = colorName
      closestColorValue = colorValue
      return false
    }

    const colorDistance = chroma.distance(color, colorValue)
    if (!isNumber(closestColorDistance) || closestColorDistance > colorDistance) {
      closestColorDistance = colorDistance
      closestColorName = colorName
      closestColorValue = colorValue
    }
  })

  return {
    closestColorValue,
    closestColorName
  }
}

function printInTable(data) {
  const table = new Table()

  data.forEach(entry => {
    table.cell('Elevation', entry.elevation)
    table.cell('Overlay', formatPercentage(entry.overlay))
    table.cell('Surface Color', entry.elevatedColorValue)
    table.cell('Closest Palette Color', `${entry.closestColorValue} | ${entry.closestColorName}`)
    table.newRow()
  })

  console.log(table.toString())
}

function formatPercentage(value) {
  return value === 0 ? String(value) : `${Math.round(value * 100)}%`
}
