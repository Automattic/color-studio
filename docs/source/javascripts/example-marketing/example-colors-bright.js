const { contrast } = require('chroma-js')
const floor = require('lodash/floor')
const repeat = require('lodash/repeat')
const extend = require('../../../../utilities/extend')
const getValueFromClassName = require('./example/get-value-from-class-name')

const COLOR_COMBINATIONS = require('./data/example-colors-bright.json')

document.querySelector('#example-output').innerHTML = getOutputString()

function getOutputString() {
  const examples = getExamples()
  const outputString = examples.map(getExampleMarkup).join('')
  return `<div class="examples examples--gap-12 examples--columns-2">${outputString}</div>`
}

function getExamples() {
  const examples = []

  COLOR_COMBINATIONS.examples.forEach(example => {
    const _ = key => {
      return example[key] || COLOR_COMBINATIONS.defaults[key] || []
    }

    _('button-background').forEach(buttonBackgroundClassName => {
      _('hero-heading').forEach(heroHeadingClassName => {
        _('hero-text').forEach(heroTextClassName => {
          _('hero-background').forEach(heroBackgroundClassName => {
            const data = formatExampleData({
              heroBackgroundClassName,
              heroHeadingClassName,
              heroTextClassName,
              buttonBackgroundClassName
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
  return extend(data, {
    title: formatExampleMetaString(data)
  })
}

function formatExampleMetaString(data) {
  const heroBackgroundColor = getValueFromClassName(data.heroBackgroundClassName)
  const heroHeadingColor = getValueFromClassName(data.heroHeadingClassName)
  const heroTextColor = getValueFromClassName(data.heroTextClassName)
  const indent = repeat(' ', 10)

  const meta = [
    `${formatContrastRatio('Heading', heroHeadingColor, heroBackgroundColor)}`,
    `${indent}.${data.heroHeadingClassName}`,
    `${indent}.${data.heroBackgroundClassName}`,
    `${formatContrastRatio('Copy', heroTextColor, heroBackgroundColor)}`,
    `${indent}.${data.heroTextClassName}`,
    `${indent}.${data.heroBackgroundClassName}`
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
