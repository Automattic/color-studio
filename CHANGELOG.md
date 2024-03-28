# Releases

## 2.6.0

* Added a new color palette: Automattic Blue.

## 2.5.0

* _No changes to color values._
* The default Jetpack brand color now points to Jetpack Green 40.

## 2.4.0

* _WordPress Blue is now considered deprecated in favor of Blue._
* Adjusted Blue (all shades).
* Adjusted Celadon 5–100.
* Removed the `.sketchpalette` export.

## 2.3.1

* _No changes to color values._
* Included a stylesheet with SCSS variables that return RGB values.

## 2.3.0

* Added a new color: Simplenote Blue.
* Adjusted Yellow (all shades).
* Adjusted Gray 30 to make it AA Large-accessible against Gray 0.
* Included a stylesheet with the colors defined as class names with higher specificity.

## 2.2.1

* _No changes to color values._
* Dropped the `engines` constraint for the `npm` package.

## 2.2.0

* Adjusted the level of luminosity in the brighter end of the palette.
* The custom properties in CSS exports are no longer aliased in favor of using direct values.
* Colors affected by this release:
  ```
  Blue:               0, 5, 10
  Purple:             0, 5, 10
  Pink:               0, 5, 10
  Red:                0, 5, 10
  Orange:             0, 5
  Yellow:             0, 5
  Green:              0, 5, 10
  Celadon:            0, 5
  WordPress Blue:     0, 5, 10
  WooCommerce Purple: 0, 5, 10
  Jetpack Green:      0, 5, 10
  ```

## 2.1.0

* Adjusted Gray 0–70.
* Added a new color: WooCommerce Purple.

## 2.0.1

* _No changes to color values._
* Included a stylesheet with CSS custom properties that return RGB values.
* Base color name are now aliased to the their respective primary shades in all the formats, for both generic and brand colors:

  ```
  Gray    → Gray 50
  Blue    → Blue 50
  Purple  → Purple 50
  Pink    → Pink 50
  Red     → Red 50
  Orange  → Orange 50
  Yellow  → Yellow 50
  Green   → Green 50
  Celadon → Celadon 50

  WordPress Blue → WordPress Blue 50
  Jetpack Green  → Jetpack Green 30
  ```

## 2.0.0

* Redesigned the whole color palette.
* Introduced the new API with no backward compatibility.

## Past Versions

### 1.0.6

* Bumped the package version to 1.0.6 and published it in the `npm` registry under `@automattic/color-studio`.

### 1.0.5

* Bumped the package version to 1.0.5 and published it in the `npm` registry under `color-studio` (now deprecated).

### 1.0.4

* Fix the iOS format bug where some color names would be generated with spaces instead of dashes.

### 1.0.3

* Included the exports for iOS and Android.

### 1.0.2

* Included the stylesheet with the colors defined as custom properties.

### 1.0.1

* Bumped the package version to 1.0.1 because `yarn` doesn’t support non-semver values.

### 1.0.0.1

* Included the stylesheet with color classes.

### 1.0.0

* The initial release.
