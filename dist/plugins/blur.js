"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginBlur = {
    name: 'Blur',
    description: 'This plugin implements the blur functionality.',
    actions: {
        blur: function (instance, image, metadata, config) {
            var sigma = config.sigma || 50;
            return new Promise(function (resolve, reject) {
                try {
                    resolve(image.blur(sigma));
                }
                catch (e) {
                    reject(e);
                }
            });
        },
    },
};
exports.default = PluginBlur;
//# sourceMappingURL=blur.js.map