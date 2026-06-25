import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginFlip: Plugin = {
  name: 'Flip and flop',
  description: '',
  actions: {
    flip: (
      instance: ImageCache,
      image: Image,
      metadata: object,
      config: { axis: string },
    ): Image => {
      const axis = config.axis || 'y';

      if (axis === 'y') {
        return image.flip();
      }

      return image.flop();
    },
  },
};

export default PluginFlip;
