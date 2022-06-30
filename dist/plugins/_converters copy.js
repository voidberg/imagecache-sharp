"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = __importDefault(require("string"));
var PluginConverter = {
    name: 'Converter functions',
    description: 'This plugin offers various helper functions for converting option strings to booleans, floats, numbers and dimensions.',
    actions: {
        convertBoolean: function (instance, value) { return string_1.default(value).toBoolean(); },
        convertFloat: function (instance, value) { return string_1.default(value).toFloat(); },
        convertInt: function (instance, value) { return string_1.default(value).toInt(); },
        convertDimension: function (instance, value, maxDimension) {
            var converted;
            if (string_1.default(value).endsWith('%')) {
                converted = ~~((maxDimension * string_1.default(value).replaceAll('%', '').toInt()) / 100);
            }
            else {
                converted = string_1.default(value).toInt();
            }
            return Math.round(converted);
        },
        convertPosition: function (instance, value, maxPosition, imageSize) {
            var converted;
            imageSize = imageSize || 0;
            if (value === 'left' || value === 'top') {
                converted = 0;
            }
            else if (value === 'center') {
                converted = ~~(maxPosition / 2) - ~~(imageSize / 2);
            }
            else if (value === 'right' || value === 'bottom') {
                converted = maxPosition;
            }
            else {
                converted = instance.getAction('convertDimension')(instance, value, maxPosition);
            }
            return Math.round(converted);
        },
    },
};
exports.default = PluginConverter;
//# sourceMappingURL=_converters%20copy.js.map