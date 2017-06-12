module.exports = {
  attach: function attach(app) {
    app.actions.normalize = (image, metadata, config, callback) => {
      return callback(undefined, image.normalize());
    };
  }
};