import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('applies sharpen', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'sharpen',
      actions: [
        {
          action: 'sharpen',
          config: {
            sigma: 2,
            flat: 2,
            jagged: 3,
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'sharpen');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('applies sharpen with default values', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'sharpen',
      actions: [
        {
          action: 'sharpen',
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'sharpen');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});
