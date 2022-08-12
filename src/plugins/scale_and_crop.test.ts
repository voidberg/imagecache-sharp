import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

// TODO: Fix these tests.
test('applies scale and crop with exact dimensions', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'scale_and_crop',
      actions: [
        {
          action: 'scale_and_crop',
          config: {
            width: 200,
            height: 100,
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'scale_and_crop');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('applies scale and crop with relative dimensions', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'scale_and_crop',
      actions: [
        {
          action: 'scale_and_crop',
          config: {
            width: '50%',
            height: '50%',
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'scale_and_crop');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('applies scale and crop with a mix of exact and relative dimensions', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'scale_and_crop',
      actions: [
        {
          action: 'scale_and_crop',
          config: {
            width: '50%',
            height: 300,
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'scale_and_crop');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

// test('does not apply scale when dimensions are missing', async () => {
//   const imagecache = new ImageCache([
//     {
//       presetName: 'scale',
//       actions: [
//         {
//           action: 'scale',
//           config: {},
//         },
//       ],
//     },
//   ]);
//
//   const image = await imagecache.render('./examples/in.png', 'scale');
//   const imageBuffer = await image.toBuffer();
//   expect(imageBuffer).toMatchImageSnapshot({
//     failureThresholdType: 'percent',
//     failureThreshold: 1,
//   });
// });
//
// test('does not scale when upscale is false and final dimensions are bigger', async () => {
//   const imagecache = new ImageCache([
//     {
//       presetName: 'scale',
//       actions: [
//         {
//           action: 'scale',
//           config: {
//             width: 20000,
//             height: 10000,
//             upscale: false,
//           },
//         },
//       ],
//     },
//   ]);
//
//   const image = await imagecache.render('./examples/in.png', 'scale');
//   const imageBuffer = await image.toBuffer();
//   expect(imageBuffer).toMatchImageSnapshot({
//     failureThresholdType: 'percent',
//     failureThreshold: 1,
//   });
// });
//
// test('applies scale when width is missing', async () => {
//   const imagecache = new ImageCache([
//     {
//       presetName: 'scale',
//       actions: [
//         {
//           action: 'scale',
//           config: {
//             height: 100,
//           },
//         },
//       ],
//     },
//   ]);
//
//   const image = await imagecache.render('./examples/in.png', 'scale');
//   const imageBuffer = await image.toBuffer();
//   expect(imageBuffer).toMatchImageSnapshot({
//     failureThresholdType: 'percent',
//     failureThreshold: 10,
//   });
// });
//
// test('applies scale when height is missing', async () => {
//   const imagecache = new ImageCache([
//     {
//       presetName: 'scale',
//       actions: [
//         {
//           action: 'scale',
//           config: {
//             width: 200,
//           },
//         },
//       ],
//     },
//   ]);
//
//   const image = await imagecache.render('./examples/in.png', 'scale');
//   const imageBuffer = await image.toBuffer();
//   expect(imageBuffer).toMatchImageSnapshot({
//     failureThresholdType: 'percent',
//     failureThreshold: 10,
//   });
// });
