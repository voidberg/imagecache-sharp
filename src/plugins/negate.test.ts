import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('applies negate', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'negate',
      actions: [
        {
          action: 'negate',
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'negate');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});
