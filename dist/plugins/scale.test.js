"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jest_image_snapshot_1 = require("jest-image-snapshot");
var imagecache_1 = require("../imagecache");
expect.extend({ toMatchImageSnapshot: jest_image_snapshot_1.toMatchImageSnapshot });
// TODO: Fix these tests.
test('applies scale with exact dimensions', function () { return __awaiter(void 0, void 0, void 0, function () {
    var imagecache, image, imageBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imagecache = new imagecache_1.ImageCache([
                    {
                        presetName: 'scale',
                        actions: [
                            {
                                action: 'scale',
                                config: {
                                    width: 200,
                                    height: 100,
                                },
                            },
                        ],
                    },
                ]);
                return [4 /*yield*/, imagecache.render('./examples/in.png', 'scale')];
            case 1:
                image = _a.sent();
                return [4 /*yield*/, image.toBuffer()];
            case 2:
                imageBuffer = _a.sent();
                expect(imageBuffer).toMatchImageSnapshot({
                    failureThresholdType: 'percent',
                    failureThreshold: 10,
                });
                return [2 /*return*/];
        }
    });
}); });
test('applies scale with relative dimensions', function () { return __awaiter(void 0, void 0, void 0, function () {
    var imagecache, image, imageBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imagecache = new imagecache_1.ImageCache([
                    {
                        presetName: 'scale',
                        actions: [
                            {
                                action: 'scale',
                                config: {
                                    width: '50%',
                                    height: '50%',
                                },
                            },
                        ],
                    },
                ]);
                return [4 /*yield*/, imagecache.render('./examples/in.png', 'scale')];
            case 1:
                image = _a.sent();
                return [4 /*yield*/, image.toBuffer()];
            case 2:
                imageBuffer = _a.sent();
                expect(imageBuffer).toMatchImageSnapshot({
                    failureThresholdType: 'percent',
                    failureThreshold: 10,
                });
                return [2 /*return*/];
        }
    });
}); });
test('applies scale with a mix of exact and relative dimensions', function () { return __awaiter(void 0, void 0, void 0, function () {
    var imagecache, image, imageBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imagecache = new imagecache_1.ImageCache([
                    {
                        presetName: 'scale',
                        actions: [
                            {
                                action: 'scale',
                                config: {
                                    width: '50%',
                                    height: 300,
                                },
                            },
                        ],
                    },
                ]);
                return [4 /*yield*/, imagecache.render('./examples/in.png', 'scale')];
            case 1:
                image = _a.sent();
                return [4 /*yield*/, image.toBuffer()];
            case 2:
                imageBuffer = _a.sent();
                expect(imageBuffer).toMatchImageSnapshot({
                    failureThresholdType: 'percent',
                    failureThreshold: 10,
                });
                return [2 /*return*/];
        }
    });
}); });
test('does not apply scale when dimensions are missing', function () { return __awaiter(void 0, void 0, void 0, function () {
    var imagecache, image, imageBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imagecache = new imagecache_1.ImageCache([
                    {
                        presetName: 'scale',
                        actions: [
                            {
                                action: 'scale',
                                config: {},
                            },
                        ],
                    },
                ]);
                return [4 /*yield*/, imagecache.render('./examples/in.png', 'scale')];
            case 1:
                image = _a.sent();
                return [4 /*yield*/, image.toBuffer()];
            case 2:
                imageBuffer = _a.sent();
                expect(imageBuffer).toMatchImageSnapshot({
                    failureThresholdType: 'percent',
                    failureThreshold: 1,
                });
                return [2 /*return*/];
        }
    });
}); });
test('does not scale when upscale is false and final dimensions are bigger', function () { return __awaiter(void 0, void 0, void 0, function () {
    var imagecache, image, imageBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imagecache = new imagecache_1.ImageCache([
                    {
                        presetName: 'scale',
                        actions: [
                            {
                                action: 'scale',
                                config: {
                                    width: 20000,
                                    height: 10000,
                                    upscale: false,
                                },
                            },
                        ],
                    },
                ]);
                return [4 /*yield*/, imagecache.render('./examples/in.png', 'scale')];
            case 1:
                image = _a.sent();
                return [4 /*yield*/, image.toBuffer()];
            case 2:
                imageBuffer = _a.sent();
                expect(imageBuffer).toMatchImageSnapshot({
                    failureThresholdType: 'percent',
                    failureThreshold: 1,
                });
                return [2 /*return*/];
        }
    });
}); });
test('applies scale when width is missing', function () { return __awaiter(void 0, void 0, void 0, function () {
    var imagecache, image, imageBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imagecache = new imagecache_1.ImageCache([
                    {
                        presetName: 'scale',
                        actions: [
                            {
                                action: 'scale',
                                config: {
                                    height: 100,
                                },
                            },
                        ],
                    },
                ]);
                return [4 /*yield*/, imagecache.render('./examples/in.png', 'scale')];
            case 1:
                image = _a.sent();
                return [4 /*yield*/, image.toBuffer()];
            case 2:
                imageBuffer = _a.sent();
                expect(imageBuffer).toMatchImageSnapshot({
                    failureThresholdType: 'percent',
                    failureThreshold: 10,
                });
                return [2 /*return*/];
        }
    });
}); });
test('applies scale when height is missing', function () { return __awaiter(void 0, void 0, void 0, function () {
    var imagecache, image, imageBuffer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imagecache = new imagecache_1.ImageCache([
                    {
                        presetName: 'scale',
                        actions: [
                            {
                                action: 'scale',
                                config: {
                                    width: 200,
                                },
                            },
                        ],
                    },
                ]);
                return [4 /*yield*/, imagecache.render('./examples/in.png', 'scale')];
            case 1:
                image = _a.sent();
                return [4 /*yield*/, image.toBuffer()];
            case 2:
                imageBuffer = _a.sent();
                expect(imageBuffer).toMatchImageSnapshot({
                    failureThresholdType: 'percent',
                    failureThreshold: 10,
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=scale.test.js.map