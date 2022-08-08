import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('applies greyscale', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'greyscale',
      actions: [
        {
          action: 'greyscale',
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'greyscale');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});
