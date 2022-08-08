import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginNegate: Plugin = {
  name: 'Negate',
  description: '',
  actions: {
    negate: (
      instance: ImageCache,
      image: sharp.Sharp
    ): Promise<sharp.Sharp> => {
      return new Promise<sharp.Sharp>((resolve, reject) => {
        try {
          resolve(image.negate());
        } catch (e) {
          reject(e);
        }
      });
    },
  },
};

export default PluginNegate;
