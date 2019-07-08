/* eslint-disable camelcase */

const bezier = require('bezier-easing')

module.exports = {
  config: {
    steps: 12
  },
  colors: [
    {
      name: 'Gray',
      specs: {
        hue_start: 350,
        hue_end: 200,
        hue_curve: 'easeOutQuad',
        sat_start: 4,
        sat_end: 100,
        sat_curve: 'easeInSine',
        sat_rate: 30,
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.45, 0.35, 0.5, 0.5)
      }
    },
    {
      name: 'Blue',
      specs: {
        hue_start: 210,
        hue_end: 200,
        hue_curve: 'easeInQuad',
        sat_start: 5,
        sat_end: 90,
        sat_curve: 'easeOutQuad',
        sat_rate: 110,
        lum_start: 97,
        lum_end: 11,
        lum_curve: 'easeOutSine'
      }
    },
    {
      name: 'Purple',
      specs: {
        hue_start: 330,
        hue_end: 280,
        hue_curve: 'easeOutQuad',
        sat_start: 5,
        sat_end: 80,
        sat_curve: 'easeOutQuad',
        sat_rate: 78,
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.35, 0.5, 0.65, 0.95)
      }
    },
    {
      name: 'Pink',
      specs: {
        hue_start: 340,
        hue_end: 330,
        hue_curve: 'easeInQuad',
        sat_start: 5,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 88,
        lum_start: 97,
        lum_end: 11,
        lum_curve: 'easeOutQuad'
      }
    },
    {
      name: 'Red',
      specs: {
        hue_start: 355,
        hue_end: 360,
        hue_curve: 'easeOutQuad',
        sat_start: 5,
        sat_end: 70,
        sat_curve: 'easeOutQuad',
        sat_rate: 130,
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.4, 0.65, 0.2, 1)
      }
    },
    {
      name: 'Orange',
      specs: {
        hue_start: 30,
        hue_end: 40,
        hue_curve: 'easeOutQuad',
        sat_start: 5,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 130,
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.7, 0.7, 0.35, 1)
      }
    },
    {
      name: 'Yellow',
      specs: {
        hue_start: 40,
        hue_end: 50,
        hue_curve: 'easeOutQuad',
        sat_start: 5,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 140,
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.5, 0.5, 0.37, 1)
      }
    },
    {
      name: 'Green',
      specs: {
        hue_start: 95,
        hue_end: 155,
        hue_curve: 'easeOutSine',
        sat_start: 5,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 125,
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.5, 0.5, 0.85, 1)
      }
    },
    {
      name: 'Celadon',
      specs: {
        hue_start: 160,
        hue_end: 170,
        hue_curve: 'easeOutQuad',
        sat_start: 5,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 118,
        lum_start: 97,
        lum_end: 11,
        lum_curve: 'linear'
      }
    },
    {
      name: 'WordPress Blue',
      specs: {
        hue_start: 197,
        hue_end: 205,
        hue_curve: 'easeInExpo',
        sat_start: 5,
        sat_end: 100,
        sat_curve: 'easeOutSine',
        sat_rate: 130,
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.45, 0.35, 0.6, 0.85)
      }
    },
    {
      name: 'Jetpack Green',
      specs: {
        hue_start: 80,
        hue_end: 140,
        hue_curve: 'easeOutSine',
        sat_start: 5,
        sat_end: 100,
        sat_curve: 'easeOutQuad',
        sat_rate: 130,
        lum_start: 97,
        lum_end: 11,
        lum_curve: bezier(0.5, 0.5, 0.85, 1)
      }
    }
  ]
}
