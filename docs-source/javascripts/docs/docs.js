/* eslint-env browser */

const PALETTE = require('../../../dist/colors.json')

const { activateTiles } = require('./docs/shared')
const renderTile = require('./docs/render-tile')

const output = document.querySelector('#color-tiles')

handleFoundationTiles()

function handleFoundationTiles() {
  const colors = PALETTE.colors.map(colorArray => {
    const html = colorArray.filter(excludeSpecialColor).map(createColorTile).join('')
    return html ? `<div class="d-flex pb-1">${html}</div>` : ''
  })

  output.innerHTML = colors.join('')
  activateTiles(output)
}

function createColorTile(colorObject, last) {
  const base = colorObject._meta.baseColor
  const name = base ? colorObject.name : colorObject._meta.index

  return renderTile(base, name, colorObject.value, last)
}

function excludeSpecialColor(colorObject) {
  return !colorObject._meta.special
}
