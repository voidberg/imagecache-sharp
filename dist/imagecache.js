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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCache = void 0;
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var index_1 = __importDefault(require("./plugins/index"));
var ImageCache = /** @class */ (function () {
    /**
     * Creates a new instance of ImageCache
     * with a list of presets.
     *
     * @param presets A list of presets
     * @returns The new ImageCache instance
     */
    function ImageCache(_presets) {
        var _this = this;
        this.presets = _presets;
        this.plugins = index_1.default;
        this.actions = {};
        index_1.default.forEach(function (plugin) {
            Object.keys(plugin.actions).forEach(function (name) {
                return _this.registerAction(name, plugin.actions[name]);
            });
        }, this);
    }
    /**
     * Returns a list of the available presets
     *
     * @returns The list of available presets
     */
    ImageCache.prototype.presetList = function () {
        return this.presets;
    };
    /**
     * Returns a list of the available plugins
     *
     * @returns The list of available plugins
     */
    ImageCache.prototype.pluginList = function () {
        return this.plugins;
    };
    /**
     * Returns a list of the available actions
     *
     * @returns The list of available actions
     */
    ImageCache.prototype.actionList = function () {
        return Object.keys(this.actions);
    };
    /**
     * Registers an action from a plugin
     *
     */
    ImageCache.prototype.registerAction = function (name, callback) {
        this.actions[name] = callback;
    };
    /**
     * Gets an action
     *
     */
    ImageCache.prototype.getAction = function (name) {
        return this.actions[name];
    };
    /**
     * Renders an image using the supplied preset.
     *
     * @param image The image to be rendered
     * @param presetName The preset to use
     */
    ImageCache.prototype.render = function (image, presetName) {
        return __awaiter(this, void 0, void 0, function () {
            var sharpInstance, metadata;
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var preset, _i, _a, action, actionCallback, e_1;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    preset = this.presets.find(function (preset) { return preset.presetName === presetName; });
                                    if (!preset) {
                                        return [2 /*return*/, reject(new Error("Preset " + presetName + " could not be found."))];
                                    }
                                    if (!fs_1.default.existsSync(image)) {
                                        return [2 /*return*/, reject(new Error("File " + image + " does not exist."))];
                                    }
                                    try {
                                        sharpInstance = sharp_1.default(image);
                                    }
                                    catch (sharpErr) {
                                        return [2 /*return*/, reject(sharpErr)];
                                    }
                                    return [4 /*yield*/, sharpInstance.metadata()];
                                case 1:
                                    metadata = _b.sent();
                                    _b.label = 2;
                                case 2:
                                    _b.trys.push([2, 7, , 8]);
                                    _i = 0, _a = preset.actions;
                                    _b.label = 3;
                                case 3:
                                    if (!(_i < _a.length)) return [3 /*break*/, 6];
                                    action = _a[_i];
                                    actionCallback = this.getAction(action.action);
                                    if (!actionCallback) {
                                        throw new Error("Action " + action.action + " for preset " + presetName + " not found in loaded plugins.");
                                    }
                                    return [4 /*yield*/, actionCallback(this, sharpInstance, metadata, action.config || {})];
                                case 4:
                                    sharpInstance = _b.sent();
                                    _b.label = 5;
                                case 5:
                                    _i++;
                                    return [3 /*break*/, 3];
                                case 6: return [3 /*break*/, 8];
                                case 7:
                                    e_1 = _b.sent();
                                    return [2 /*return*/, reject(e_1)];
                                case 8:
                                    resolve(sharpInstance);
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return ImageCache;
}());
exports.ImageCache = ImageCache;
//# sourceMappingURL=imagecache.js.map