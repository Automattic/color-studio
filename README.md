[dist-android]: dist/android/colors.xml
[dist-extensions]: dist/extensions/
[dist-ios]: dist/ios/
[dist-json]: dist/colors.json
[dist-preview]: dist/meta/preview.png
[dist-css-classes]: dist/color-classes.css
[dist-css-properties]: dist/color-properties.css
[dist-scss-variables]: dist/color-variables.scss
[dist-sketchpalette]: dist/colors.sketchpalette

[docs-custom]: https://automattic.github.io/color-studio/custom.html
[docs-index]: https://automattic.github.io/color-studio/

# Color Studio

> The color palette for Automattic products.

## What’s Inside

Color Studio generates the following:

* [Online documentation][docs-index] with contrast ratios and click-to-copy hex values.
* Several stylesheets that can be [imported](#scss) or linked to within any project:
    * [CSS partial][dist-css-properties] with all colors defined as custom properties.
    * [SCSS partial][dist-scss-variables] with all colors defined as variables.
    * [CSS file][dist-css-classes] with all colors defined in separate classes.
* [Sketch palette file][dist-sketchpalette] that can be imported using the [Sketch Palettes](https://github.com/andrewfiorillo/sketch-palettes) plugin.
* [Custom color tester][docs-custom] that runs Color Studio’s formula against any specified value.

Also:

* [JSON file][dist-json] with all the color values for [further use](#javascript).
* [XML file][dist-android] with all the color values for Android apps.
* [iOS asset container][dist-ios] with all the color values defined in the `.colorset` format.
* The preview image below and [extensions][dist-extensions].

## The Palette

[![Color palette preview][dist-preview]][docs-index]

## Using Color Studio as a Dependency

```sh
npm install color-studio
```

This package is dependency-free.

### SCSS

```scss
@import "~@automattic/color-studio/dist/color-variables";

button {
  background: $muriel-hot-pink-500;
  color: $muriel-white;
}
```

### JavaScript

```js
const PALETTE = require('@automattic/color-studio')
```

The above imports the contents of the [JSON file][dist-json].

## Development

```sh
# Generate the JSON file, the stylesheets, and the Sketch palette file
yarn palette

# Build the documentation assets from `docs-source`
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
