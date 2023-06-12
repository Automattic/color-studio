const { contrast } = require('chroma-js')
const floor = require('lodash/floor')
const repeat = require('lodash/repeat')
const extend = require('../../../../utilities/extend')
const getValueFromClassName = require('./example/get-value-from-class-name')
const COLOR_COMBINATIONS = require('./data/example-colors-dark.json')

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

    _('button-background').forEach(buttonBackgroundClassName => {
      _('hero-text').forEach(heroTextClassName => {
        _('hero-background').forEach(heroBackgroundClassName => {
          const data = formatExampleData({
            heroBackgroundClassName,
            heroTextClassName,
            buttonBackgroundClassName,
          })

          examples.push(data)
        })
      })
    })
  })

  return examples
}

function formatExampleData(data) {
  return extend(data, {
    title: formatExampleMetaString(data),
  })
}

function formatExampleMetaString(data) {
  const heroBackgroundColor = getValueFromClassName(data.heroBackgroundClassName)
  const heroTextColor = getValueFromClassName(data.heroTextClassName)
  const indent = repeat(' ', 10)

  const meta = [
    `${formatContrastRatio('Text', heroTextColor, heroBackgroundColor)}`,
    `${indent}.${data.heroTextClassName}`,
    `${indent}.${data.heroBackgroundClassName}`,
  ]

  return `title="${meta.join('\n')}"`
}

function formatContrastRatio(title, foreground, background) {
  const colorContrast = contrast(foreground, background)
  const contrastIcon = colorContrast >= 4.5 ? '✅' : '🔴'

  return `${contrastIcon} ${title} (${floor(colorContrast, 2)})`
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
          <div class="container__wrapper${_('heroTextClassName')} text-18">
            <p class="text-56 text-brand">
              Build a website,<span class="br"></span>
              build a movement.
            </p>
            <p class="py-24">
              Whatever you want to create, share, or sell,<span class="br"></span>
              we’ll help you do it right here.
            </p>
            <span class="button${_('buttonBackgroundClassName')}">
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
