"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginFlip = {
    name: 'Flip and flop',
    description: '',
    actions: {
        flip: function (instance, image, metadata, config) {
            var axis = config.axis || 'y';
            if (axis === 'y') {
                return image.flip();
            }
            return image.flop();
        },
    },
};
exports.default = PluginFlip;
//# sourceMappingURL=flip.js.map