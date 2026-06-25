import sharp from 'sharp';
import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginDefineCanvas: Plugin = {
  name: 'Define canvas',
  description: 'This plugin creates a resized canvas.',
  actions: {
    define_canvas: (
      instance: ImageCache,
      image: Image,
      metadata,
      config,
    ): Promise<Image> => {
      return new Promise<Image>((resolve, reject) => {
        image
          .composite([
            {
              input: {
                create: {
                  width: config.width,
                  height: config.height,
                  channels: config.channels || 4,
                  background: config.color || '#ffffff00',
                },
              },
              gravity: config.gravity,
              tile: config.tile || false,
            },
          ])
          .png()
          .toBuffer()
          .then((data) => resolve(sharp(data)))
          .catch((error) => reject(error));
      });
    },
  },
};

export default PluginDefineCanvas;
