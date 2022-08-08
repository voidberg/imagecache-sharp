import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginSharpen: Plugin = {
  name: 'Sharpen',
  description: '',
  actions: {
    sharpen: (
      instance: ImageCache,
      image: sharp.Sharp,
      metadata,
      config
    ): Promise<sharp.Sharp> => {
      const sigma = config.sigma || 1;
      const flat = config.flat || 1.0;
      const jagged = config.jagged || 2.0;

      return new Promise<sharp.Sharp>((resolve, reject): void => {
        try {
          resolve(image.sharpen(sigma, flat, jagged));
        } catch (e) {
          reject(e);
        }
      });
    },
  },
};

export default PluginSharpen;
