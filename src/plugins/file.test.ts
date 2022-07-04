import { toMatchImageSnapshot } from 'jest-image-snapshot';
import { ImageCache } from '../imagecache';

expect.extend({ toMatchImageSnapshot });

test('composits two images', async () => {
  const imagecache = new ImageCache([
    {
      presetName: 'file',
      actions: [
        {
          action: 'file',
          config: {
            gravity: 'northeast',
            path: './examples/watermark.png',
          },
        },
      ],
    },
  ]);

  const image = await imagecache.render('./examples/in.png', 'file');
  const imageBuffer = await image.toBuffer();
  expect(imageBuffer).toMatchImageSnapshot({
    failureThresholdType: 'percent',
    failureThreshold: 10,
  });
});
