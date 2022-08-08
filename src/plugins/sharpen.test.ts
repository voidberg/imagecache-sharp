import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('applies normalize', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'normalize',
      actions: [
        {
          action: 'normalize',
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'normalize');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});
