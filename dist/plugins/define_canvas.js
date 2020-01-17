'use strict';

var _sharp = require('sharp');

var _sharp2 = _interopRequireDefault(_sharp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  attach: function attach(app) {
    app.actions.define_canvas = (image, metadata, config, callback) => {
      const options = {
        gravity: config.gravity,
        tile: config.tile || false,
        cutout: config.cutout || false
      };

      return callback(undefined, image.composite([{
        input: {
          create: {
            width: config.width,
            height: config.height,
            channels: config.channels || 4,
            background: config.color || '#ffffff00'
          }
        }
      }], options));
    };
  }
};