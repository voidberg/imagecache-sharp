"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginNormalize = {
    name: 'Normalize',
    description: '',
    actions: {
        normalize: function (instance, image) {
            return new Promise(function (resolve, reject) {
                try {
                    resolve(image.normalize());
                }
                catch (e) {
                    reject(e);
                }
            });
        },
    },
};
exports.default = PluginNormalize;
//# sourceMappingURL=normalize.js.map