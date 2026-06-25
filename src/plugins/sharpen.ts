import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginSharpen: Plugin = {
  name: 'Sharpen',
  description: '',
  actions: {
    sharpen: (
      instance: ImageCache,
      image: Image,
      metadata,
      config,
    ): Promise<Image> => {
      const sigma = config.sigma || 1;
      const flat = config.flat || 1.0;
      const jagged = config.jagged || 2.0;

      return new Promise<Image>((resolve, reject): void => {
        try {
          resolve(image.sharpen({ sigma, m1: flat, m2: jagged }));
        } catch (e) {
          reject(e);
        }
      });
    },
  },
};

export default PluginSharpen;
