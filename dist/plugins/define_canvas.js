"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var PluginDefineCanvas = {
    name: 'Define canvas',
    description: 'This plugin creates a resized canvas.',
    actions: {
        define_canvas: function (instance, image, metadata, config) {
            return new Promise(function (resolve, reject) {
                image
                    .composite([
                    {
                        input: {
                            create: {
                                width: config.width,
                                height: config.height,
                                channels: config.channels || 4,
                                background: config.color || '#ffffff00',
                            },
                        },
                        gravity: config.gravity,
                        tile: config.tile || false,
                    },
                ])
                    .png()
                    .toBuffer()
                    .then(function (data) { return resolve(sharp_1.default(data)); })
                    .catch(function (error) { return reject(error); });
            });
        },
    },
};
exports.default = PluginDefineCanvas;
//# sourceMappingURL=define_canvas.js.map