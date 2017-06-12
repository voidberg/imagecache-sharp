import { readdirSync, accessSync, constants } from 'fs';
import { resolve } from 'path';
import sharp from 'sharp';
import async from 'async';

module.exports = class ImageCache {
  /**
   * constructor() returns a new ImageCache
   * instance with a list of presets.
   *
   * @param {Object} presets
   * @return {ImageCache} instance
   */
  constructor(presets) {
    this.presetsConfiguration = presets;
    this.actions = {};
    this.pluginNames = [];

    readdirSync(resolve(__dirname, './plugins/')).forEach(file => {
      let name;
      let plugin;

      if (file.match(/.+\.js/g) !== null && file !== 'index.js') {
        name = file.replace('.js', '');
        plugin = require(`./plugins/${file}`); // eslint-disable-line

        plugin.attach(this);
        this.pluginNames.push(name);
      }
    });
  }

  /**
   * presets() returns a list
   * of all available presets.
   *
   * @return {Array} list of presets
   */
  presets() {
    return Object.getOwnPropertyNames(this.presetsConfiguration);
  }

  /**
   * plugins() returns a list
   * of all available plugins.
   *
   * @return {Array} list of plugins
   */
  plugins() {
    return this.pluginNames;
  }

  /**
   * render() renders an image
   * using the supplied preset.
   *
   * @param {String} image
   * @param {String} presetName
   * @param {String} callback
   */
  render(image, presetName, callback) {
    // try {
    //   accessSync(image, constants.R_OK);
    // } catch (imageErr) {
    //   return callback(new Error(`File ${image} does not exist or is inaccesible.`));
    // }

    if (!this.presetsConfiguration[presetName]) {
      return callback(new Error(`Preset ${presetName} could not be found.`));
    }

    const preset = this.presetsConfiguration[presetName];
    let sharpInstance;

    try {
      sharpInstance = sharp(image);
    } catch (sharpErr) {
      callback(sharpErr);
    }

    let metadata = {};

    return sharpInstance.metadata().then(info => {
      metadata = info;

      async.each(preset.actions, (action, asyncCallback) => {
        if (!this.actions[action.action]) {
          return asyncCallback(new Error(`Action ${action.action} for preset ${presetName} not found in loaded plugins.`));
        }

        return this.actions[action.action](sharpInstance, metadata, action.config || {}, (err, processed) => {
          sharpInstance = processed;
          asyncCallback(err);
        });
      }, err => callback(err, sharpInstance));
    }).catch(err => {
      return callback(err);
    });
  }
};