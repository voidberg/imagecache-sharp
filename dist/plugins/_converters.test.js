"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imagecache_1 = require("../imagecache");
var _converters_1 = __importDefault(require("./_converters"));
var imagecache;
beforeAll(function () {
    imagecache = new imagecache_1.ImageCache([]);
});
test('converts dimensions', function () {
    var convertDimension = _converters_1.default.actions.convertDimension;
    expect(convertDimension(imagecache, '80%', 100)).toEqual(80);
    expect(convertDimension(imagecache, '1234')).toEqual(1234);
    expect(convertDimension(imagecache, 1234)).toEqual(1234);
});
test('converts positions', function () {
    var convertPosition = _converters_1.default.actions.convertPosition;
    expect(convertPosition(imagecache, 'left', 0, 1000)).toEqual(0);
    expect(convertPosition(imagecache, 'top', 0, 1000)).toEqual(0);
    expect(convertPosition(imagecache, 'center', 1000, 500)).toEqual(250);
    expect(convertPosition(imagecache, 'right', 300, 1000)).toEqual(300);
    expect(convertPosition(imagecache, 'bottom', 300, 1000)).toEqual(300);
    expect(convertPosition(imagecache, 'bottom', 300)).toEqual(300);
    expect(convertPosition(imagecache, '1234', 100, 1000)).toEqual(1234);
    expect(convertPosition(imagecache, '80%', 100, 1000)).toEqual(80);
});
//# sourceMappingURL=_converters.test.js.map