import { ImageCache, Image } from '../src/imagecache';
import presets from './presets';

const imagecache: ImageCache = new ImageCache(presets);

const generate_all_presets = async () => {
  for (const preset of presets) {
    console.log(`Generating ${preset.presetName}.`);
    try {
      const image: Image = await imagecache.render(
        './in.png',
        preset.presetName
      );
      await image.toFile(`out_${preset.presetName}.png`);
    } catch (e) {
      console.log(e);
    }
  }
};

generate_all_presets();
