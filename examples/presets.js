module.exports = {
  test_sc: {
    presetname: 'test_sc',
    actions: [
      {
        action: 'scale_and_crop',
        config: {
          width: 152,
          height: 152,
        },
      },
      {
        action: 'define_canvas',
        config: {
          color: '#333333',
          width: 400,
          height: 400,
        },
      },
      {
        action: 'blur',
      },
    ],
  },
  s_crop_tiny: {
    presetname: 's_crop_tiny',
    actions: [
      {
        action: 'scale_and_crop',
        config: {
          width: 32,
          height: 32,
        },
      },
    ],
  },
  s_crop_small: {
    presetname: 's_crop_small',
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
  s_crop_teaser: {
    presetname: 's_crop_teaser',
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
  s_scale_teaser: {
    presetname: 's_scale_teaser',
    actions: [
      {
        action: 'file',
        config: {
          gravity: 'center',
          path: 'watermark.png',
        },
      },
      {
        action: 'scale',
        config: {
          width: 340,
          height: 340,
          upscale: 0,
        },
      },
    ],
  },
};
