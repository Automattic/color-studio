const { contrast } = require('chroma-js')
const floor = require('lodash/floor')
const toKebabCase = require('lodash/kebabCase')

const PALETTE_JSON = require('../../../builders/json')

const toNamedColorCollection = require('../../../utilities/to-named-color-collection')

const COLOR_COMBINATIONS = require('./data/example-colors-bright.json')

const PALETTE = toNamedColorCollection(PALETTE_JSON.colors)

document.querySelector('#example-output').innerHTML = getOutputString()

function getOutputString() {
  const examples = getExamples()
  const outputString = examples.map(getExampleMarkup).join('')
  return `<div class="examples examples--gap examples--columns-2">${outputString}</div>`
}

function getExamples() {
  const examples = []

  COLOR_COMBINATIONS.examples.forEach(example => {
    const _ = key => {
      return example[key] || COLOR_COMBINATIONS.defaults[key] || []
    }

    _('button-background').forEach(buttonBackgroundColor => {
      _('hero-heading').forEach(heroHeadingColor => {
        _('hero-text').forEach(heroTextColor => {
          _('hero-background').forEach(heroBackgroundColor => {
            const data = formatExampleData({
              heroBackgroundColor,
              heroHeadingColor,
              heroTextColor,
              buttonBackgroundColor
            })

            examples.push(data)
          })
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
    heroHeadingClassName: `color-${toKebabCase(data.heroHeadingColor)}`,
    heroTextClassName: `color-${toKebabCase(data.heroTextColor)}`,
    buttonBackgroundClassName: `color-${toKebabCase(data.buttonBackgroundColor)}`
  }

  return Object.assign({}, data, formattedData)
}

function formatExampleMetaString(data) {
  const heroBackgroundColor = PALETTE[data.heroBackgroundColor] || data.heroBackgroundColor
  const heroHeadingColor = PALETTE[data.heroHeadingColor] || data.heroHeadingColor
  const heroTextColor = PALETTE[data.heroTextColor] || data.heroTextColor
  const buttonBackgroundColor = PALETTE[data.buttonBackgroundColor] || data.buttonBackgroundColor

  const meta = [
    `${formatContrastRatio(heroHeadingColor, heroBackgroundColor)} | Heading: ${data.heroHeadingColor} on ${data.heroBackgroundColor}`,
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
      <div class="example__content">
        <div class="container p-96${_('heroBackgroundClassName')}">
          <div class="container__wrapper${_('heroHeadingClassName')}">
            <p class="text-80 text-brand text-weight-500">
              Engineering<span class="br"></span>
              happiness.
            </p>
            <div class="text-16 py-36${_('heroTextClassName')}" style="width: 432px">
              <p>
                Our 24/7 support is powered by actual people. We call them Happiness Engineers.
              </p>
              <p class="pt-12">
                From configuring settings to publishing pages to helping you pick the perfect design, they’re all ears, all smiles, and all human. Happiness Engineers also work all around the world—and around the clock, so there’s always someone there when you need them.
              </p>
            </div>
            <span class="button button--16${_('buttonBackgroundClassName')}">
              <span class="button__label${_('buttonTextClassName')}">
                Start your website
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  `.trim()
}
