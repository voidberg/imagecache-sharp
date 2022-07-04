[ ![Codeship Status for voidberg/imagecache-sharp](https://app.codeship.com/projects/2adcc0e0-31b3-0135-88a3-36beedd22907/status?branch=master)](https://app.codeship.com/projects/225818)[![Latest release on NPM](https://img.shields.io/npm/v/imagecache-sharp.svg)](https://www.npmjs.com/package/imagecache-sharp)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![David-dm.org](https://david-dm.org/voidberg/imagecache-sharp.svg)](https://david-dm.org/voidberg/imagecache-sharp#info=dependencies&view=table)
[![David-dm.org](https://david-dm.org/voidberg/imagecache-sharp/dev-status.svg)](https://david-dm.org/voidberg/imagecache-sharp#info=devDependencies&view=table)
[![Apache 2.0 License](https://img.shields.io/npm/l/imagecache-sharp.svg)](https://opensource.org/licenses/Apache-2.0)

## What is it?

Node image generation module based on [sharp](https://github.com/lovell/sharp) and inspired by Drupal's image styles.

## Installation

- `npm install imagecache-sharp`

## Usage

```
import { ImageCache, Image } from "../src/imagecache";
import presets from "./presets";

const imagecache: ImageCache = new ImageCache(presets);

const image: Image = await imagecache.render(
  "./in.png",
  "canvas_scale_with_blur"
);

// Save the image
await image.toFile("out_canvas_scale_with_blur.png");

// Get a buffer, stream it etc
image.toBuffer(...)
```

The render function returns a `sharp.Sharp` instance (`Image` is just an alias for it) which can be used in various ways for outputting the final image. For a list of options see [sharp's documentation](https://sharp.pixelplumbing.com/api-constructor).

## Presets structure

A preset is defined like this:

```
type Preset = {
  presetName: string;
  actions: Action[];
};
```

An action contains an operation (which is defined by the plugins) and an optional config.

```
type Action = {
  action: string;
  config?: any;
};
```

Here are two example presets. The first one resizes and crops the image, puts it on a bigger canvas, then blurs it. The second one resizes and crops the image.

```
export default [
  {
    presetName: "canvas_scale_with_blur",
    actions: [
      {
       action: "scale_and_crop",
       config: {
          width: 152,
          height: 152,
        },
      },
      {
        action: "define_canvas",
        config: {
          color: "#333333",
          width: 400,
          height: 400,
        },
      },
      {
        action: "blur",
      },
    ],
  },
  {
    presetName: "scale_crop_tiny",
    actions: [
      {
        action: "scale_and_crop",
        config: {
          width: 32,
          height: 32,
        },
      },
    ],
  }
];
```

## Imagecache actions:

### Blur

Blurs the image.

Action name: `blur`.

Configuration:

- `sigma`: A value between 0.3 and 1000 representing the sigma of the Gaussian mask. Defaults to `50`.

### Define canvas

Defines a new canvas and overlays the current image.

Action name: `define_canvas`.

Configuration:

- `width`: The width of the canvas.
- `height`: The height of the canvas.
- `channels`: Number of channels. Defaults to `4`.
- `background`: The background colour of the canvas in hex format.

### File

Loads an image and overlays it on the current image.

Action name: `file`.

Configuration:

- `path`: The path of the file.
- `gravity`: Gravity at which to place the overlay. Possible values are `north`, `northeast`, `east`, `southeast`, `south`, `southwest`, `west`, `northwest`, `center` and `centre`. Defaults to `center`.
- `tile`: Set to true to repeat the overlay image across the entire image with the given `gravity`. Defaults to `false`.

### Flip

Flips the image on a given axis.

Action name: `flip`.

Configuration:

- `axis`: The axis to flip on. Defaults to `y`.

### Gamma

Apply a gamma correction to the image.

Action name: `gamma`.

Configuration:

- `gamma`: Value between 1.0 and 3.0. Defaults to `2.2`.

### Greyscale

Convert to 8-bit greyscale, 256 shades of grey.

Action name: `greyscale`.

### Negate

Produce the "negative" of the image.

Action name: `negate`.

### Normalize

Enhance output image contrast by stretching its luminance to cover the full dynamic range.

Action name: `normalize`.

### Rotate

Rotates the image based on the EXIF data or at a specified angle.

Action name: `rotate`.

Configuration:

- `angle`: Angle, multiple of 90. Defaults to `auto` which uses EXIF.

### Scale

Scales the image ignoring the aspect ratio.

Action name: `scale`.

Configuration:

- `width`: The width of the new image. Can be a number or a percent value.
- `height`: The height of the new image. Can be a number or a percent value.

### Scale and crop

Scales and crops the image maintaining the aspect ratio.

Action name: `scale_and_crop`.

Configuration:

- `width`: The width of the new image. Can be a number or a percent value.
- `height`: The height of the new image. Can be a number or a percent value.
- `gravity`: Where to crop from. Possible values are `north`, `northeast`, `east`, `southeast`, `south`, `southwest`, `west`, `northwest`, `center` and `centre`. Defaults to `center`.

### Sharpen

Sharpen the image.

Action name: `sharpen`.

Configuration:

- `sigma`: The sigma of the Gaussian mask. Defaults to `1`.
- `flat`: The level of sharpening to apply to "flat" areas. Defaults to `1.0`.
- `jagged`: The level of sharpening to apply to "jagged" areas. Defaults to `2.0`.
