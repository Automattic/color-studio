const copyToClipboard = require('copy-text-to-clipboard')
const forIn = require('lodash/forIn')
const groupBy = require('lodash/groupBy')
const toArray = require('lodash/toArray')
const toKebabCase = require('lodash/kebabCase')
const initDesaturationListener = require('./docs/desaturation')
const renderTile = require('./docs/tile.debug')

const PALETTES = require('./docs/palettes.debug')

const ELEMENT_DOWNLOAD_LINK = document.querySelector('#studio-download-link')
const ELEMENT_VERSION_SELECT = document.querySelector('#studio-version-select')
const ELEMENT_OUTPUT = document.querySelector('#studio-color-tiles')

createPaletteSelector(PALETTES)
initDesaturationListener(ELEMENT_OUTPUT)

function createPaletteSelector(palettes) {
  const selectPalette = index => {
    renderPalette(palettes[index])
  }

  ELEMENT_VERSION_SELECT.innerHTML = createOptions(palettes)
  ELEMENT_VERSION_SELECT.removeAttribute('disabled')
  ELEMENT_VERSION_SELECT.addEventListener('change', event => {
    const index = parseInt(event.target.value, 10)
    selectPalette(index)
  })

  selectPalette(0)
}

function createOptions(palettes) {
  const options = palettes.map((palette, index) => {
    return {
      index,
      name: palette.displayName,
      group: palette.label
    }
  })

  const groups = groupBy(options, 'group')
  const html = []

  forIn(groups, (items, name) => {
    html.push(createOptionGroup(name, items))
  })

  return html.join('')
}

function createOptionGroup(name, items) {
  const options = items.map(item => `<option value="${item.index}">${item.name}</option>`)
  return `<optgroup label="${name}">${options.join()}</optgroup>`
}

function renderPalette(palette) {
  setDownloadLink(palette)
  renderTiles(palette)
}

function setDownloadLink(palette) {
  ELEMENT_DOWNLOAD_LINK.setAttribute('href', palette.downloadLink)
  ELEMENT_DOWNLOAD_LINK.classList.remove('disabled')
}

function renderTiles(palette) {
  const colors = palette.colors.map(colorArray => {
    if (colorArray.length <= 0) {
      return
    }

    const name = toKebabCase(colorArray[0]._meta.baseName.toLowerCase())
    const html = colorArray.map(renderTile).join('')
    return html ? `<div id="${name}" class="d-flex pb-1">${html}</div>` : ''
  })

  ELEMENT_OUTPUT.innerHTML = colors.join('')
  activateTiles(ELEMENT_OUTPUT)
}

function activateTiles(scope = document) {
  toArray(scope.querySelectorAll('.tile')).forEach(element => {
    const color = String(element.dataset.color).trim()
    element.addEventListener('click', () => copyToClipboard(color))
  })
}
