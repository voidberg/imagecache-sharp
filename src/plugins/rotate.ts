import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginRotate: Plugin = {
  name: 'Rotate',
  description: '',
  actions: {
    rotate: (
      instance: ImageCache,
      image: sharp.Sharp,
      metadata: object,
      config: { angle: number }
    ): sharp.Sharp => {
      const angle = config.angle || 'auto';

      if (angle === 'auto') {
        return image.rotate();
      }

      return image.rotate(angle);
    },
  },
};

export default PluginRotate;
