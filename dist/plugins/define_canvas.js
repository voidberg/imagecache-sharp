import sharp from 'sharp';

module.exports = {
  attach: function attach(app) {
    app.actions.define_canvas = (image, metadata, config, callback) => {
      const canvas = sharp(null, {
        create: {
          width: config.width,
          height: config.height,
          channels: config.channels || 4,
          background: config.color || '#ffffff00'
        }
      });

      const options = {
        gravity: config.gravity,
        tile: config.tile || false,
        cutout: config.cutout || false
      };

      return image.toBuffer().then(buffer => callback(undefined, canvas.overlayWith(buffer, options)));
    };
  }
};