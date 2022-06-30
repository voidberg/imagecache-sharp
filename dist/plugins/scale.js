"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginScale = {
    name: 'Scale',
    description: '',
    actions: {
        scale: function (instance, image, metadata, config) {
            var convertDimension = instance.getAction('convertDimension');
            var convertBool = instance.getAction('convertBool');
            var iWidth = metadata.width;
            var iHeight = metadata.height;
            var ratio = iWidth / iHeight;
            var maxWidth = config.maxWidth ? convertDimension(config.maxWidth, iWidth) : 0;
            var maxHeight = config.maxHeight ? convertDimension(config.maxHeight, iHeight) : 0;
            var width = config.width ? convertDimension(config.width, iWidth) : 0;
            var height = config.height ? convertDimension(config.height, iHeight) : 0;
            var upscale = config.upscale ? convertBool(config.upscale) : true;
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