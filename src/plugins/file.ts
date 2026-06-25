import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginFile: Plugin = {
  name: 'File',
  description: '',
  actions: {
    file: (
      instance: ImageCache,
      image: Image,
      metadata: object,
      config: { path: string; gravity: string; tile: boolean },
    ): Image => {
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
