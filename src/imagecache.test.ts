import { ImageCache } from './imagecache';
import plugins from './plugins/index';

test('loads all plugins', () => {
  const pluginNames = [
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

  const imagecache = new ImageCache([]);
  const plugins = imagecache.pluginList();
  const loadedPluginNames = plugins.map((plugin) => plugin.name);

  expect(loadedPluginNames).toEqual(pluginNames);
});

test('presets register their actions', () => {
  let actions: string[] = [];
  const imagecache = new ImageCache([]);
  const loadedActions = imagecache.actionList();

  plugins.forEach((plugin) => {
    actions = actions.concat(Object.keys(plugin.actions));
  });

  expect(loadedActions).toEqual(actions);
});

test('loads presets', () => {
  const presets = [
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

  const imagecache = new ImageCache(presets);
  const loadedPresets = imagecache.presetList();

  expect(loadedPresets).toEqual(presets);
});

test('fails when the preset does not exist', () => {
  const presets = [
    {
      presetName: 's_crop_small',
      actions: [],
    },
  ];

  const imagecache = new ImageCache(presets);
  expect(
    imagecache.render('./examples/in.png', 's_crop_smaller')
  ).rejects.toThrow(`Preset s_crop_smaller could not be found.`);
});

test('fails when the action does not exist in any preset', () => {
  const presets = [
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

  const imagecache = new ImageCache(presets);
  expect(
    imagecache.render('./examples/in.png', 's_crop_small')
  ).rejects.toThrow(
    `Action ${presets[0].actions[0].action} for preset ${presets[0].presetName} not found in loaded plugins.`
  );
});

test('fails when the image does not exist', () => {
  const presets = [
    {
      presetName: 's_crop_small',
      actions: [],
    },
  ];

  const imagecache = new ImageCache(presets);
  expect(
    imagecache.render('./examples/in_not_exists.png', 's_crop_small')
  ).rejects.toThrow(`File ./examples/in_not_exists.png does not exist.`);
});
