/* eslint-env browser */

const PALETTE = require('../../../dist/colors.json')

const { activateTiles } = require('./docs/shared')
const renderTile = require('./docs/render-tile')

const output = document.getElementById('color-tiles')

handleFoundationTiles()

function handleFoundationTiles() {
  const lastColorIndex = PALETTE.colors.length - 1
  const colors = PALETTE.colors.map((colorArray, index) => {
    const html = colorArray.map(createColorTile).join('')
    return `<div class="d-flex${index < lastColorIndex ? ' pb-1' : ''}">${html}</div>`
  })

  output.innerHTML = colors.join('')
  activateTiles(output)
}

function createColorTile(colorObject, last) {
  const base = colorObject._meta.baseColor
  const name = base ? colorObject.name : colorObject._meta.index

  return renderTile(base, name, colorObject.value, last)
}
