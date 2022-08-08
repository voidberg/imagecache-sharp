"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginScale = {
    name: 'Scale',
    description: '',
    actions: {
        scale: function (instance, image, metadata, config) {
            var convertDimension = instance.getAction('convertDimension');
            var iWidth = metadata.width;
            var iHeight = metadata.height;
            var ratio = iWidth / iHeight;
            var maxWidth = config.maxWidth
                ? convertDimension(instance, config.maxWidth, iWidth)
                : 0;
            var maxHeight = config.maxHeight
                ? convertDimension(instance, config.maxHeight, iHeight)
                : 0;
            var width = config.width
                ? convertDimension(instance, config.width, iWidth)
                : 0;
            var height = config.height
                ? convertDimension(instance, config.height, iHeight)
                : 0;
            var upscale = Object.prototype.hasOwnProperty.call(config, 'upscale')
                ? config.upscale
                : true;
            return new Promise(function (resolve, reject) {
                try {
                    if (!width && !height && !maxWidth && !maxHeight) {
                        return resolve(image);
                    }
                    if (!upscale) {
                        if (width > iWidth || height > iHeight) {
                            return resolve(image);
                        }
                    }
                    if (maxWidth && maxHeight) {
                        if (iWidth > iHeight) {
                            width = maxWidth;
                        }
                        else {
                            height = maxHeight;
                        }
                    }
                    if (width === 0) {
                        width = Math.round(height * ratio);
                    }
                    else if (height === 0) {
                        height = Math.round(width / ratio);
                    }
                    return resolve(image.resize(width, height, { fit: 'fill' }));
                }
                catch (e) {
                    return reject(e);
                }
            });
        },
    },
};
exports.default = PluginScale;
//# sourceMappingURL=scale.js.map