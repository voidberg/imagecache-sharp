[ ![Codeship Status for voidberg/imagecache-sharp](https://app.codeship.com/projects/2adcc0e0-31b3-0135-88a3-36beedd22907/status?branch=master)](https://app.codeship.com/projects/225818)[![Latest release on NPM](https://img.shields.io/npm/v/imagecache-sharp.svg)](https://www.npmjs.com/package/imagecache-sharp)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![David-dm.org](https://david-dm.org/voidberg/imagecache-sharp.svg)](https://david-dm.org/voidberg/imagecache-sharp#info=dependencies&view=table)
[![David-dm.org](https://david-dm.org/voidberg/imagecache-sharp/dev-status.svg)](https://david-dm.org/voidberg/imagecache-sharp#info=devDependencies&view=table)
[![Apache 2.0 License](https://img.shields.io/npm/l/imagecache-sharp.svg)](https://opensource.org/licenses/Apache-2.0)

## What is it?

Node image generation module based on [sharp](https://github.com/lovell/sharp) and inspired by Drupal's image styles.

## Installation

* `npm install imagecache-sharp`

## Usage

```
import presets from './presets';
import ImageCache from 'imagecache';

const imagecache = new ImageCache(presets);

imagecache.render('./in.png', 'preset_one', (err, sharpInstance) => {
	if (err) {
		throw err;
	}

  // Save the image
  sharpInstance.toFile('out.png', (err, info) => {
	  // ...
  });

  // Get a buffer, stream it etc
  sharpInstance.toBuffer((err, data, info) => {
	  // ...
  });
})
```

The render callback returns a `sharp` instance which can be used in various ways for outputting the final image. For a list of options see [sharp's documentation](http://sharp.dimens.io/en/stable/api-output/).

## Presets structure

```
{
  preset_one: {
    presetname: 'preset_one',
    actions: [
      {
        action: 'scale_and_crop',
        config: {
          width: 100,
          height: 300
        }
      },
      {
        action: 'define_canvas',
        config: {
          color: '#333333',
	        width: 400,
	        height: 400,
	        xpos: 'center',
	        ypos: 'center'
        }
      }
    ]
  },
  preset_two: {
    presetname: 'preset_two',
    actions: [
      {
        action: 'scale_and_crop',
        config: {
          width: 70,
          height: 70,
        }
      }
    ]
  }
}
```

## Imagecache actions:

* Blur [✓]
* Define canvas [✓]
* File [✓]
* Flip [✓]
* Gamma [✓]
* Greyscale [✓]
* Negate [✓]
* Normalize [✓]
* Rotate [✓]
* Scale [✓]
* Scale and crop [✓]
* Sharpen [✓]
