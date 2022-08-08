"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginScaleCrop = {
    name: 'Scale and crop',
    description: '',
    actions: {
        scale_and_crop: function (instance, image, metadata, config) {
            var convertDimension = instance.getAction('convertDimension');
            var width = config.width
                ? convertDimension(instance, config.width, metadata.width)
                : metadata.width;
            var height = config.height
                ? convertDimension(instance, config.height, metadata.height)
                : metadata.height;
            var gravity = config.gravity || 'center';
            return new Promise(function (resolve, reject) {
                try {
                    resolve(image.resize(width, height, { fit: 'cover', position: gravity }));
                }
                catch (e) {
                    reject(e);
                }
            });
        },
    },
};
exports.default = PluginScaleCrop;
//# sourceMappingURL=scale_and_crop.js.map