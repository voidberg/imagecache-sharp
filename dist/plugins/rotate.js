"use strict";

module.exports = {
  attach: function attach(app) {
    app.actions.rotate = (image, metadata, config, callback) => {
      const angle = config.angle || 90;

      return callback(undefined, image.rotate(angle));
    };
  }
};