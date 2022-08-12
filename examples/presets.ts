export default [
  {
    presetName: 'canvas_scale_with_blur',
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
        config: {
          sigma: 5,
        },
      },
    ],
  },
  {
    presetName: 'blur_and_flip',
    actions: [
      {
        action: 'blur',
        config: {
          sigma: 5,
        },
      },
      {
        action: 'flip',
      },
    ],
  },
  {
    presetName: 'scale_crop_teaser',
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
  {
    presetName: 'scale_with_watermark',
    actions: [
      {
        action: 'file',
        config: {
          gravity: 'northwest',
          path: 'watermark.png',
        },
      },
      {
        action: 'scale',
        config: {
          width: 600,
        },
      },
    ],
  },
];
