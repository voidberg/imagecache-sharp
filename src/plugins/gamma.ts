import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginGamma: Plugin = {
  name: 'Gamma',
  description: '',
  actions: {
    gamma: (instance: ImageCache, image: sharp.Sharp, metadata: object, config: { gamma: number }): sharp.Sharp => {
      const gamma = config.gamma || 2.2;

      return image.gamma(gamma);
    },
  },
};

export default PluginGamma;