import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('applies flip', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'flip',
      actions: [
        {
          action: 'flip',
          config: {
            axis: 'x',
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'flip');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});

test('applies flip with default values', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'flip',
      actions: [
        {
          action: 'flip',
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'flip');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});
