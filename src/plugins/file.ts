import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginFile: Plugin = {
  name: 'File',
  description: '',
  actions: {
    file: (
      instance: ImageCache,
      image: sharp.Sharp,
      metadata: object,
      config: { path: string; gravity: string; tile: boolean }
    ): sharp.Sharp => {
      const filepath = config.path;

      return image.composite([
        {
          input: filepath,
          gravity: config.gravity || 'center',
          tile: config.tile || false,
        },
      ]);
    },
  },
};

export default PluginFile;
