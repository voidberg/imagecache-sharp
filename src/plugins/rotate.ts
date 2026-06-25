import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginRotate: Plugin = {
  name: 'Rotate',
  description: '',
  actions: {
    rotate: (
      instance: ImageCache,
      image: Image,
      metadata: object,
      config: { angle: number },
    ): Image => {
      const angle = config.angle || 'auto';

      if (angle === 'auto') {
        return image.rotate();
      }

      return image.rotate(angle);
    },
  },
};

export default PluginRotate;
