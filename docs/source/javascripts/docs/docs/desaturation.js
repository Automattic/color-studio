let desaturationActive = false

module.exports = element => {
  initDesaturationListener(element)
}

function initDesaturationListener(element) {
  window.addEventListener('keydown', event => {
    if (event.ctrlKey && event.code === 'KeyG') {
      toggleDesaturation(element)
    }
  })
}

function toggleDesaturation(element) {
  if (!element) {
    return
  }

  if (desaturationActive) {
    setDesaturationOff(element)
  } else {
    setDesaturationOn(element)
  }
}

function setDesaturationOn(element) {
  element.classList.add('js-desaturated', 'js-disabled')
  desaturationActive = true
}

function setDesaturationOff(element) {
  element.classList.remove('js-desaturated', 'js-disabled')
  desaturationActive = false
}
