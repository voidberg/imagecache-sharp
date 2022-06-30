"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginGamma = {
    name: 'Gamma',
    description: '',
    actions: {
        gamma: function (instance, image, metadata, config) {
            var gamma = config.gamma || 2.2;
            return image.gamma(gamma);
        },
    },
};
exports.default = PluginGamma;
//# sourceMappingURL=gamma.js.map