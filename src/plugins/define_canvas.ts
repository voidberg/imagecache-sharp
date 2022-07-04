import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginDefineCanvas: Plugin = {
  name: 'Define canvas',
  description: 'This plugin creates a resized canvas.',
  actions: {
    define_canvas: (
      instance: ImageCache,
      image: sharp.Sharp,
      metadata,
      config
    ): Promise<sharp.Sharp> => {
      return new Promise<sharp.Sharp>((resolve, reject) => {
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
