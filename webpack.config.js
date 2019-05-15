const path = require('path')

const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const RenameFilePlugin = require('rename-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.join(__dirname, '/docs-source'),
  entry: {
    /* eslint-disable quote-props */

    'docs-css': './stylesheets/docs/docs.scss',
    'docs-js': './javascripts/docs/docs.js',

    'docs-example-android-css': './stylesheets/docs-example-android/example.scss',
    'docs-example-calypso-css': './stylesheets/docs-example-calypso/calypso.scss'

    /* eslint-enable quote-props */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, '/node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env'
            ],
            plugins: [
              'transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: path.join(__dirname, '/node_modules'),
        use: [
          {
            loader: MiniExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/i,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.sketchpalette$/,
        use: 'raw-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/docs/assets'),
    filename: '[name].js'
  },
  plugins: [
    new MiniExtractPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new ExtraneousFileCleanupPlugin({
      extensions: [
        '.js'
      ]
    }),
    new RenameFilePlugin({
      originNameReg: /(.*)-css.css/,
      targetName: '$1.css'
    }),
    new RenameFilePlugin({
      originNameReg: /(.*)-js.js/,
      targetName: '$1.js'
    })
  ]
}
