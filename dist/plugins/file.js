"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginFile = {
    name: 'File',
    description: '',
    actions: {
        file: function (instance, image, metadata, config) {
            var filepath = config.path;
            return image.composite([
                {
                    input: filepath,
                    gravity: config.gravity || 'center',
                    tile: config.tile || false,
                },
            ]);
        },
    },
};
exports.default = PluginFile;
//# sourceMappingURL=file.js.map