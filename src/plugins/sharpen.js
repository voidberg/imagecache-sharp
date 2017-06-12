module.exports = {
  attach: function attach(app) {
    app.actions.sharpen = (image, metadata, config, callback) => {
      const sigma = config.sigma || 1;
      const flat = config.flat || 1.0;
      const jagged = config.jagged || 2.0;

      return callback(undefined, image.sharpen(sigma, flat, jagged));
    };
  },
};
