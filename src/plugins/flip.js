module.exports = {
  attach: function attach(app) {
    app.actions.flip = (image, metadata, config, callback) => {
      const axis = config.axis || 'y';

      if (axis === 'y') {
        return callback(undefined, image.flip());
      }

      return callback(undefined, image.flop());
    };
  },
};
