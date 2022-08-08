export default [
  {
    presetName: "canvas_scale_with_blur",
    actions: [
      // {
      //   action: "scale_and_crop",
      //   config: {
      //     width: 152,
      //     height: 152,
      //   },
      // },
      {
        action: "define_canvas",
        config: {
          color: "#333333",
          width: 400,
          height: 400,
        },
      },
      {
        action: "blur",
        config: {
          sigma: 5,
        },
      },
    ],
  },
  {
    presetName: "scale_crop_tiny",
    actions: [
      {
        action: "scale_and_crop",
        config: {
          width: 32,
          height: 32,
        },
      },
    ],
  },
  {
    presetName: "scale_crop_small",
    actions: [
      {
        action: "scale_and_crop",
        config: {
          width: 70,
          height: 70,
        },
      },
    ],
  },
  {
    presetName: "scale_crop_teaser",
    actions: [
      {
        action: "scale_and_crop",
        config: {
          width: 152,
          height: 152,
        },
      },
    ],
  },
  {
    presetName: "scale_with_watermark",
    actions: [
      {
        action: "file",
        config: {
          gravity: "southeast",
          path: "watermark.png",
        },
      },
      {
        action: "scale",
        config: {
          width: 340,
          height: 340,
          upscale: 0,
        },
      },
    ],
  },
];
