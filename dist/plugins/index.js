"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _converters_1 = __importDefault(require("./_converters"));
var blur_1 = __importDefault(require("./blur"));
var define_canvas_1 = __importDefault(require("./define_canvas"));
var file_1 = __importDefault(require("./file"));
var flip_1 = __importDefault(require("./flip"));
var gamma_1 = __importDefault(require("./gamma"));
var greyscale_1 = __importDefault(require("./greyscale"));
var negate_1 = __importDefault(require("./negate"));
var normalize_1 = __importDefault(require("./normalize"));
var rotate_1 = __importDefault(require("./rotate"));
var scale_and_crop_1 = __importDefault(require("./scale_and_crop"));
var scale_1 = __importDefault(require("./scale"));
var sharpen_1 = __importDefault(require("./sharpen"));
exports.default = [
    _converters_1.default,
    blur_1.default,
    define_canvas_1.default,
    file_1.default,
    flip_1.default,
    gamma_1.default,
    greyscale_1.default,
    negate_1.default,
    normalize_1.default,
    rotate_1.default,
    scale_and_crop_1.default,
    scale_1.default,
    sharpen_1.default,
];
//# sourceMappingURL=index.js.map