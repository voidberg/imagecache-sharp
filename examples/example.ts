import { ImageCache } from "../src/imagecache";
import presets from "./presets";

const imagecache = new ImageCache(presets);

const example_scale_with_blur = async () => {
  try {
    const image = await imagecache.render("./in.png", "canvas_scale_with_blur");
    await image.toFile("out_canvas_scale_with_blur.png");
    console.log("Finished.");
  } catch (e) {
    console.log("Caught error");
    console.log(e);
  }
};

const example_scale_with_watermark = async () => {
  try {
    const image = await imagecache.render("./in.png", "scale_with_watermark");
    await image.toFile("out_scale_with_watermark.png");
    console.log("Finished.");
  } catch (e) {
    console.log("Caught error");
    console.log(e);
  }
};

example_scale_with_blur();
example_scale_with_watermark();

// imagecache.render('./in.png', 'canvas_scale_with_blur')
//   .then(image => {
//     image
//       .toFile('out_canvas_scale_with_blur.png')
//       .then(info => {
//         console.log(`Saved image out_canvas_scale_with_blur.png with width ${info.width} and height ${info.height}.`);
//       })
//       .catch(err => {
//         console.log('Failed to save image out_canvas_scale_with_blur.png.');
//         console.log(err);
//       });
//   })
//   .catch(err => {
//     console.log('Failed to process image in.png with preset canvas_scale_with_blur.');
//     console.log(err);
//   })

// imagecache.render('./in.png', 'canvas_scale_with_blur', (err, image) => {
//   if (err) {
//     console.log('Failed to process image in.png with preset canvas_scale_with_blur.');
//     console.log(err);

//     return;
//   }

//   image.toFile('out_canvas_scale_with_blur.png', (saveErr, info) => {
//     if (saveErr) {
//       console.log('Failed to save image out_canvas_scale_with_blur.png.');
//       console.log(err);

//       return;
//     }

//     console.log(`Saved image out_canvas_scale_with_blur.png with width ${info.width} and height ${info.height}.`);
//   });
// });

// imagecache.render('./in.png', 'scale_crop_tiny', (err, image) => {
//   if (err) {
//     console.log('Failed to process image in.png with preset scale_crop_tiny.');
//     console.log(err);

//     return;
//   }

//   image.toFile('out_scale_crop_tiny.png', (saveErr, info) => {
//     if (saveErr) {
//       console.log('Failed to save image out_scale_crop_tiny.png.');
//       console.log(err);

//       return;
//     }

//     console.log(`Saved image out_scale_crop_tiny.png with width ${info.width} and height ${info.height}.`);
//   });
// });

// imagecache.render('./in.png', 'scale_crop_small', (err, image) => {
//   if (err) {
//     console.log('Failed to process image in.png with preset scale_crop_small.');
//     console.log(err);

//     return;
//   }

//   image.toFile('out_scale_crop_small.png', (saveErr, info) => {
//     if (saveErr) {
//       console.log('Failed to save image out_scale_crop_small.png.');
//       console.log(err);

//       return;
//     }
//     console.log(`Saved image out_scale_crop_small.png with width ${info.width} and height ${info.height}.`);
//   });
// });

// imagecache.render('./in.png', 'scale_crop_teaser', (err, image) => {
//   if (err) {
//     console.log('Failed to process image in.png with preset scale_crop_teaser.');
//     console.log(err);

//     return;
//   }

//   image.toFile('out_scale_crop_teaser.png', (saveErr, info) => {
//     if (saveErr) {
//       console.log('Failed to save image out_scale_crop_teaser.png.');
//       console.log(err);

//       return;
//     }

//     console.log(`Saved image out_scale_crop_teaser.png with width ${info.width} and height ${info.height}.`);
//   });
// });
