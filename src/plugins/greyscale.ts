import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginGreyscale: Plugin = {
  name: 'Greyscale',
  description: '',
  actions: {
    greyscale: (instance: ImageCache, image: sharp.Sharp): sharp.Sharp => {
      return image.greyscale();
    },
  },
};

export default PluginGreyscale;
