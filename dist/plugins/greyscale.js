module.exports = {
  attach: function attach(app) {
    app.actions.greyscale = (image, metadata, config, callback) => {
      return callback(undefined, image.greyscale());
    };
  }
};