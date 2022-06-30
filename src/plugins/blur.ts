import sharp from "sharp";
import { ImageCache, Plugin } from "../imagecache";

const PluginBlur: Plugin = {
  name: "Blur",
  description: "This plugin implements the blur functionality.",
  actions: {
    blur: (
      instance: ImageCache,
      image: sharp.Sharp,
      metadata: object,
      config: { sigma: number }
    ): Promise<sharp.Sharp> => {
      const sigma = config.sigma || 50;

      return new Promise<sharp.Sharp>((resolve, reject) => {
        try {
          resolve(image.blur(sigma));
        } catch (e) {
          reject(e);
        }
      });
    },
  },
};

export default PluginBlur;
