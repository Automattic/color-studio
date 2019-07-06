const toArray = require('lodash/toArray')

const paletteColors = toArray(document.querySelectorAll('.screen .color-gray-100'))
const paletteFills = toArray(document.querySelectorAll('.screen .fill-gray-100'))

let pureBlackModeActive = false
initPureBlackModeListener()

function initPureBlackModeListener() {
  window.addEventListener('keydown', event => {
    if (event.ctrlKey && event.code === 'KeyB') {
      togglePureBlackMode()
    }
  })
}

function togglePureBlackMode() {
  if (pureBlackModeActive) {
    setPureBlackModeOff()
  } else {
    setPureBlackModeOn()
  }
}

function setPureBlackModeOn() {
  removeClassName(paletteColors, 'color-gray-100')
  addClassName(paletteColors, 'color-black')
  removeClassName(paletteFills, 'fill-gray-100')
  addClassName(paletteFills, 'fill-black')
  pureBlackModeActive = true
}

function setPureBlackModeOff() {
  removeClassName(paletteColors, 'color-black')
  addClassName(paletteColors, 'color-gray-100')
  removeClassName(paletteFills, 'fill-black')
  addClassName(paletteFills, 'fill-gray-100')
  pureBlackModeActive = false
}

function addClassName(elementArray, className) {
  elementArray.forEach(element => {
    element.classList.add(className)
  })
}

function removeClassName(elementArray, className) {
  elementArray.forEach(element => {
    element.classList.remove(className)
  })
}
