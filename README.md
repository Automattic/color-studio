[dist-android]: dist/android/colors.xml
[dist-css-classes]: dist/color-classes.css
[dist-css-properties]: dist/color-properties.css
[dist-extensions]: dist/extensions/
[dist-ios]: dist/ios/
[dist-json]: dist/colors.json
[dist-preview]: dist/preview.png
[dist-scss-variables]: dist/color-variables.scss
[dist-sketchpalette]: dist/colors.sketchpalette

[home]: https://color-studio.blog

# Color Studio

> The computational color palette for Automattic products.

## What’s Inside

Color Studio generates the following:

* [Online documentation][home] with contrast ratios and click-to-copy hex values.
* Several stylesheets that can be [imported](#scss) or linked to within any project:
    * [CSS partial][dist-css-properties] with all colors defined as custom properties.
    * [SCSS partial][dist-scss-variables] with all colors defined as variables.
    * [CSS file][dist-css-classes] with all colors defined in separate classes.
* [Sketch palette file][dist-sketchpalette] that can be imported using the [Sketch Palettes](https://github.com/andrewfiorillo/sketch-palettes) plugin.

Also:

* [JSON file][dist-json] with all the color values for [further use](#javascript).
* [XML file][dist-android] with all the color values for Android apps.
* [iOS asset container][dist-ios] with all the color values defined in the `.colorset` format.
* The preview image below and [extensions][dist-extensions].

## The Palette

[![Color palette preview][dist-preview]][home]

## Using Color Studio as a Dependency

```sh
npm install color-studio
```

This package is dependency-free.

### SCSS

```scss
@import "~color-studio/dist/color-variables";

button {
  background: $studio-pink-50;
  color: $studio-white;
}
```

### JavaScript

```js
const PALETTE = require('color-studio')

console.log(PALETTE.colors['Pink 50'])
```

The above imports the contents of the [JSON file][dist-json].

## Development

```sh
# Spin up Color Studio
yarn install

# Generate the JSON file, the stylesheets, and the Sketch palette file
yarn palette

# Build the documentation and example assets from `docs-source`
yarn docs
yarn docs:watch

# Build and link the Sketch extension
yarn sketch
yarn sketch:watch

# Generate the preview image (by taking a screenshot of the documentation)
yarn meta
```

All those commands run automatically before every commit and so does the linter.

## License

Color Studio is licensed under [GNU General Public License v2.0 (or later)](LICENSE.md).
