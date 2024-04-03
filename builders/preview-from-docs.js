const path = require('node:path')
const puppeteer = require('puppeteer')

const INPUT_PATH = path.join(__dirname, '../docs/dist/index.html')
const OUTPUT_PATH = path.join(__dirname, '../dist/preview.png')

generatePreview()

async function generatePreview() {
  let height = 1

  const width = 1500
  const deviceScaleFactor = 2

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  const setViewport = () => page.setViewport({
    width,
    height,
    deviceScaleFactor,
  })

  await setViewport()
  await page.goto(`file://${INPUT_PATH}`)
  await page.evaluate(() => {
    /* eslint-env browser */

    // Keep the colors only
    const element = document.querySelector('#studio-navbar')
    element.remove()

    // Find every single tile and turn on their preview styling
    const elements = document.querySelectorAll('.tile')
    Array.from(elements).forEach(element => {
      element.classList.add('tile--preview')
    })

    // Remove excess whitespace
    document.querySelector('#studio-color-tiles > :first-child').classList.remove('pt-1')
    document.querySelector('#studio-color-tiles > :last-child').classList.remove('pb-1')

    // Save the actual height of the page
    height = document.body.scrollHeight
  })

  await setViewport()
  await page.screenshot({
    path: OUTPUT_PATH,
    fullPage: true,
  })

  await browser.close()
}
