import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginNegate: Plugin = {
  name: 'Negate',
  description: '',
  actions: {
    negate: (image: sharp.Sharp): sharp.Sharp => {
      return image.negate();
    },
  },
};

export default PluginNegate; 