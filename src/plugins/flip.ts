import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginFlip: Plugin = {
  name: 'Flip and flop',
  description: '',
  actions: {
    flip: (
      instance: ImageCache,
      image: sharp.Sharp,
      metadata: object,
      config: { axis: string }
    ): sharp.Sharp => {
      const axis = config.axis || 'y';

      if (axis === 'y') {
        return image.flip();
      }

      return image.flop();
    },
  },
};

export default PluginFlip;
