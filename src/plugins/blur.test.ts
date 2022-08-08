import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('blurs image', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'blur',
      actions: [
        {
          action: 'blur',
          config: {
            sigma: 5,
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'blur');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('blurs image without a sigma value', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'blur',
      actions: [
        {
          action: 'blur',
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'blur');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('fails to blurs with an invalid sigma value', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'blur',
      actions: [
        {
          action: 'blur',
          config: {
            sigma: 0.1,
          },
        },
      ],
    },
  ]);

  expect(imagecache.render('./examples/in.png', 'blur')).rejects.toThrow(
    'Expected number between 0.3 and 1000 for sigma but received 0.1 of type number'
  );
});
