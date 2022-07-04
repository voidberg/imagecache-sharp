import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

// TODO: Fix these tests.
test('applies scale with exact dimensions', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'scale',
      actions: [
        {
          action: 'scale',
          config: {
            width: 200,
            height: 100,
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'scale');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('applies scale with relative dimensions', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'scale',
      actions: [
        {
          action: 'scale',
          config: {
            width: '50%',
            height: '50%',
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'scale');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('applies scale with a mix of exact and relative dimensions', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'scale',
      actions: [
        {
          action: 'scale',
          config: {
            width: '50%',
            height: 300,
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'scale');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});
