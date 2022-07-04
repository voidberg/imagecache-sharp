import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('creates a canvas', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'define_canvas',
      actions: [
        {
          action: 'define_canvas',
          config: {
            color: '#333333',
            width: 960,
            height: 720,
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'define_canvas');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('failes when canvas dimensions are too big', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'define_canvas',
      actions: [
        {
          action: 'define_canvas',
          config: {
            color: '#333333',
            width: 1000,
            height: 1000,
          },
        },
      ],
    },
  ]);

  expect(
    imagecache.render('./examples/in.png', 'define_canvas')
  ).rejects.toThrow('Image to composite must have same dimensions or smaller');
});
