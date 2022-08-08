import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginNormalize: Plugin = {
  name: 'Normalize',
  description: '',
  actions: {
    normalize: (
      instance: ImageCache,
      image: sharp.Sharp
    ): Promise<sharp.Sharp> => {
      return new Promise<sharp.Sharp>((resolve, reject) => {
        try {
          resolve(image.normalize());
        } catch (e) {
          reject(e);
        }
      });
    },
  },
};

export default PluginNormalize;
