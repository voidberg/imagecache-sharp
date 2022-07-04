import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('applies rotate', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'rotate',
      actions: [
        {
          action: 'rotate',
          config: {
            angle: 180,
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'rotate');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('applies rotate with default values', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'rotate',
      actions: [
        {
          action: 'rotate',
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'rotate');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});
