import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('applies gamma', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'gamma',
      actions: [
        {
          action: 'gamma',
          config: {
            sigma: 5,
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'gamma');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('applies gamma without a gamma value', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'gamma',
      actions: [
        {
          action: 'gamma',
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'gamma');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});
