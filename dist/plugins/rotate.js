"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginRotate = {
    name: 'Rotate',
    description: '',
    actions: {
        rotate: function (instance, image, metadata, config) {
            var angle = config.angle || 90;
            return image.rotate(angle);
        },
    },
};
exports.default = PluginRotate;
//# sourceMappingURL=rotate.js.map