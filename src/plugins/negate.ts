import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginNegate: Plugin = {
  name: 'Negate',
  description: '',
  actions: {
    negate: (instance: ImageCache, image: Image): Promise<Image> => {
      return new Promise<Image>((resolve, reject) => {
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
