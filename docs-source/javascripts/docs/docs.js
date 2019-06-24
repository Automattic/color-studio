/* eslint-env browser */

const PALETTE = require('../../../builders/json')

const { activateTiles } = require('./docs/shared')
const renderTile = require('./docs/render-tile')

const output = document.querySelector('#color-tiles')

handleFoundationTiles()
handleDesaturation()

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

function handleDesaturation() {
  window.addEventListener('keyup', setDesaturationOff)
  window.addEventListener('keydown', event => {
    if (event.ctrlKey && event.code === 'KeyG') {
      setDesaturationOn()
    }
  })
}

function setDesaturationOn() {
  output.classList.add('js-desaturated', 'js-disabled')
}

function setDesaturationOff() {
  output.classList.remove('js-desaturated', 'js-disabled')
}
