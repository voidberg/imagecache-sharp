import type { Plugin } from '../imagecache';
import PluginConverter from './_converters';
import PluginBlur from './blur';
import PluginDefineCanvas from './define_canvas';
import PluginFile from './file';
import PluginFlip from './flip';
import PluginGamma from './gamma';
import PluginGreyscale from './greyscale';
import PluginNegate from './negate';
import PluginNormalize from './normalize';
import PluginRotate from './rotate';
import PluginScale from './scale';
import PluginScaleCrop from './scale_and_crop';
import PluginSharpen from './sharpen';

const plugins: Plugin[] = [
  PluginConverter,
  PluginBlur,
  PluginDefineCanvas,
  PluginFile,
  PluginFlip,
  PluginGamma,
  PluginGreyscale,
  PluginNegate,
  PluginNormalize,
  PluginRotate,
  PluginScaleCrop,
  PluginScale,
  PluginSharpen,
];

export default plugins;
