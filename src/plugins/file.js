module.exports = {
  attach: function attach(app) {
    app.actions.file = (image, metadata, config, callback) => {
      const filepath = config.path;

      const options = {
        gravity: config.gravity || 'center',
        tile: config.tile || false,
        cutout: config.cutout || false,
      };
      return callback(undefined, image.composite([{
        input: filepath,
      }], options));
    };
  },
};
