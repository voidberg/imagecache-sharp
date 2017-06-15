import presets from './presets';
import ImageCache from '../dist/index';

const imagecache = new ImageCache(presets);

imagecache.render('./in.png', 'canvas_scale_with_blur', (err, image) => {
  if (err) {
    console.log('Failed to process image in.png with preset canvas_scale_with_blur.');
    console.log(err);

    return;
  }

  image.toFile('out_canvas_scale_with_blur.png', (saveErr, info) => {
    if (saveErr) {
      console.log('Failed to save image out_canvas_scale_with_blur.png.');
      console.log(err);

      return;
    }

    console.log(`Saved image out_canvas_scale_with_blur.png with width ${info.width} and height ${info.height}.`);
  });
});

imagecache.render('./in.png', 'scale_crop_tiny', (err, image) => {
  if (err) {
    console.log('Failed to process image in.png with preset scale_crop_tiny.');
    console.log(err);

    return;
  }

  image.toFile('out_scale_crop_tiny.png', (saveErr, info) => {
    if (saveErr) {
      console.log('Failed to save image out_scale_crop_tiny.png.');
      console.log(err);

      return;
    }

    console.log(`Saved image out_scale_crop_tiny.png with width ${info.width} and height ${info.height}.`);
  });
});

imagecache.render('./in.png', 'scale_crop_small', (err, image) => {
  if (err) {
    console.log('Failed to process image in.png with preset scale_crop_small.');
    console.log(err);

    return;
  }

  image.toFile('out_scale_crop_small.png', (saveErr, info) => {
    if (saveErr) {
      console.log('Failed to save image out_scale_crop_small.png.');
      console.log(err);

      return;
    }
    console.log(`Saved image out_scale_crop_small.png with width ${info.width} and height ${info.height}.`);
  });
});

imagecache.render('./in.png', 'scale_crop_teaser', (err, image) => {
  if (err) {
    console.log('Failed to process image in.png with preset scale_crop_teaser.');
    console.log(err);

    return;
  }

  image.toFile('out_scale_crop_teaser.png', (saveErr, info) => {
    if (saveErr) {
      console.log('Failed to save image out_scale_crop_teaser.png.');
      console.log(err);

      return;
    }

    console.log(`Saved image out_scale_crop_teaser.png with width ${info.width} and height ${info.height}.`);
  });
});

imagecache.render('./in.png', 'scale_with_watermark', (err, image) => {
  if (err) {
    console.log('Failed to process image in.png with preset scale_with_watermark.');
    console.log(err);

    return;
  }

  image.toFile('out_scale_with_watermark.png', (saveErr, info) => {
    if (saveErr) {
      console.log('Failed to save image out_scale_with_watermark.png.');
      console.log(err);

      return;
    }

    console.log(`Saved image out_scale_with_watermark.png with width ${info.width} and height ${info.height}.`);
  });
});
