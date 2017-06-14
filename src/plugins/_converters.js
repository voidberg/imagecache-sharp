/* eslint no-bitwise: ["error", { "allow": ["~"] }] */
const S = require('string');

module.exports = {
  attach: function attach(app) {
    app.actions.convertBoolean = value => S(value).toBool();

    app.actions.convertFloat = value => S(value).toFloat();

    app.actions.convertInt = value => S(value).toInt();

    app.actions.convertDimension = (value, maxDimension) => {
      let converted;

      if (S(value).endsWith('%')) {
        converted = ~~((maxDimension * S(value).replace('%', '').toInt()) / 100);
      } else {
        converted = S(value).toInt();
      }

      return converted;
    };

    app.actions.convertPosition = (value, maxPosition, imageSize) => {
      let converted;

      imageSize = imageSize || 0;

      if (value === 'left' || value === 'top') {
        converted = 0;
      } else if (value === 'center') {
        converted = ~~(maxPosition / 2) - ~~(imageSize / 2);
      } else if (value === 'right' || value === 'bottom') {
        converted = maxPosition;
      } else {
        converted = app.actions.convertDimension(value, maxPosition);
      }

      return converted;
    };
  },
};
