'use strict';

module.exports = {
  attach: function attach(app) {
    app.actions.scale_and_crop = (image, metadata, config, callback) => {
      const width = config.width ? app.actions.convertDimension(config.width, metadata.width) : metadata.width;
      const height = config.height ? app.actions.convertDimension(config.height, metadata.height) : metadata.height;
      const gravity = config.gravity || 'center';

      return callback(undefined, image.resize(width, height).crop(gravity));
    };
  }
};