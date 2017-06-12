/* global describe, it */
import assert from 'assert';
import { resolve } from 'path';
import ImageCache from '../src/index';

describe('ImageCache', () => {
  it('loads all plugins', () => {
    const presets = {};
    const expectedPlugins = [
      '_converters',
      'blur',
      'define_canvas',
      'file',
      'flip',
      'gamma',
      'greyscale',
      'negate',
      'normalize',
      'rotate',
      'scale',
      'scale_and_crop',
      'sharpen',
    ];

    const imagecache = new ImageCache(presets);
    const plugins = imagecache.plugins();

    assert.deepEqual(plugins, expectedPlugins);
  });

  it('loads presets', () => {
    const expectedPresets = {
      s_crop_small: {
        presetname: 's_crop_small',
        actions: [
          {
            action: 'scale_and_crop',
            config: {
              width: 70,
              height: 70,
            },
          },
        ],
      },
      s_crop_teaser: {
        presetname: 's_crop_teaser',
        actions: [
          {
            action: 'scale_and_crop',
            config: {
              width: 152,
              height: 152,
            },
          },
        ],
      },
    };

    const imagecache = new ImageCache(expectedPresets);
    const presets = imagecache.presets();

    assert.deepEqual(presets, ['s_crop_small', 's_crop_teaser']);
  });

  it('fails when using an undefined preset', (done) => {
    const presets = {};
    const imagecache = new ImageCache(presets);

    imagecache.render(resolve(__dirname, './in.png'), 'foo_bar', (err) => {
      assert(err);
      assert(err instanceof Error);
      assert.equal(err.message, 'Preset foo_bar could not be found.');

      done();
    });
  });

  it('fails when using an undefined action', (done) => {
    const presets = {
      s_crop_small: {
        presetname: 's_crop_small',
        actions: [
          {
            action: 'unknown_action',
          },
        ],
      },
    };
    const imagecache = new ImageCache(presets);

    imagecache.render(resolve(__dirname, './in.png'), 's_crop_small', (err) => {
      assert(err);
      assert(err instanceof Error);
      assert.equal(err.message, 'Action unknown_action for preset s_crop_small not found in loaded plugins.');

      done();
    });
  });

  it('fails when using an undefined image', (done) => {
    const presets = {
      s_crop_small: {
        presetname: 's_crop_small',
      },
    };
    const imagecache = new ImageCache(presets);

    imagecache.render('foo.png', 's_crop_small', (err) => {
      assert(err);
      assert(err instanceof Error);
      assert.equal(err.message, 'Input file is missing or of an unsupported image format');

      done();
    });
  });

  it('blurs an image', (done) => {
    const presets = {
      test: {
        presetname: 'test',
        actions: [
          {
            action: 'blur',
          },
        ],
      },
    };
    const imagecache = new ImageCache(presets);

    imagecache.render(resolve(__dirname, './in.png'), 'test', (err, image) => {
      assert(!err);
      assert(image);

      image.toBuffer((bufferErr, data, info) => {
        if (bufferErr) {
          throw bufferErr;
        }

        assert.strictEqual('png', info.format);
        assert.strictEqual(960, info.width);
        assert.strictEqual(720, info.height);
        // fixtures.assertSimilar(fixtures.expected('blur-1.jpg'), data, done);

        done();
      });
    });
  });
});
