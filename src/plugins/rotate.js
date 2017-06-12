module.exports = {
  attach: function attach(app) {
    app.actions.rotate = (image, metadata, config, callback) => {
      const angle = config.angle || 'auto';

      return callback(undefined, image.rotate(angle));
    };
  },
};
