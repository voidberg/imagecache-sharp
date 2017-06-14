import presets from './presets';
import ImageCache from '../dist/index';

const imagecache = new ImageCache(presets);

imagecache.render('./in.png', 's_crop_tiny', (err, image) => {
  if (err) {
    console.log('Failed to process image out_s_crop_tiny.png.');
    console.log(err);

    return;
  }

  image.toFile('out_s_crop_tiny.png', (saveErr, info) => {
    if (saveErr) {
      console.log('Failed to save image out_s_crop_tiny.png.');
      console.log(err);

      return;
    }

    console.log(`Saved image out_s_crop_tiny.png with width ${info.width} and height ${info.height}.`);
  });
});

imagecache.render('./in.png', 's_crop_small', (err, image) => {
  if (err) {
    console.log('Failed to process image out_s_crop_small.png.');
    console.log(err);

    return;
  }

  image.toFile('out_s_crop_small.png', (saveErr, info) => {
    if (saveErr) {
      console.log('Failed to save image out_s_crop_small.png.');
      console.log(err);

      return;
    }
    console.log(`Saved image out_s_crop_small.png with width ${info.width} and height ${info.height}.`);
  });
});

imagecache.render('./in.png', 's_crop_teaser', (err, image) => {
  if (err) {
    console.log('Failed to process image out_s_crop_teaser.png.');
    console.log(err);

    return;
  }

  image.toFile('out_s_crop_teaser.png', (saveErr, info) => {
    if (saveErr) {
      console.log('Failed to save image out_s_crop_teaser.png.');
      console.log(err);

      return;
    }

    console.log(`Saved image out_s_crop_teaser.png with width ${info.width} and height ${info.height}.`);
  });
});

imagecache.render('./in.png', 's_scale_teaser', (err, image) => {
  if (err) {
    console.log('Failed to process image out_s_scale_teaser.png.');
    console.log(err);

    return;
  }

  image.toFile('out_s_scale_teaser.png', (saveErr, info) => {
    if (saveErr) {
      console.log('Failed to save image out_s_scale_teaser.png.');
      console.log(err);

      return;
    }

    console.log(`Saved image out_s_scale_teaser.png with width ${info.width} and height ${info.height}.`);
  });
});
