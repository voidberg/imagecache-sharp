"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginSharpen = {
    name: 'Sharpen',
    description: '',
    actions: {
        sharpen: function (instance, image, metadata, config) {
            var sigma = config.sigma || 1;
            var flat = config.flat || 1.0;
            var jagged = config.jagged || 2.0;
            return new Promise(function (resolve, reject) {
                try {
                    resolve(image.sharpen(sigma, flat, jagged));
                }
                catch (e) {
                    reject(e);
                }
            });
        },
    },
};
exports.default = PluginSharpen;
//# sourceMappingURL=sharpen.js.map