import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginGreyscale: Plugin = {
  name: 'Greyscale',
  description: '',
  actions: {
    greyscale: (instance: ImageCache, image: Image): Image => {
      return image.greyscale();
    },
  },
};

export default PluginGreyscale;
