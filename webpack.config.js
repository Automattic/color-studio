const path = require('node:path')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const RenameFilePlugin = require('rename-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.join(__dirname, 'docs/source'),
  entry: {
    'docs-css': './stylesheets/docs/docs.scss',
    'docs-debug-js': './javascripts/docs/docs-debug.js',
    'docs-index-js': './javascripts/docs/docs-index.js',
    'example-android-css': './stylesheets/example-android/example.scss',
    'example-android-js': './javascripts/example-android/example.js',
    'example-marketing-css': './stylesheets/example-marketing/example.scss',
    'example-marketing-colors-bright-js': './javascripts/example-marketing/example-colors-bright.js',
    'example-marketing-colors-dark-js': './javascripts/example-marketing/example-colors-dark.js',
    'example-woocommerce-css': './stylesheets/example-woocommerce/example.scss',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: [
          {
            loader: MiniExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer'),
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.sketchpalette$/,
        use: 'raw-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'docs/dist/assets'),
    filename: '[name].js',
  },
  plugins: [
    new MiniExtractPlugin({
      filename: '[name].css',
    }),
    new RenameFilePlugin({
      originNameReg: /(.*)-css.css/,
      targetName: '$1.css',
    }),
    new RenameFilePlugin({
      originNameReg: /(.*)-js.js/,
      targetName: '$1.js',
    }),
  ],
  stats: {
    entrypoints: false,
    modules: false,
    warnings: false,
  },
  devServer: {
    port: 3003,
    static: {
      directory: path.join(__dirname, 'docs/dist'),
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  performance: {
    hints: false,
  },
}
