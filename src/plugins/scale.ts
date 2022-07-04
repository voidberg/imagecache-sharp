import sharp from 'sharp';
import { ImageCache, Plugin } from '../imagecache';

const PluginScale: Plugin = {
  name: 'Scale',
  description: '',
  actions: {
    scale: (
      instance: ImageCache,
      image: sharp.Sharp,
      metadata,
      config
    ): Promise<sharp.Sharp> => {
      const convertDimension = instance.getAction('convertDimension');
      const convertBool = instance.getAction('convertBool');

      const iWidth = metadata.width;
      const iHeight = metadata.height;
      const ratio = iWidth / iHeight;

      const maxWidth = config.maxWidth
        ? convertDimension(config.maxWidth, iWidth)
        : 0;
      const maxHeight = config.maxHeight
        ? convertDimension(config.maxHeight, iHeight)
        : 0;

      let width = config.width ? convertDimension(config.width, iWidth) : 0;
      let height = config.height ? convertDimension(config.height, iHeight) : 0;

      const upscale = config.upscale ? convertBool(config.upscale) : true;

      return new Promise<sharp.Sharp>((resolve, reject) => {
        try {
          if (!width && !height && !maxWidth && !maxHeight) {
            return resolve(image);
          }

          if (!upscale) {
            if (width > iWidth || height > iHeight) {
              return resolve(image);
            }
          }

          if (maxWidth && maxHeight) {
            if (iWidth > iHeight) {
              width = maxWidth;
            } else {
              height = maxHeight;
            }
          }

          if (width === 0) {
            width = Math.round(height * ratio);
          } else if (height === 0) {
            height = Math.round(width / ratio);
          }

          return resolve(image.resize(width, height, { fit: 'fill' }));
        } catch (e) {
          return reject(e);
        }
      });
    },
  },
};

export default PluginScale;
