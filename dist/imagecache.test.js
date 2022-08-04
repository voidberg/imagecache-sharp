"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imagecache_1 = require("./imagecache");
var index_1 = __importDefault(require("./plugins/index"));
test('loads all plugins', function () {
    var pluginNames = [
        'Converter functions',
        'Blur',
        'Define canvas',
        'File',
        'Flip and flop',
        'Gamma',
        'Greyscale',
        'Negate',
        'Normalize',
        'Rotate',
        'Scale and crop',
        'Scale',
        'Sharpen',
    ];
    var imagecache = new imagecache_1.ImageCache([]);
    var plugins = imagecache.pluginList();
    var loadedPluginNames = plugins.map(function (plugin) { return plugin.name; });
    expect(loadedPluginNames).toEqual(pluginNames);
});
test('presets register their actions', function () {
    var actions = [];
    var imagecache = new imagecache_1.ImageCache([]);
    var loadedActions = imagecache.actionList();
    index_1.default.forEach(function (plugin) {
        actions = actions.concat(Object.keys(plugin.actions));
    });
    expect(loadedActions).toEqual(actions);
});
test('loads presets', function () {
    var presets = [
        {
            presetName: 's_crop_small',
            actions: [
                {
                    action: 'scale_and_crop',
                    config: {
                        width: 70,
                        height: 70,
                    },
                },
            ],
        },
        {
            presetName: 's_crop_teaser',
            actions: [
                {
                    action: 'scale_and_crop',
                    config: {
                        width: 152,
                        height: 152,
                    },
                },
            ],
        },
    ];
    var imagecache = new imagecache_1.ImageCache(presets);
    var loadedPresets = imagecache.presetList();
    expect(loadedPresets).toEqual(presets);
});
test('fails when the preset does not exist', function () {
    var presets = [
        {
            presetName: 's_crop_small',
            actions: [],
        },
    ];
    var imagecache = new imagecache_1.ImageCache(presets);
    expect(imagecache.render('./examples/in.png', 's_crop_smaller')).rejects.toThrow("Preset s_crop_smaller could not be found.");
});
test('fails when the action does not exist in any preset', function () {
    var presets = [
        {
            presetName: 's_crop_small',
            actions: [
                {
                    action: 'scale_and_croppp',
                    config: {
                        width: 70,
                        height: 70,
                    },
                },
            ],
        },
    ];
    var imagecache = new imagecache_1.ImageCache(presets);
    expect(imagecache.render('./examples/in.png', 's_crop_small')).rejects.toThrow("Action " + presets[0].actions[0].action + " for preset " + presets[0].presetName + " not found in loaded plugins.");
});
test('fails when the image does not exist', function () {
    var presets = [
        {
            presetName: 's_crop_small',
            actions: [],
        },
    ];
    var imagecache = new imagecache_1.ImageCache(presets);
    expect(imagecache.render('./examples/in_not_exists.png', 's_crop_small')).rejects.toThrow("File ./examples/in_not_exists.png does not exist.");
});
//# sourceMappingURL=imagecache.test.js.map