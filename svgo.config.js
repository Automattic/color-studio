const { extendDefaultPlugins } = require('svgo')

module.exports = {
  multipass: true,
  plugins: extendDefaultPlugins([
    {
      name: 'cleanupNumericValues',
      params: {
        floatPrecision: 2,
      },
    },
    {
      name: 'convertPathData',
      params: {
        floatPrecision: 2,
      },
    },
    'removeOffCanvasPaths',
    'removeRasterImages',
    'sortAttrs',
  ]),
}
