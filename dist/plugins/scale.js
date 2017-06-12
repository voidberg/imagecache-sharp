module.exports = {
  attach: function attach(app) {
    app.actions.scale = (image, metadata, config, callback) => {
      const iWidth = metadata.width;
      const iHeight = metadata.height;
      const ratio = iWidth / iHeight;

      const maxWidth = config.maxWidth ? app.actions.convertDimension(config.maxWidth, iWidth) : 0;
      const maxHeight = config.maxHeight ? app.actions.convertDimension(config.maxHeight, iHeight) : 0;

      let width = config.width ? app.actions.convertDimension(config.width, iWidth) : 0;
      let height = config.height ? app.actions.convertDimension(config.height, iHeight) : 0;

      const upscale = config.upscale ? app.actions.convertBool(config.upscale) : true;

      if (!width && !height && !maxWidth && !maxHeight) {
        return callback(undefined, image);
      }

      if (!upscale) {
        if (width > iWidth || height > iHeight) {
          return callback(undefined, image);
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
        width = height * ratio;
      } else if (height === 0) {
        height = width / ratio;
      }

      return callback(undefined, image.resize(width, height).ignoreAspectRatio());
    };
  }
};