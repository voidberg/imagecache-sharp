import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginGamma: Plugin = {
  name: 'Gamma',
  description: '',
  actions: {
    gamma: (
      instance: ImageCache,
      image: Image,
      metadata: object,
      config: { gamma: number },
    ): Image => {
      const gamma = config.gamma || 2.2;

      return image.gamma(gamma);
    },
  },
};

export default PluginGamma;
