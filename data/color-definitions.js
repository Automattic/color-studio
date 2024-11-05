/* eslint-disable camelcase */

module.exports = {
  config: {
    steps: 12,
  },
  colors: [
    {
      name: 'Gray',
      default: 50,
      specs: {
        hue_start: 220,
        hue_end: 200,
        hue_curve: 'easeInQuad',
        sat_steps: [
          0.5, 1, 2, 3.5, 5.5, 8, 11, 15, 19, 22.5, 26.5, 30,
        ],
        lum_steps: [
          97, 87, 78, 68, 58, 51, 44, 37, 29, 22.1, 15.3, 9,
        ],
      },
    },
    {
      name: 'Blue',
      default: 50,
      specs: {
        hue_steps: [
          205, 205, 205, 205, 205, 205, 205, 205, 204, 203, 201, 200,
        ],
        sat_steps: [
          5, 25, 40, 55, 75, 90, 97, 97, 97, 98, 98, 99,
        ],
        lum_steps: [
          96, 98, 95, 91, 89, 86, 77, 61, 48, 36, 24, 13,
        ],
      },
    },
    {
      name: 'Purple',
      default: 50,
      specs: {
        hue_start: 330,
        hue_end: 290,
        hue_curve: 'easeOutQuad',
        sat_steps: [
          4, 12, 23, 32.6, 40.6, 47.2, 52.4, 56.4, 59.5, 61.6, 63, 64,
        ],
        lum_steps: [
          95, 92, 89, 83, 77, 70, 61, 51, 43, 33, 23, 13,
        ],
      },
    },
    {
      name: 'Pink',
      default: 50,
      specs: {
        hue_start: 340,
        hue_end: 330,
        hue_curve: 'easeInQuad',
        sat_steps: [
          5, 15, 32, 45.9, 57.1, 66.4, 73.7, 79.3, 83.6, 86.7, 88.8, 90,
        ],
        lum_steps: [
          96, 95, 97, 95, 92, 89, 79, 67, 55, 44, 31, 15,
        ],
      },
    },
    {
      name: 'Red',
      default: 50,
      specs: {
        hue_start: 355,
        hue_end: 360,
        hue_curve: 'easeOutQuad',
        sat_steps: [
          5, 17, 33, 50, 60, 65, 75, 75, 74, 73, 73, 73,
        ],
        lum_steps: [
          97, 98, 100, 100, 97.4, 90, 84, 70, 54, 41, 27, 14,
        ],
      },
    },
    {
      name: 'Orange',
      default: 50,
      specs: {
        hue_start: 25,
        hue_end: 35,
        hue_curve: 'easeOutQuad',
        sat_steps: [
          6, 20, 47.3, 66.3, 82.6, 96, 100, 100, 100, 100, 100, 100,
        ],
        lum_steps: [
          96, 97, 100, 98, 90, 84, 69.9, 54, 44, 33, 21, 12,
        ],
      },
    },
    {
      name: 'Yellow',
      default: 50,
      specs: {
        hue_steps: [
          47, 47, 48, 48, 48, 44, 42, 41.2, 40.7, 40.3, 40, 40,
        ],
        sat_steps: [
          8, 27, 56, 80, 100, 100, 100, 100, 100, 100, 100, 100,
        ],
        lum_steps: [
          96, 96, 95, 94, 87, 75.1, 61.6, 49, 40.5, 31, 20, 11,
        ],
      },
    },
    {
      name: 'Green',
      default: 50,
      specs: {
        hue_steps: [
          130, 130, 135, 140.2, 137.6, 135.5, 133.8, 132.5, 131.5, 130.8, 130.3, 130,
        ],
        sat_steps: [
          5, 20, 53, 85.8, 100, 100, 100, 100, 100, 100, 100, 100,
        ],
        lum_steps: [
          95, 90, 87, 82, 73, 64, 54, 44, 36, 27, 19, 11,
        ],
      },
    },
    {
      name: 'Celadon',
      default: 50,
      specs: {
        hue_start: 160,
        hue_end: 165,
        hue_curve: 'easeOutQuad',
        sat_steps: [
          6, 28, 54, 76, 95, 100, 100, 100, 100, 100, 100, 100,
        ],
        lum_steps: [
          95, 91, 87, 80, 71, 62, 53, 44, 36, 27, 19, 11,
        ],
      },
    },
    {
      name: 'Automattic Blue',
      default: 30,
      specs: {
        hue_start: 204,
        hue_end: 196,
        hue_curve: 'easeOutSine',
        sat_steps: [
          6, 20, 44, 61, 84, 90, 99, 98, 98, 97, 96, 94,
        ],
        lum_steps: [
          98, 96, 95, 91, 88, 78, 66, 52, 43.2, 30, 21, 14,
        ],
      },
    },
    {
      name: 'WordPress Blue',
      default: 50,
      specs: {
        hue_steps: [
          220, 231, 228, 228.5, 230.5, 230, 229, 229.8, 230.5, 229, 229, 228,
        ],
        sat_steps: [
          1, 2.8, 14, 29, 51.8, 65.4, 76, 79.5, 84, 77, 78, 78,
        ],
        lum_steps: [
          99.5, 99.5, 97.5, 95.3, 100, 95.3, 91.4, 80.8, 70.5, 52.5, 35.3, 17.7,
        ],
      },
    },
    {
      name: 'Simplenote Blue',
      default: 50,
      specs: {
        hue_steps: [
          222, 222, 222, 222, 222, 222, 222, 222.3, 222.7, 223.1, 223.6, 224,
        ],
        sat_steps: [
          5, 15, 30, 45, 60, 70, 75, 85, 90, 90, 90, 90,
        ],
        lum_steps: [
          96, 95, 96, 94, 95, 92, 80, 77, 68, 52, 36, 18,
        ],
      },
    },
    {
      name: 'WooCommerce Purple',
      default: 50,
      specs: {
        hue_steps: [
          257, 255, 255, 259, 259, 262.69, 267, 267, 267, 266.44, 266.97, 267,
        ],
        sat_steps: [
          7, 15.7, 24.3, 40, 50.6, 75.69, 94.1, 96.1, 95.9, 93.65, 95.7, 95.5,
        ],
        lum_steps: [
          100, 100, 100, 100, 100, 100, 92.5, 80.8, 66.7, 49.41, 36.47, 25.9,
        ],
      },
    },
    {
      name: 'Jetpack Green',
      default: 40,
      specs: {
        hue_start: 80,
        hue_end: 140,
        hue_curve: 'easeOutSine',
        sat_steps: [
          3, 20, 45, 67, 83, 96.2, 100, 100, 100, 100, 100, 100,
        ],
        lum_steps: [
          95, 90, 85, 79.1, 70.6, 61.9, 53, 44.3, 35.6, 27.2, 19, 11,
        ],
      },
    },
  ],
}
