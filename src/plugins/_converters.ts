import type { ImageCache, Plugin } from '../imagecache';

const PluginConverter: Plugin = {
  name: 'Converter functions',
  description:
    'This plugin offers various helper functions for converting option strings to booleans, floats, numbers and dimensions.',
  actions: {
    convertDimension: (
      instance: ImageCache,
      value: string | number,
      maxDimension: number,
    ): number => {
      let converted: number;

      if (String(value).endsWith('%')) {
        converted = ~~(
          (maxDimension * parseInt(String(value).replace(/%/g, ''), 10)) /
          100
        );
      } else {
        converted = parseInt(String(value), 10);
      }

      return Math.round(converted);
    },
    convertPosition: (
      instance: ImageCache,
      value: string | number,
      maxPosition: number,
      imageSize: number,
    ): number => {
      let converted: number;

      imageSize = imageSize || 0;

      if (value === 'left' || value === 'top') {
        converted = 0;
      } else if (value === 'center') {
        converted = ~~(maxPosition / 2) - ~~(imageSize / 2);
      } else if (value === 'right' || value === 'bottom') {
        converted = maxPosition;
      } else {
        converted = instance.getAction('convertDimension')(
          instance,
          value,
          maxPosition,
        );
      }

      return Math.round(converted);
    },
  },
};

export default PluginConverter;
