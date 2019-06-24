const { contrast } = require('chroma-js')
const floor = require('lodash/floor')
const toKebabCase = require('lodash/kebabCase')

const PALETTE_JSON = require('../../../builders/json')

const toNamedColorCollection = require('../../../utilities/to-named-color-collection')

const COLOR_COMBINATIONS = require('./data/example-colors-dark.json')

const PALETTE = toNamedColorCollection(PALETTE_JSON.colors)

document.querySelector('#example-output').innerHTML = getOutputString()

function getOutputString() {
  const examples = getExamples()
  const outputString = examples.map(getExampleMarkup).join('')
  return `<div class="examples examples--columns-3">${outputString}</div>`
}

function getExamples() {
  const examples = []

  COLOR_COMBINATIONS.examples.forEach(example => {
    const _ = key => {
      return example[key] || COLOR_COMBINATIONS.defaults[key] || []
    }

    _('button-background').forEach(buttonBackgroundColor => {
      _('hero-text').forEach(heroTextColor => {
        _('hero-background').forEach(heroBackgroundColor => {
          const data = formatExampleData({
            heroBackgroundColor,
            heroTextColor,
            buttonBackgroundColor
          })

          examples.push(data)
        })
      })
    })
  })

  return examples
}

function formatExampleData(data) {
  const formattedData = {
    title: formatExampleMetaString(data),
    heroBackgroundClassName: `color-${toKebabCase(data.heroBackgroundColor)}`,
    heroTextClassName: `color-${toKebabCase(data.heroTextColor)}`,
    buttonBackgroundClassName: `color-${toKebabCase(data.buttonBackgroundColor)}`
  }

  return Object.assign({}, data, formattedData)
}

function formatExampleMetaString(data) {
  const heroBackgroundColor = PALETTE[data.heroBackgroundColor] || data.heroBackgroundColor
  const heroTextColor = PALETTE[data.heroTextColor] || data.heroTextColor
  const buttonBackgroundColor = PALETTE[data.buttonBackgroundColor] || data.buttonBackgroundColor

  const meta = [
    `${formatContrastRatio(heroTextColor, heroBackgroundColor)} | Copy: ${data.heroTextColor} on ${data.heroBackgroundColor}`,
    `${formatContrastRatio('white', buttonBackgroundColor)} | Button: White on ${data.buttonBackgroundColor}`
  ]

  return `title="${meta.join('\n')}"`
}

function formatContrastRatio(foreground, background) {
  const colorContrast = contrast(foreground, background)
  const contrastIcon = colorContrast >= 4.5 ? '✅' : '🔴'

  return `${contrastIcon} ${floor(colorContrast, 2)}`.trim()
}

function getExampleMarkup(data) {
  const _ = key => {
    const className = data[key]
    return className ? ` ${className}` : ''
  }

  return `
    <div class="example"${_('title')}>
      <div class="example__content" style="width: 999px">
        <div class="container p-96${_('heroBackgroundClassName')}">
          <div class="container__wrapper${_('heroTextClassName')}">
            <p class="text-48 text-brand text-weight-500">
              Build a website,<span class="br"></span>
              build a movement.
            </p>
            <p class="text-20 pt-24 pb-36">
              Whatever you want to create, share, or sell,<span class="br"></span>
              we’ll help you do it right here.
            </p>
            <span class="button button--20${_('buttonBackgroundClassName')}">
              <span class="button__label${_('buttonTextClassName')}">
                Get started
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  `.trim()
}
