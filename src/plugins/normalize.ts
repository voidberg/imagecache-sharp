import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginNormalize: Plugin = {
  name: 'Normalize',
  description: '',
  actions: {
    normalize: (instance: ImageCache, image: Image): Promise<Image> => {
      return new Promise<Image>((resolve, reject) => {
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
