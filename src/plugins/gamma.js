module.exports = {
  attach: function attach(app) {
    app.actions.gamma = (image, metadata, config, callback) => {
      const gamma = config.gamma || 2.2;

      return callback(undefined, image.gamma(gamma));
    };
  },
};
