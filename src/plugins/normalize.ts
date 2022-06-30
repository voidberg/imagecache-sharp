import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginNormalize: Plugin = {
  name: 'Normalize',
  description: '',
  actions: {
    normalize: (image: sharp.Sharp): sharp.Sharp => {
      return image.normalize();
    },
  },
};

export default PluginNormalize;