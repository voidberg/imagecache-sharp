import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginBlur: Plugin = {
  name: 'Blur',
  description: 'This plugin implements the blur functionality.',
  actions: {
    blur: (
      instance: ImageCache,
      image: Image,
      metadata: object,
      config: { sigma: number },
    ): Promise<Image> => {
      const sigma = config.sigma || 50;

      return new Promise<Image>((resolve, reject) => {
        try {
          resolve(image.blur(sigma));
        } catch (e) {
          reject(e);
        }
      });
    },
  },
};

export default PluginBlur;
