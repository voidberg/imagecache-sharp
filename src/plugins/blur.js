module.exports = {
  attach: function attach(app) {
    app.actions.blur = (image, metadata, config, callback) => {
      const blur = config.blur || 1;

      return callback(undefined, image.sharpen(blur));
    };
  },
};
