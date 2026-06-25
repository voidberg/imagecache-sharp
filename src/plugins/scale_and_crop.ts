import type { Image, ImageCache, Plugin } from '../imagecache';

const PluginScaleCrop: Plugin = {
  name: 'Scale and crop',
  description: '',
  actions: {
    scale_and_crop: (
      instance: ImageCache,
      image: Image,
      metadata,
      config,
    ): Promise<Image> => {
      const convertDimension = instance.getAction('convertDimension');
      const width = config.width
        ? convertDimension(instance, config.width, metadata.width)
        : metadata.width;
      const height = config.height
        ? convertDimension(instance, config.height, metadata.height)
        : metadata.height;
      const gravity = config.gravity || 'center';

      return new Promise<Image>((resolve, reject) => {
        try {
          resolve(
            image.resize(width, height, { fit: 'cover', position: gravity }),
          );
        } catch (e) {
          reject(e);
        }
      });
    },
  },
};

export default PluginScaleCrop;
