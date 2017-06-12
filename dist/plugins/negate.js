module.exports = {
  attach: function attach(app) {
    app.actions.negate = (image, metadata, config, callback) => {
      return callback(undefined, image.negate());
    };
  }
};